import {
  MessageShare,
  Heart,
  Share,
  MessageCircle2,
  AntennaBars5,
} from "tabler-icons-react";

export default function PostInteractionPanel({}) {
  return (
    <div className="w-full mt-2">
      <div className="flex justify-between py-1 max-w-[425px] relative">
        <button className="min-h-[20px]">
          <div className="relative">
            <div className="peer absolute z-50 top-0 bottom-0 left-0 right-0 m-[-8px] rounded-full inline-flex hover:bg-[#1d9bf0] hover:bg-opacity-10 duration-200" />
            <div className="peer absolute z-50 top-0 bottom-0 left-0 right-0 m-[-8px] rounded-full inline-flex hover:bg-[#1d9bf0] hover:bg-opacity-10 duration-200" />
            <AntennaBars5
              size={19}
              fillRule="inherit"
              className="relative duration-200 peer-hover:text-[#1d9bf0] text-[#71767b]"
            />
          </div>
        </button>
        <button className="min-h-[20px]">
          <div className="relative">
            <div className="peer absolute z-50 top-0 bottom-0 left-0 right-0 m-[-8px] rounded-full inline-flex hover:bg-[#1d9bf0] hover:bg-opacity-10 duration-200" />
            <MessageCircle2
              size={19}
              fillRule="inherit"
              className="relative duration-200 peer-hover:text-[#1d9bf0] text-[#71767b]"
            />
          </div>
        </button>
        <button className="min-h-[20px]">
          <div className="relative">
            <div className="peer absolute z-50 top-0 bottom-0 left-0 right-0 m-[-8px] rounded-full inline-flex hover:bg-[#00ba7c] hover:bg-opacity-10 duration-200" />
            <MessageShare
              size={19}
              fillRule="inherit"
              className="relative duration-200 peer-hover:text-[#00ba7c] text-[#71767b]"
            />
          </div>
        </button>
        <button className="min-h-[20px]">
          <div className="relative">
            <div className="peer absolute z-50 top-0 bottom-0 left-0 right-0 m-[-8px] rounded-full inline-flex hover:bg-[#f91880] hover:bg-opacity-10 duration-200" />
            <Heart
              size={19}
              fillRule="inherit"
              className="relative duration-200 peer-hover:text-[#f91880] text-[#71767b]"
            />
          </div>
        </button>
        <button className="min-h-[20px]">
          <div className="relative">
            <div className="peer absolute z-50 top-0 bottom-0 left-0 right-0 m-[-8px] rounded-full inline-flex hover:bg-[#1d9bf0] hover:bg-opacity-10 duration-200" />
            <Share
              size={19}
              fillRule="inherit"
              className="relative duration-200 peer-hover:text-[#1d9bf0] text-[#71767b]"
            />
          </div>
        </button>
      </div>
    </div>
  );
}
