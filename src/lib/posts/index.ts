import contactPosts from "./contact";
import techStackPosts from "./tech-stack";
import aboutmePosts from "./about-me";

import type { PostData } from "@/types";

const allPosts: PostData[] = [
  ...aboutmePosts,
  ...techStackPosts,
  ...contactPosts,
];

export default allPosts;
