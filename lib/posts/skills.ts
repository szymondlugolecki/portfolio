import type { PostData } from "../../app/types";

const skillPosts: PostData[] = [
  {
    category: "skills",
    type: "parent",
    content:
      "If you want to know how I'd rate my tech skills on a scale, click on this post 🔍",
    date: new Date(1673534885046),
  },
  {
    category: "skills",
    type: "child",
    content: "",
    date: new Date(1673534895046),
    skillBars: [
      {
        type: "skillbar",
        label: "React",
        value: 80,
        color: "sky",
      },
      {
        type: "skillbar",
        label: "Next",
        value: 85,
        color: "white",
      },
      {
        type: "skillbar",
        label: "Typescript",
        value: 55,
        color: "green",
      },
    ],
  },
  {
    category: "skills",
    type: "child",
    content: "",
    date: new Date(1673534895046),
    skillBars: [
      {
        type: "skillbar",
        label: "Javascript",
        value: 90,
        color: "yellow",
      },
      {
        type: "skillbar",
        label: "Prisma",
        value: 70,
        color: "red",
      },
      {
        type: "skillbar",
        label: "Tailwind CSS",
        value: 75,
        color: "teal",
      },
    ],
  },
];

export default skillPosts;
