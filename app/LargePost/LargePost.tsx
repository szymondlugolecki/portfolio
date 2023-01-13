import Link from "next/link";
import posts from "../../lib/posts";
import Post from "../Post";

import { ArrowLeft } from "tabler-icons-react";
import MyAvatar from "../User/MyAvatar";
import VerifiedCheckbox from "../User/VerifiedCheckbox";
import { getRandomInt } from "../../lib/utils";
import type { PostData } from "../types";
import LargeInteractionPanel from "./LargeInteractionPanel";

export default function LargePost({ postData }: { postData: PostData }) {
  const { content, date } = postData;

  const longDateFormat = new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="border-b-[1px] border-[#333]">
      <div className="flex flex-col px-4 py-1 text-[15px] font-normal leading-5 antialiased">
        {/* Author Section */}
        <div className="flex justify-start h-full">
          <MyAvatar size={48} />
          <div className="flex items-center w-full ml-3">
            <div className="flex flex-col items-start justify-center cursor-pointer">
              <div className="flex">
                <span className="font-bold cursor-pointer hover:underline decoration-2 underline-offset-1">
                  XyzMajin
                </span>
                <VerifiedCheckbox />
              </div>
              <span className="opacity-25">@majin_xyz</span>
            </div>
          </div>
        </div>
        {/* Content */}
        <div className="flex flex-col w-full mt-3">
          {/* Post Content */}
          <div>
            <p className="tracking-normal antialiased leading-7 break-words whitespace-pre-line text-[23px]">
              {content}
            </p>
          </div>
          {/* <PostInteractionPanel /> */}
        </div>
        {/* Time Posted & Views */}
        <div className="mt-3 text-[#71767b] cursor-pointer hover:underline">
          <span>
            {longDateFormat.format(date)} · {getRandomInt(150, 999)} Views
          </span>
        </div>
        {/* Interaction Panel Section */}
        {/* <div className="min-h-[48px]"></div> */}
        <LargeInteractionPanel />
      </div>
    </div>
  );
}
