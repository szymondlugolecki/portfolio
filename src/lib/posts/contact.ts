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
      "Please note that all of my repositories are private, but if you're interested in hiring me, I'm willing to share some of them with you. Below are some of the website that I've made:",
    date: new Date(1673534895046),
  },
  {
    category: "contact",
    type: "child",
    content: "ImageBlade - image hosting and optimization SaaS",
    link: "https://imageblade.com",
    date: new Date(1673534895046),
  },
  {
    category: "contact",
    type: "child",
    content:
      "Twoje ALDO - ecommerce website for a local business in Poland (for selected customers only)",
    link: "https://twojealdo.pl",
    date: new Date(1673534895046),
  },
  {
    category: "contact",
    type: "child",
    content: "Interhome - simple static website for a local business",
    link: "https://interhome.com.pl",
    date: new Date(1673534895046),
  },
];

export default contactPosts;
