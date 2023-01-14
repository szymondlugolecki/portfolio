import Link from "next/link";

import { LeftNavbarButtonsList } from "../../lib/LeftNavbarButtons";

export default function LeftNavbar() {
  return (
    <div className="w-[88px] xl:w-[275px] text-xl p-2">
      <div className="fixed flex flex-col justify-between w-[72px] xl:w-[259px]">
        <nav className="flex flex-col w-full text-xl">
          {LeftNavbarButtonsList.map(({ label, href, icon }, index) => (
            <Link
              className="flex justify-end xl:justify-start group"
              href={href}
              key={index}
            >
              <div className="flex items-center justify-start gap-3 py-3 px-3 xl:pl-3 xl:pr-6 rounded-3xl group-hover:bg-opacity-10 group-hover:bg-[#e7e9ea] duration-200">
                {icon}
                <span className="hidden xl:block">{label}</span>
              </div>
            </Link>
          ))}
        </nav>
        {/* <div className="flex"></div> */}
      </div>
    </div>
  );
}
