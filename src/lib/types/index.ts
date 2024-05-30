export type PostCategories = "about-me" | "tech-stack" | "contact";

export interface PostData {
  category: PostCategories;
  type: "parent" | "child";
  content: string | JSX.Element;
  date: Date;
  link?: string;
}

export interface NavbarButtonData {
  label: string;
  href: `/${PostCategories | ""}`;
  icon: JSX.Element;
}
