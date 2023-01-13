import localFont from "@next/font/local";
import Link from "next/link";
import posts from "../lib/posts";
import trends from "../lib/trends";
import LeftNavbar from "./LeftNavbar";
import Post from "./Post";
import { Star } from "tabler-icons-react";
import Trend from "./Trend";

import "./globals.css";

const myFont = localFont({
  variable: "--font-chirp",
  src: [
    {
      path: "./chirp-regular-web.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "./chirp-medium-web.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "./chirp-bold-web.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "./chirp-heavy-web.woff",
      weight: "800",
      style: "normal",
    },
  ],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`grid h-full ${myFont.variable}`}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="w-full h-full bg-[#000] text-[#e7e9ea]">
        <div className="flex flex-row justify-center w-full h-full">
          <header className="flex justify-end flex-grow h-full min-w-0 min-h-screen m-0">
            <LeftNavbar />
          </header>
          <main className="relative flex justify-start flex-grow h-full min-w-0 min-h-screen m-0">
            <div className="w-[600px] lg:w-[920px] xl:w-[990px] flex justify-between">
              {/* Main Content */}
              <div className="h-full max-w-[600px] border-x-[1px] border-[#333] w-full flex flex-col flex-grow">
                {/* Home Header */}
                {/* Posts */}
                {children}
                <div className="w-full h-screen" />
              </div>
              {/* RightNavbar / Trends */}
              <div className="h-full w-[290px] xl:w-[350px] hidden lg:inline mr-[10px]">
                {/* SearchBar <div className="h-[53px] min-h-[32px] mb-[12px]" /> */}
                <section className="bg-[#16181c] w-full rounded-2xl flex flex-col justify-start my-3">
                  <div className="px-4 py-3 font-extrabold text-start">
                    <span className="text-xl antialiased">Trends for you</span>
                  </div>
                  {trends.map((trend, index) => (
                    <Trend trendData={trend} key={index} />
                  ))}
                </section>
                <div className="flex text-[13px] text-[#71767b]">
                  <span>@ 2023 Blooprint, Inc.</span>
                </div>
              </div>
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
