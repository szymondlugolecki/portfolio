import Avatar from "@/components/user/avatar";
import VerifiedCheckbox from "@/lib/components/user/verified-checkbox";
import type { PostData } from "@/types";
import LargeInteractionPanel from "./large-post-interaction-panel";
import { longDateFormat, timeFormat } from "@/constants";

export default function LargePost({
  postData,
  replyCount,
}: {
  postData: PostData;
  replyCount: number;
}) {
  const { content, date, link } = postData;

  return (
    <div className="border-b-[1px] border-[#333]">
      <div className="flex flex-col px-4 text-[15px] font-normal leading-5 antialiased">
        {/* Author Section */}
        <div className="flex justify-start gap-x-2">
          <Avatar size={40} />
          <div className="flex items-center w-full">
            <div className="flex flex-col items-start justify-center cursor-pointer">
              <div className="flex items-center gap-x-0.5">
                <span className="font-bold leading-5 cursor-pointer hover:underline decoration-1 underline-offset-1">
                  Dlugolecki
                </span>
                <VerifiedCheckbox />
              </div>
              <span className="font-normal text-[#71767b]">@dlugolecki</span>
            </div>
          </div>
        </div>
        {/* Content */}
        <div className="flex flex-col w-full mt-3">
          {/* Post Content */}
          <div>
            <p className="tracking-normal antialiased leading-6 break-words whitespace-pre-line text-[17px]">
              {content}
              {link && (
                <>
                  <br />
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={link}
                    className="text-blue-400 "
                  >
                    {link}
                  </a>
                </>
              )}
            </p>
          </div>
          {/* <PostInteractionPanel /> */}
        </div>
        {/* Time Posted & Views */}
        <div className="py-4 text-[#71767b] cursor-pointer hover:underline text-sm">
          <div>
            <time dateTime={date.toString()}>
              {timeFormat.format(date)} · {longDateFormat.format(date)}
            </time>
            <span className="px-0.5"> · </span>
            <strong className="text-white font-font">888</strong> Views
          </div>
        </div>
        {/* Interaction Panel Section */}
        {/* <div className="min-h-[48px]"></div> */}
        <LargeInteractionPanel replyCount={replyCount} />
      </div>
    </div>
  );
}
