import Image from "next/image";
import Link from "next/link";
import { author } from "../../lib/constants";
import type { PostData } from "../types";
import PostInteractionPanel from "./InteractionPanel";
import MyAvatar from "../User/MyAvatar";
import VerifiedCheckbox from "../User/VerifiedCheckbox";

export default function Post({ post }: { post: PostData }) {
  const { content, date, href } = post;

  const dateFormat = new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "short",
  });

  return (
    <Link
      href={"/" + href}
      className="border-b-[1px] border-[#333] select-none"
    >
      <div className="flex px-3 py-2 text-[15px] font-normal leading-5 antialiased">
        {/* Avatar Section */}
        <div className="flex flex-col justify-center h-full">
          <MyAvatar size={48} />
        </div>
        {/* Content & Author */}
        <div className="flex flex-col w-full px-3">
          {/* Post Author */}
          <div className="flex items-center gap-1 mb-[2px] text-start">
            <span className="font-bold hover:underline decoration-2 underline-offset-1">
              {author.name}
            </span>
            {author.verified ? <VerifiedCheckbox /> : null}
            <span className="opacity-25">{author.username}</span>
            <span className="opacity-25">·</span>
            <span className="opacity-25 hover:underline">
              {dateFormat.format(date)}
            </span>
          </div>
          {/* Post Content */}
          <div>
            <p className="break-words whitespace-pre-line">{content}</p>
          </div>
          <PostInteractionPanel />
        </div>
      </div>
    </Link>
  );
}
