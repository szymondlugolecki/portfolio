import type { PostData } from "@/types";

const contactPosts: PostData[] = [
  {
    category: "contact",
    type: "parent",
    content: "You can contact me via email @ szymon.dlugolecki77@gmail.com",
    date: new Date(1673534895046),
  },
  {
    category: "contact",
    type: "child",
    content: "Github",
    link: "https://github.com/szymondlugolecki",
    date: new Date(1673534895046),
  },
  {
    category: "contact",
    type: "child",
    content:
      "Please note that all of my repositories (besides this portfolio) are private. If you're interested I can share the source code or give admin access to websites of choice.",
    date: new Date(1673534895046),
  },
  {
    category: "contact",
    type: "child",
    content: "Below are some of the projects I've been working on:",
    date: new Date(1673534895046),
  },
  {
    category: "contact",
    type: "child",
    content:
      "Twoje ALDO - ecommerce PWA for a local business in Poland\nStack: SvelteKit & Typescript & Tailwind.css\nStatus: Testing in private beta",
    link: "https://twojealdo.pl",
    date: new Date(1673534895046),
  },
  {
    category: "contact",
    type: "child",
    content:
      "Interhome - simple static website for a local business\nStack: SvelteKit & Typescript & Tailwind.css\nStatus: In production",
    link: "https://interhome.com.pl",
    date: new Date(1673534895046),
  },
  {
    category: "contact",
    type: "child",
    content:
      "Lab - personal medical blog with study breakdowns and articles\nStack: Next.js 14 & Typescript & Tailwind.css\nStatus: Early development",
    link: "https://lab.dlugolecki.me",
    date: new Date(1673534895046),
  },
  {
    category: "contact",
    type: "child",
    content:
      "Personal portfolio (this website)\nStack: Next.js 14 & Typescript & Tailwind.css\nStatus: In production",
    link: "https://dlugolecki.me",
    date: new Date(1673534895046),
  },
  {
    category: "contact",
    type: "child",
    content:
      "ImageBlade - image hosting and optimization SaaS\nStack: SvelteKit & Typescript & Tailwind.css\nStatus: Early development",
    link: "https://imageblade.com",
    date: new Date(1673534895046),
  },
];

export default contactPosts;
