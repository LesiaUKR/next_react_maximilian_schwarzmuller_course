import React from "react";

export default function BlogPostPage({ params }) {
  console.log(params);
  return (
    <main>
      <h1>The Blog</h1>
      <p>Post: {params.slug}</p>
    </main>
  );
}
