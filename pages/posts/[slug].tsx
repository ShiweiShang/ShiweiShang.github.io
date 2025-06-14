import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { GetStaticPaths, GetStaticProps } from "next";
import Layout from "../../components/Layout";
import React from "react";

export default function PostPage({ title, content }: { title: string; content: string }) {
  return (
    <Layout>
      <h2>{title}</h2>
      <div dangerouslySetInnerHTML={{ __html: content }} />
      <a href="/blog" style={{ display: "block", marginTop: 20 }}>← 返回博客目录</a>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const postsDirectory = path.join(process.cwd(), "posts");
  const filenames = fs.readdirSync(postsDirectory);
  const paths = filenames
    .filter(name => name.endsWith(".md"))
    .map((filename) => ({
      params: { slug: filename.replace(/\.md$/, "") },
    }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const fullPath = path.join(process.cwd(), "posts", slug + ".md");
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  // 这里简单地用 innerHTML 渲染 markdown，可以用更高级的库比如 remark
  const marked = require("marked");
  const htmlContent = marked.parse(content);

  return {
    props: {
      title: data.title || slug,
      content: htmlContent,
    },
  };
};