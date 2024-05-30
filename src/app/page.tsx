import Link from "next/link";
import Post from "@/components/post";

import posts from "../lib/posts";

export default function Home() {
  return (
    <>
      <Link
        href="/"
        className="sticky h-[53px] px-4 flex items-center border-b-[1px] border-[#333]"
      >
        <h2 className="text-xl font-bold">Home</h2>
      </Link>
      {posts
        .filter((post) => post.type === "parent")
        .map((post, index) => (
          <Post
            post={post}
            key={index}
            replyCount={
              posts.filter(
                (p) => p.category === post.category && p.type === "child"
              ).length
            }
          />
        ))}
    </>
  );
}
