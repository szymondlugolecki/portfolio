import Link from "next/link";
import { Star } from "tabler-icons-react";
import posts from "../lib/posts";
import Post from "./Post";

export default function Home() {
  return (
    <>
      <Link
        href=""
        className="sticky h-[53px] px-4 flex justify-between items-center border-b-[1px] border-[#333]"
      >
        <h2 className="text-xl font-bold">Home</h2>
        <button
          aria-label="This button does not do anything"
          className="p-2 duration-200 hover:bg-opacity-10 hover:bg-[#e7e9ea] rounded-full"
        >
          <Star />
        </button>
      </Link>
      {posts
        .filter((post) => post.type === "parent")
        .map((post, index) => (
          <Post post={post} key={index} />
        ))}
    </>
  );
}
