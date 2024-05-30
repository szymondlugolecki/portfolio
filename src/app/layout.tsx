import localFont from "@next/font/local";

import LeftNavbar from "@/components/left-navbar";
import Trend from "@/components/trend";

import { IconSearch } from "@tabler/icons-react";
import { getRandomInt, shuffleArray } from "@/lib/utils";

import "./globals.css";

const chirpFont = localFont({
  variable: "--font-chirp",
  src: [
    {
      path: "../lib/fonts/chirp-regular-web.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../lib/fonts/chirp-medium-web.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../lib/fonts/chirp-bold-web.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "../lib/fonts/chirp-heavy-web.woff",
      weight: "800",
      style: "normal",
    },
  ],
});

// Simulating fetching trends from an API
export function getTrends() {
  const trends = [
    "Hiring",
    "Web Dev",
    "React",
    "Frontend",
    "Fullstack",
    "Looking for job",
  ];

  return Promise.resolve(
    shuffleArray(trends).map((trend) => ({
      name: trend,
      postCount: getRandomInt(100, 1000),
    }))
  );
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const trends = await getTrends();

  return (
    <html lang="en" className={`grid h-full ${chirpFont.variable}`}>
      <head />
      <body className="w-full h-full bg-[#000] text-[#e7e9ea] font-chirp">
        <div className="flex flex-row justify-center w-full h-full">
          <header className="flex justify-end flex-grow h-full min-w-0 min-h-screen m-0">
            <LeftNavbar />
          </header>
          <main className="relative flex justify-start flex-grow h-full min-w-0 min-h-screen m-0">
            <div className="w-full md:w-[600px] lg:w-[920px] xl:w-[990px] flex justify-between">
              {/* Main Content */}
              <div className="h-full max-w-[600px] border-x-[1px] border-[#333] w-full flex flex-col flex-grow">
                {/* Home Header */}
                {/* Posts */}
                {children}
                <div className="w-full h-screen" />
              </div>
              {/* RightNavbar / Trends */}
              <div className="h-full w-[290px] xl:w-[350px] hidden lg:inline mr-[10px]">
                <div className="h-[44px] min-h-[32px] my-[12px]">
                  <div className="flex rounded-3xl bg-[#16181c] items-center h-full group/search focus-within:border-[#1d9bf0] border-[1px] border-black">
                    <IconSearch
                      size={16}
                      stroke="#71767b"
                      strokeWidth={3}
                      className="ml-4 mr-2 group-focus-within/search:stroke-[#1d9bf0]"
                    />
                    <input
                      placeholder="Search..."
                      aria-label="This does not do anything! It's just a dummy element."
                      className="w-full h-full px-2 py-2 outline-none rounded-r-3xl bg-inherit text-[#71767b]"
                    />
                  </div>
                </div>
                <div className="contents">
                  <div className="sticky top-3">
                    <section className="bg-[#16181c] w-full rounded-2xl flex flex-col justify-start my-3">
                      <div className="px-4 py-3 font-extrabold text-start">
                        <span className="text-xl antialiased">
                          Trends for you
                        </span>
                      </div>
                      {trends.map((trend, index) => (
                        <Trend trend={trend} key={index} />
                      ))}
                    </section>
                    <div className="flex text-[13px] text-[#71767b]">
                      <span>@ 2024 Szymon Długołęcki, Inc.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
