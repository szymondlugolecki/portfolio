import {
  IconBookmark,
  IconChartBar,
  IconHeart,
  IconRepeat,
  IconMessageCircle2,
  IconShare2,
} from "@tabler/icons-react";

import SmallPostInteractionPanelButton from "./small-post-interaction-panel-button";

export default function SmallPostInteractionPanel({
  replyCount,
}: {
  replyCount: number;
}) {
  return (
    <div className="w-full">
      <div className="relative flex justify-between py-1">
        <SmallPostInteractionPanelButton interactionCount={replyCount}>
          <div className="peer absolute z-50 top-0 bottom-0 left-0 right-0 m-[-8px] rounded-full inline-flex hover:bg-[#1d9bf0] hover:bg-opacity-10 duration-200" />
          <IconMessageCircle2
            size={19}
            fillRule="inherit"
            className="relative duration-200 peer-hover:text-[#1d9bf0] text-[#71767b]"
          />
        </SmallPostInteractionPanelButton>

        {/* Reposts */}
        <SmallPostInteractionPanelButton interactionCount={5}>
          <div className="peer absolute z-50 top-0 bottom-0 left-0 right-0 m-[-8px] rounded-full inline-flex hover:bg-[#1d9bf0] hover:bg-opacity-10 duration-200" />
          <IconRepeat
            size={19}
            fillRule="inherit"
            className="relative duration-200 peer-hover:text-[#00ba7c] text-[#71767b]"
          />
        </SmallPostInteractionPanelButton>

        {/* Likes */}
        <SmallPostInteractionPanelButton interactionCount={10}>
          <div className="relative">
            <div className="peer absolute z-50 top-0 bottom-0 left-0 right-0 m-[-8px] rounded-full inline-flex hover:bg-[#f91880] hover:bg-opacity-10 duration-200" />
            <IconHeart
              size={19}
              fillRule="inherit"
              className="relative duration-200 peer-hover:text-[#f91880] text-[#71767b]"
            />
          </div>
        </SmallPostInteractionPanelButton>

        {/* Impressions */}
        <SmallPostInteractionPanelButton interactionCount={700}>
          <div className="relative">
            <div className="peer absolute z-50 top-0 bottom-0 left-0 right-0 m-[-8px] rounded-full inline-flex hover:bg-[#1d9bf0] hover:bg-opacity-10 duration-200" />
            <IconChartBar
              size={19}
              fillRule="inherit"
              strokeWidth={1.25}
              className="relative duration-200 peer-hover:text-[#1d9bf0] text-[#71767b]"
            />
          </div>
        </SmallPostInteractionPanelButton>

        {/* Share & Bookmark */}
        <div className="flex items-center gap-x-2">
          <SmallPostInteractionPanelButton>
            <div className="relative">
              <div className="peer absolute z-50 top-0 bottom-0 left-0 right-0 m-[-8px] rounded-full inline-flex hover:bg-[#1d9bf0] hover:bg-opacity-10 duration-200" />
              <IconBookmark
                size={19}
                fillRule="inherit"
                className="relative duration-200 peer-hover:text-[#1d9bf0] text-[#71767b]"
              />
            </div>
          </SmallPostInteractionPanelButton>
          <SmallPostInteractionPanelButton>
            <div className="relative">
              <div className="peer absolute z-50 top-0 bottom-0 left-0 right-0 m-[-8px] rounded-full inline-flex hover:bg-[#1d9bf0] hover:bg-opacity-10 duration-200" />
              <IconShare2
                size={19}
                fillRule="inherit"
                className="relative duration-200 peer-hover:text-[#1d9bf0] text-[#71767b]"
              />
            </div>
          </SmallPostInteractionPanelButton>
        </div>
      </div>
    </div>
  );
}
