import React, { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        maxWidth: 800,
        margin: "0 auto",
        padding: 24,
        paddingLeft: 120, // 增大左边空白
      }}
    >
      <header>
        <h1>我的个人主页</h1>
        <nav>
          <a href="/" style={{ marginRight: 16 }}>自我介绍</a>
          <a href="/blog">博客</a>
        </nav>
        <hr />
      </header>
      <main style={{ paddingLeft: 40 }}>{children}</main>
      {/* main 区域也右移，内容更居中 */}
      <footer style={{ marginTop: 40, textAlign: "center", color: "#888" }}>
        © {new Date().getFullYear()} ShiweiShang
      </footer>
    </div>
  );
}
