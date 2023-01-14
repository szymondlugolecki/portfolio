import Link from "next/link";
import { getRandomInt } from "../../lib/utils";

import type { TrendData } from "../types";

export default function Trend({ trendData }: { trendData: TrendData }) {
  const { headText, name } = trendData;

  const numberOfTweets = getRandomInt(100, 999);

  return (
    <Link
      href="#"
      aria-label="This is a dummy element. It does not do anything."
      className="flex flex-col px-4 py-3 duration-200 last:rounded-b-2xl hover:bg-white hover:bg-opacity-5"
    >
      <span className="text-[13px] text-[#71767b]">{headText}</span>
      <span className="mt-[2px] text-[15px] font-bold leading-5">{name}</span>
      <span className="mt-1 text-[13px] text-[#71767b]">
        {numberOfTweets} Tweets
      </span>
    </Link>
  );
}
