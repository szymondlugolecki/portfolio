import MyAvatar from "../User/MyAvatar";
import VerifiedCheckbox from "../User/VerifiedCheckbox";
import PostInteractionPanel from "../Post/InteractionPanel";
import SkillBar from "./SkillBar";

import { author, shortDateFormat } from "../../lib/constants";

import type { PostData } from "../types";

export default function ReplyPost({ postData }: { postData: PostData }) {
  const { content, date, skillBars } = postData;

  return (
    <div className="border-b-[1px] border-[#333] cursor-pointer">
      <div className="flex px-4 py-3 text-[15px] font-normal leading-5 antialiased">
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
              {shortDateFormat.format(date)}
            </span>
          </div>
          {/* Post Content */}
          <div>
            <p className="mb-2 break-words whitespace-pre-line">{content}</p>
            {skillBars?.map(({ label, value, color }, index) => (
              <SkillBar
                skillLabel={label}
                skillValue={value}
                skillColor={color}
                key={index}
              />
            ))}
          </div>
          <PostInteractionPanel />
        </div>
      </div>
    </div>
  );
}
