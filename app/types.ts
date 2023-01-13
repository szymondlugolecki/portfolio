export interface PostData {
  href: string;
  type: "parent" | "child";
  content: string;
  date: Date;
}

export interface NavbarButtonData {
  label: string;
  href: string;
  icon: JSX.Element;
}

export interface TrendData {
  headText: string;
  name: string;
}
