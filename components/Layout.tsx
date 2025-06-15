import React, { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        maxWidth: 800,
        margin: "0 auto",
        padding: 24,
        paddingLeft: 120, // 整体右移，原本是80
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
      {/* main 增加 paddingLeft，让内容进一步右移 */}
      <footer style={{ marginTop: 40, textAlign: "center", color: "#888" }}>
        © {new Date().getFullYear()} ShiweiShang
      </footer>
    </div>
  );
}