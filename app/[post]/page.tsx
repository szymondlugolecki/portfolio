import Link from "next/link";

import LargePost from "../LargePost";
import ReplyPost from "../ReplyPost";

import posts from "../../lib/posts";

import { ArrowLeft } from "tabler-icons-react";

export default function PostPage({ params }: { params: { post: string } }) {
  const postHref = params.post.toLowerCase();

  const parentPost = posts.find(
    (post) => post.category === postHref && post.type === "parent"
  );
  const childrenPosts = posts.filter(
    (post) => post.category === postHref && post.type === "child"
  );

  if (!parentPost) {
    return (
      <div>
        <span className="text-xl text-start">This post does not exist 😢</span>
      </div>
    );
  }

  return (
    <>
      <Link
        href="/"
        className="sticky h-[53px] px-4 flex justify-start items-center"
      >
        <div className="min-w-[56px]">
          <button
            aria-label="This button does not do anything"
            className="p-2 duration-200 hover:bg-opacity-10 hover:bg-[#e7e9ea] rounded-full"
          >
            <ArrowLeft />
          </button>
        </div>
        <h2 className="text-xl font-bold">Tweet</h2>
      </Link>
      {/* Parent Post */}
      <LargePost postData={parentPost} />
      {/* Children Posts */}
      {childrenPosts.map((post, index) => (
        <ReplyPost postData={post} key={index} />
      ))}
    </>
  );
}
