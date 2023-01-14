import { MessageShare, Heart, Share, MessageCircle2 } from "tabler-icons-react";

export default function LargeInteractionPanel() {
  return (
    <div className="w-full mt-3">
      <div className="w-full flex justify-evenly pt-1 relative min-h-[48px] border-[#333] border-t-[1px]">
        <button className="min-h-[20px]">
          <div className="relative">
            <div className="peer absolute z-50 top-0 bottom-0 left-0 right-0 m-[-8px] rounded-full inline-flex hover:bg-[#1d9bf0] hover:bg-opacity-10 duration-200" />
            <MessageCircle2
              size={22.5}
              fillRule="inherit"
              className="relative duration-200 peer-hover:text-[#1d9bf0] text-[#71767b]"
            />
          </div>
        </button>
        <button className="min-h-[20px]">
          <div className="relative">
            <div className="peer absolute z-50 top-0 bottom-0 left-0 right-0 m-[-8px] rounded-full inline-flex hover:bg-[#00ba7c] hover:bg-opacity-10 duration-200" />
            <MessageShare
              size={22.5}
              fillRule="inherit"
              className="relative duration-200 peer-hover:text-[#00ba7c] text-[#71767b]"
            />
          </div>
        </button>
        <button className="min-h-[20px]">
          <div className="relative">
            <div className="peer absolute z-50 top-0 bottom-0 left-0 right-0 m-[-8px] rounded-full inline-flex hover:bg-[#f91880] hover:bg-opacity-10 duration-200" />
            <Heart
              size={22.5}
              fillRule="inherit"
              className="relative duration-200 peer-hover:text-[#f91880] text-[#71767b]"
            />
          </div>
        </button>
        <button className="min-h-[20px]">
          <div className="relative">
            <div className="peer absolute z-50 top-0 bottom-0 left-0 right-0 m-[-8px] rounded-full inline-flex hover:bg-[#1d9bf0] hover:bg-opacity-10 duration-200" />
            <Share
              size={22.5}
              fillRule="inherit"
              className="relative duration-200 peer-hover:text-[#1d9bf0] text-[#71767b]"
            />
          </div>
        </button>
      </div>
    </div>
  );
}
