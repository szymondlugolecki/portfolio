import {
  IconBookmark,
  IconHeart,
  IconRepeat,
  IconMessageCircle2,
  IconShare2,
} from "@tabler/icons-react";
import LargeInteractionPanelButton from "./large-post-interaction-panel-button";

export default function LargeInteractionPanel({
  replyCount,
}: {
  replyCount: number;
}) {
  return (
    <div className="w-full">
      <div className="w-full flex justify-between items-center relative min-h-[48px] border-[#333] border-t-[1px]">
        {/* Reply */}
        <LargeInteractionPanelButton interactionCount={replyCount}>
          <IconMessageCircle2
            size={22.5}
            fillRule="inherit"
            className="relative duration-200 peer-hover:text-[#1d9bf0] text-[#71767b]"
          />
        </LargeInteractionPanelButton>

        {/* Repost */}
        <LargeInteractionPanelButton interactionCount={5}>
          <IconRepeat
            size={22.5}
            fillRule="inherit"
            className="relative duration-200 peer-hover:text-[#00ba7c] text-[#71767b]"
          />
        </LargeInteractionPanelButton>

        {/* Like */}
        <LargeInteractionPanelButton interactionCount={10}>
          <IconHeart
            size={22.5}
            fillRule="inherit"
            className="relative duration-200 peer-hover:text-[#f91880] text-[#71767b]"
          />
        </LargeInteractionPanelButton>

        {/* Bookmark */}
        <LargeInteractionPanelButton interactionCount={2}>
          <IconBookmark
            size={22.5}
            fillRule="inherit"
            className="relative duration-200 peer-hover:text-[#1d9bf0] text-[#71767b]"
          />
        </LargeInteractionPanelButton>

        {/* Share */}
        <LargeInteractionPanelButton>
          <IconShare2
            size={22.5}
            fillRule="inherit"
            className="relative duration-200 peer-hover:text-[#1d9bf0] text-[#71767b]"
          />
        </LargeInteractionPanelButton>
      </div>
    </div>
  );
}
