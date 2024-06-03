import type { PostData } from "@/types";

const techStackPosts: PostData[] = [
  {
    category: "tech-stack",
    type: "parent",
    content: "Technologies I use...\n\nClick to find out 👆\n🧵",
    date: new Date(1673534875046),
  },
  {
    category: "tech-stack",
    type: "child",
    content:
      "Tech I'm most familiar with:\n\nSvelteKit, Next.js, TypeScript, Tailwind CSS, Node.js",
    date: new Date(1673534895046),
  },
  {
    category: "tech-stack",
    type: "child",
    content:
      "Other tech that I love\n\nshadcn (shadcn-svelte), SvelteKit Superforms, NextAuth.js, Zod, Prisma, DrizzleORM, Drizzle Kit, Vercel, Cloudflare, Hono, Lucia, Upstash, MeltUI",
    date: new Date(1673534895046),
  },
  {
    category: "tech-stack",
    type: "child",
    content:
      "There are more, but these are the ones that stand out the most to me",
    date: new Date(1673534895046),
  },
];

export default techStackPosts;
