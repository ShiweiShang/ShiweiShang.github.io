import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Layout from "../components/Layout";
import PostList, { PostMeta } from "../components/PostList";

function getPosts(): PostMeta[] {
  const postsDirectory = path.join(process.cwd(), "posts");
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .filter(name => name.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);
      return {
        slug,
        title: data.title || slug,
        date: data.date || "",
      };
    })
    .sort((a, b) => (b.date || "").localeCompare(a.date || ""));
}

export default function Blog() {
  const posts = getPosts();
  return (
    <Layout>
      <h2>博客目录</h2>
      <PostList posts={posts} />
      <p>添加文章：在 <code>/posts</code> 文件夹下添加 Markdown 文件即可。</p>
    </Layout>
  );
}