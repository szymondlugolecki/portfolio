import contactPosts from "./contact";
import techStackPosts from "./techStack";
import skillPosts from "./skills";
import aboutmePosts from "./aboutme";

import type { PostData } from "../../app/types";

const allPosts: PostData[] = [
  ...aboutmePosts,
  ...techStackPosts,
  ...skillPosts,
  ...contactPosts,
];

export default allPosts;
