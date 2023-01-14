export type PostCategories = "aboutme" | "techstack" | "skills" | "contact";

type PostComponent = {
  type: "skillbar";
  label: string;
  value: number;
  color: SkillBarColors;
};

export interface PostData {
  category: PostCategories;
  type: "parent" | "child";
  content: string | JSX.Element;
  date: Date;
  skillBars?: PostComponent[];
}

export interface NavbarButtonData {
  label: string;
  href: `/${PostCategories | ""}`;
  icon: JSX.Element;
}

export interface TrendData {
  headText: string;
  name: string;
}

export type SkillBarColors =
  | "red"
  | "green"
  | "sky"
  | "teal"
  | "indigo"
  | "yellow"
  | "white";
