import Link from "next/link";

export type PostMeta = {
  slug: string;
  title: string;
  date?: string;
};

export default function PostList({ posts }: { posts: PostMeta[] }) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.slug}>
          <Link href={`/posts/${post.slug}`}>
            {post.title} {post.date ? <span style={{ color: "#888", fontSize: 14 }}>({post.date})</span> : null}
          </Link>
        </li>
      ))}
    </ul>
  );
}