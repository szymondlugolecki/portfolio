import Link from "next/link";
import { author, shortDateFormat } from "@/constants";
import type { PostData } from "@/types";
import Avatar from "@/components/user/avatar";
import VerifiedCheckbox from "@/lib/components/user/verified-checkbox";
import SmallPostInteractionPanel from "./small-post-interaction-panel";

export default function Post({
  post,
  replyCount,
}: {
  post: PostData;
  replyCount: number;
}) {
  const { content, date, category, link } = post;

  return (
    <Link
      href={"/" + category}
      className="border-b-[1px] border-[#333] select-none"
    >
      <div className="flex px-3 py-2 text-[15px] font-normal leading-5 antialiased">
        {/* Avatar Section */}
        <div className="flex flex-col justify-center h-full min-w-[40px]">
          <Avatar size={40} />
        </div>
        {/* Content & Author */}
        <div className="flex flex-col w-full px-3">
          {/* Post Author */}
          <div className="flex items-center gap-x-0.5 text-start">
            <span className="font-bold hover:underline decoration-2 underline-offset-1">
              {author.name}
            </span>
            {author.verified ? <VerifiedCheckbox /> : null}
            <div className="flex gap-x-1">
              <span className="text-[#71767b]">{author.username}</span>
              <span className="text-[#71767b]">·</span>
              <span className="text-[#71767b] hover:underline">
                {shortDateFormat.format(date)}
              </span>
            </div>
          </div>
          {/* Post Content */}
          <div>
            <p className="break-words whitespace-pre-line">
              {content}
              {link && (
                <>
                  <br />
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={link}
                    className="text-blue-400 break-all"
                  >
                    {link}
                  </a>
                </>
              )}
            </p>
          </div>
          <SmallPostInteractionPanel replyCount={replyCount} />
        </div>
      </div>
    </Link>
  );
}
