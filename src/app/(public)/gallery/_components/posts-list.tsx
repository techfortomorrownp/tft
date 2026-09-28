"use client";

import posts from "@/data/posts.json";
import InstagramPost from "./instagram-post";

export default function InstagramPosts() {
  return (
    <section className="border-t border-border/50 py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="grid justify-center gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <InstagramPost
              key={`${post.url}-${index}`}
              url={post.url}
            />
          ))}
        </div>
      </div>
    </section>
  );
}