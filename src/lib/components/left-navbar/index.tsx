import Link from "next/link";

import type { NavbarButtonData } from "@/types";
import { IconAt, IconBrain, IconHome, IconUser } from "@tabler/icons-react";
// import { Switch } from "@/components/ui/switch";
// import { Label } from "@/components/ui/label";

export const leftNavbarButtonList: NavbarButtonData[] = [
  {
    label: "Home",
    href: "/",
    icon: <IconHome className="w-6 h-6 sm:w-7 sm:h-7" />,
  },
  {
    label: "About me",
    href: "/about-me",
    icon: <IconUser className="w-6 h-6 sm:w-7 sm:h-7" />,
  },
  {
    label: "Tech Stack",
    href: "/tech-stack",
    icon: (
      <IconBrain className="relative w-6 h-6 duration-200 sm:w-7 sm:h-7 group-hover:text-pink-500" />
    ),
  },
  {
    label: "Contact",
    href: "/contact",
    icon: <IconAt className="w-6 h-6 sm:w-7 sm:h-7" />,
  },
];

export default function LeftNavbar() {
  return (
    <div className="min-w-[68px] max-w-full sm:min-w-0 sm:w-[88px] xl:w-[275px] text-xl py-2 sm:p-2 flex justify-end">
      <div className="fixed flex flex-col justify-between sm:w-[72px] xl:w-[259px]">
        <nav className="flex flex-col w-full text-xl">
          {leftNavbarButtonList.map(({ label, href, icon }, index) => (
            <Link
              className="flex justify-end xl:justify-start group"
              href={href}
              key={index}
              aria-label={`Go to the ${label} page`}
            >
              <div className="flex items-center justify-start gap-3 py-3 px-2 sm:px-3 xl:pl-3 xl:pr-6 rounded-3xl group-hover:bg-opacity-10 group-hover:bg-[#e7e9ea] duration-200">
                {icon}
                <span className="hidden xl:block">{label}</span>
              </div>
            </Link>
          ))}
        </nav>
      </div>

      {/* <div className="fixed bottom-0 flex items-center pb-4 gap-x-3">
        <Label htmlFor="animations">Animated images</Label>
        <Switch name="animations" id="animations" />
      </div> */}
    </div>
  );
}
