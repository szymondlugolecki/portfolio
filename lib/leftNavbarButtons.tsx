import {
  Home,
  User,
  AdjustmentsHorizontal,
  Phone,
  Brain,
} from "tabler-icons-react";
import type { NavbarButtonData } from "../app/types";

export const leftNavbarButtonsList: NavbarButtonData[] = [
  {
    label: "Home",
    href: "/",
    icon: <Home size={30} />,
  },
  {
    label: "About me",
    href: "/aboutme",
    icon: <User size={30} />,
  },
  {
    label: "Tech Stack",
    href: "/techstack",
    icon: <Brain size={30} />,
  },
  {
    label: "Skills",
    href: "/skills",
    icon: <AdjustmentsHorizontal size={30} />,
  },
  {
    label: "Contact",
    href: "/contact",
    icon: <Phone size={30} />,
  },
];
