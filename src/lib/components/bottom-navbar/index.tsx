import Link from "next/link";

import type { NavbarButtonData } from "@/types";
import { IconAt, IconBrain, IconHome, IconUser } from "@tabler/icons-react";

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

export default function BottomNavbar() {
  return (
    <header className="fixed bottom-0 left-0 right-0 w-full sm:hidden bg-[#000] border-white border-t">
      <nav role="navigation" className="flex items-center justify-evenly ">
        {leftNavbarButtonList.map(({ label, href, icon }, index) => (
          <Link
            className="flex justify-center group"
            href={href}
            key={index}
            aria-label={`Go to the ${label} page`}
          >
            <div className="flex items-center justify-center gap-3 py-3 px-2 sm:px-3 xl:pl-3 xl:pr-6 rounded-3xl group-hover:bg-opacity-10 group-hover:bg-[#e7e9ea] duration-200">
              {icon}
              <span className="hidden xl:block">{label}</span>
            </div>
          </Link>
        ))}
      </nav>
    </header>

    // <div
    //   className="css-175oi2r r-12vffkv"
    //   style="position: absolute; bottom: 0px; width: 100%; transition: transform 300ms ease 0s; transform: translateY(0px);"
    // >
    //   <div className="css-175oi2r r-12vffkv">
    //     <div
    //       className="css-175oi2r r-kemksi r-2sztyj r-1efd50x r-5kkj8d r-97e31f r-yz1j6i"
    //       data-testid="BottomBar"
    //       style="transition-property: opacity; transition-duration: 170ms; transition-timing-function: cubic-bezier(0, 0, 1, 1); opacity: 1;"
    //     >
    //       <div className="css-175oi2r r-f8sm7e r-13qz1uu">
    //         <nav
    //           aria-label="Primary"
    //           role="navigation"
    //           className="css-175oi2r r-18u37iz r-drjvcx r-ripixn r-13qz1uu"
    //         >
    //           <a
    //             href="/home"
    //             aria-label="Home"
    //             role="link"
    //             className="css-175oi2r r-6koalj r-eqz5dr r-16y2uox r-1awozwy r-oucylx r-rull8r r-wgabs5 r-1777fci r-1ny4l3l r-1loqt21"
    //             data-testid="AppTabBar_Home_Link"
    //           >
    //             <div className="css-175oi2r r-sdzlij r-dnmrzs r-xf4iuw r-1e6yznf r-edyy15 r-o7ynqc r-6416eg">
    //               <div className="css-175oi2r">
    //                 <svg
    //                   viewBox="0 0 24 24"
    //                   aria-hidden="true"
    //                   className="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i r-lwhw9o r-cnnz9e"
    //                 >
    //                   <g>
    //                     <path d="M21.591 7.146L12.52 1.157c-.316-.21-.724-.21-1.04 0l-9.071 5.99c-.26.173-.409.456-.409.757v13.183c0 .502.418.913.929.913h6.638c.511 0 .929-.41.929-.913v-7.075h3.008v7.075c0 .502.418.913.929.913h6.639c.51 0 .928-.41.928-.913V7.904c0-.301-.158-.584-.408-.758zM20 20l-4.5.01.011-7.097c0-.502-.418-.913-.928-.913H9.44c-.511 0-.929.41-.929.913L8.5 20H4V8.773l8.011-5.342L20 8.764z"></path>
    //                   </g>
    //                 </svg>
    //               </div>
    //             </div>
    //           </a>
    //           <a
    //             href="/explore"
    //             aria-label="Search and explore"
    //             role="link"
    //             className="css-175oi2r r-6koalj r-eqz5dr r-16y2uox r-1awozwy r-oucylx r-rull8r r-wgabs5 r-1777fci r-1ny4l3l r-1loqt21"
    //             data-testid="AppTabBar_Explore_Link"
    //           >
    //             <div className="css-175oi2r r-sdzlij r-dnmrzs r-xf4iuw r-1e6yznf r-edyy15 r-o7ynqc r-6416eg">
    //               <div className="css-175oi2r">
    //                 <svg
    //                   viewBox="0 0 24 24"
    //                   aria-hidden="true"
    //                   className="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i r-lwhw9o r-cnnz9e"
    //                 >
    //                   <g>
    //                     <path d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"></path>
    //                   </g>
    //                 </svg>
    //               </div>
    //             </div>
    //           </a>
    //           <a
    //             href="/notifications"
    //             aria-label="Notifications (2 unread notifications)"
    //             role="link"
    //             className="css-175oi2r r-6koalj r-eqz5dr r-16y2uox r-1awozwy r-oucylx r-rull8r r-wgabs5 r-1777fci r-1ny4l3l r-1loqt21"
    //             data-testid="AppTabBar_Notifications_Link"
    //           >
    //             <div className="css-175oi2r r-sdzlij r-dnmrzs r-xf4iuw r-1e6yznf r-edyy15 r-o7ynqc r-6416eg">
    //               <div className="css-175oi2r">
    //                 <svg
    //                   viewBox="0 0 24 24"
    //                   aria-hidden="true"
    //                   className="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i r-lwhw9o r-cnnz9e"
    //                 >
    //                   <g>
    //                     <path d="M19.993 9.042C19.48 5.017 16.054 2 11.996 2s-7.49 3.021-7.999 7.051L2.866 18H7.1c.463 2.282 2.481 4 4.9 4s4.437-1.718 4.9-4h4.236l-1.143-8.958zM12 20c-1.306 0-2.417-.835-2.829-2h5.658c-.412 1.165-1.523 2-2.829 2zm-6.866-4l.847-6.698C6.364 6.272 8.941 4 11.996 4s5.627 2.268 6.013 5.295L18.864 16H5.134z"></path>
    //                   </g>
    //                 </svg>
    //                 <div
    //                   dir="ltr"
    //                   aria-label="2 unread items"
    //                   aria-live="polite"
    //                   className="css-146c3p1 r-1ttztb7 r-qvutc0 r-37j5jr r-1gkfh8e r-56xrmm r-16dba41 r-1awozwy r-l5o3uw r-sdzlij r-6koalj r-1q142lx r-10ptun7 r-1777fci r-285fr0 r-lrvibr r-3s2u2q r-1xc7w19 r-1phboty r-rs99b7 r-1tjplnt r-2utimh r-u8s1d r-1m4drjs"
    //                   style="text-overflow: unset; color: rgb(255, 255, 255);"
    //                 >
    //                   <span
    //                     className="css-1jxf684 r-bcqeeo r-1ttztb7 r-qvutc0 r-poiln3"
    //                     style="text-overflow: unset;"
    //                   >
    //                     2
    //                   </span>
    //                 </div>
    //               </div>
    //             </div>
    //           </a>
    //           <a
    //             href="/messages"
    //             aria-label="Direct Messages"
    //             role="link"
    //             className="css-175oi2r r-6koalj r-eqz5dr r-16y2uox r-1awozwy r-oucylx r-rull8r r-wgabs5 r-1777fci r-1ny4l3l r-1loqt21"
    //             data-testid="AppTabBar_DirectMessage_Link"
    //           >
    //             <div className="css-175oi2r r-sdzlij r-dnmrzs r-xf4iuw r-1e6yznf r-edyy15 r-o7ynqc r-6416eg">
    //               <div className="css-175oi2r">
    //                 <svg
    //                   viewBox="0 0 24 24"
    //                   aria-hidden="true"
    //                   className="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i r-lwhw9o r-cnnz9e"
    //                 >
    //                   <g>
    //                     <path d="M1.998 5.5c0-1.381 1.119-2.5 2.5-2.5h15c1.381 0 2.5 1.119 2.5 2.5v13c0 1.381-1.119 2.5-2.5 2.5h-15c-1.381 0-2.5-1.119-2.5-2.5v-13zm2.5-.5c-.276 0-.5.224-.5.5v2.764l8 3.638 8-3.636V5.5c0-.276-.224-.5-.5-.5h-15zm15.5 5.463l-8 3.636-8-3.638V18.5c0 .276.224.5.5.5h15c.276 0 .5-.224.5-.5v-8.037z"></path>
    //                   </g>
    //                 </svg>
    //               </div>
    //             </div>
    //           </a>
    //           <a
    //             href="/SzymonUgo/communities"
    //             aria-label="Communities"
    //             role="link"
    //             className="css-175oi2r r-6koalj r-eqz5dr r-16y2uox r-1awozwy r-oucylx r-rull8r r-wgabs5 r-1777fci r-1ny4l3l r-1loqt21"
    //           >
    //             <div className="css-175oi2r r-sdzlij r-dnmrzs r-xf4iuw r-1e6yznf r-edyy15 r-o7ynqc r-6416eg">
    //               <div className="css-175oi2r">
    //                 <svg
    //                   viewBox="0 0 24 24"
    //                   aria-hidden="true"
    //                   className="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i r-lwhw9o r-cnnz9e"
    //                 >
    //                   <g>
    //                     <path d="M7.501 19.917L7.471 21H.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977.963 0 1.95.212 2.87.672-.444.478-.851 1.03-1.212 1.656-.507-.204-1.054-.329-1.658-.329-2.767 0-4.57 2.223-4.938 6.004H7.56c-.023.302-.05.599-.059.917zm15.998.056L23.528 21H9.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977s6.816 2.358 7 8.977zM21.437 19c-.367-3.781-2.17-6.004-4.938-6.004s-4.57 2.223-4.938 6.004h9.875zm-4.938-9c-.799 0-1.527-.279-2.116-.73-.836-.64-1.384-1.638-1.384-2.77 0-1.93 1.567-3.5 3.5-3.5s3.5 1.57 3.5 3.5c0 1.132-.548 2.13-1.384 2.77-.589.451-1.317.73-2.116.73zm-1.5-3.5c0 .827.673 1.5 1.5 1.5s1.5-.673 1.5-1.5-.673-1.5-1.5-1.5-1.5.673-1.5 1.5zM7.5 3C9.433 3 11 4.57 11 6.5S9.433 10 7.5 10 4 8.43 4 6.5 5.567 3 7.5 3zm0 2C6.673 5 6 5.673 6 6.5S6.673 8 7.5 8 9 7.327 9 6.5 8.327 5 7.5 5z"></path>
    //                   </g>
    //                 </svg>
    //               </div>
    //             </div>
    //           </a>
    //         </nav>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
