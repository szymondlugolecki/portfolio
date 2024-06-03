import Avatar from "@/components/user/avatar";
import VerifiedCheckbox from "@/lib/components/user/verified-checkbox";

import { author, shortDateFormat } from "@/lib/utils/constants";
import type { PostData } from "@/lib/types";
import SmallPostInteractionPanel from "@/lib/components/post/small-post-interaction-panel";

export default function ReplyPost({ postData }: { postData: PostData }) {
  const { content, date, link } = postData;

  return (
    <div className="border-b-[1px] border-[#333]">
      <div className="pt-3"></div>
      <div className="flex px-4 text-[15px] font-normal leading-5">
        {/* Avatar Section */}
        <div className="flex flex-col justify-center h-full basis-10 min-w-[40px]">
          <Avatar size={40} />
        </div>
        {/* Content & Author */}
        <div className="flex flex-col w-full px-3 pb-3">
          {/* Post Author */}
          <div className="flex flex-col cursor-pointer sm:items-center sm:flex-row gap-x-0.5 text-start">
            <div className="flex items-center gap-x-0.5">
              <span className="font-bold text-[15px] leading-5 hover:underline decoration-1 underline-offset-1">
                {author.name}
              </span>
              {author.verified ? <VerifiedCheckbox /> : null}
            </div>
            <div className="flex gap-x-1">
              <span className="leading-5 text-[#71767b]">
                {author.username}
              </span>
              <span className="leading-5 text-[#71767b]">·</span>
              <span className="leading-5 text-[#71767b] hover:underline">
                {shortDateFormat.format(date)}
              </span>
            </div>
          </div>
          {/* Post Content */}
          <div>
            <p className="leading-5 text-pretty">
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
          <SmallPostInteractionPanel replyCount={0} />
        </div>
      </div>
    </div>
  );
}
