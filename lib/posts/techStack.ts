import type { PostData } from "../../app/types";

const techStackPosts: PostData[] = [
  {
    category: "techstack",
    type: "parent",
    content: "Technologies I 💖 using...\n\nClick to see the thread 🧵👇",
    date: new Date(1673534875046),
  },
  {
    category: "techstack",
    type: "child",
    content:
      "Tech that I use everyday\n\nReact & Next ⚛️\nTypescript 🔒\nPrisma 💾\nTailwind 🖌️🎨🖼️\nCloudflare Workers 🔥\nEslint & Prettier 💅\nGit 📕",
    date: new Date(1673534895046),
  },
  {
    category: "techstack",
    type: "child",
    content:
      "Smaller libraries that I love using aswell\n\nNextAuth.js, Zod, axios, wretch, Stripe, react-hot-toast, SWR",
    date: new Date(1673534895046),
  },
  {
    category: "techstack",
    type: "child",
    content:
      "Tech that I want to learn\n\n• Svelte & SvelteKit\n• tRPC\n• React-Query\n• Zustand\n• React Native",
    date: new Date(1673534895046),
  },
];

export default techStackPosts;
