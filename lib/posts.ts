import { PostData } from "../app/types";

const posts: PostData[] = [
  {
    href: "aboutme",
    type: "parent",
    content:
      "I'm Blooprint, a web developer from Poland. I'm passionate about creating beautiful and efficient websites that provide a great user experience. I'm always looking to learn new technologies and skills to improve my work. I find programming to be challenging and rewarding, and enjoy experimenting with new ideas and concepts in my free time. I'm excited about the opportunities and challenges that lie ahead as I continue to grow as a web developer.",
    date: new Date(1673534865046),
  },
  {
    href: "techstack",
    type: "parent",
    content: `Technologies I 💖 using...\n\nClick to see the thread 🧵👇`,
    date: new Date(1673534875046),
  },
  {
    href: "skills",
    type: "parent",
    content:
      "If you want to know how I'd rate my tech skills on a scale, click on this post 👍",
    date: new Date(1673534885046),
  },
  {
    href: "contact",
    type: "parent",
    content:
      "You can contact me via my email ✉️ blooprint.noob77@gmail.com\n\nClick on this post to see more ways to reach out to me 🔍",
    date: new Date(1673534895046),
  },
];

export default posts;
