import Link from "next/link";

export default function Trend({
  trend,
}: {
  trend: {
    name: string;
    postCount: number;
  };
}) {
  return (
    <Link
      href="#"
      aria-label="This is a dummy element. It does not do anything."
      className="flex flex-col px-4 py-3 duration-200 last:rounded-b-2xl hover:bg-white hover:bg-opacity-5"
    >
      <span className="text-[13px] text-[#71767b]">Trending</span>
      <span className="mt-[2px] text-[15px] font-bold leading-5">
        {trend.name}
      </span>
      <span className="mt-1 text-[13px] text-[#71767b]">
        {trend.postCount} posts
      </span>
    </Link>
  );
}
