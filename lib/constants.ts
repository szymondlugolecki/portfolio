export const author = {
  name: "XyzMajin",
  username: "@majin_xyz",
  verified: true,
};

export const longDateFormat = new Intl.DateTimeFormat("en-US", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export const shortDateFormat = new Intl.DateTimeFormat("en-US", {
  day: "numeric",
  month: "short",
});

// export const skillBarColorsList =
//   "red" | "green" | "sky" | "viole" | "indig" | "orange" | "white";

type SkillBarColors =
  | "red"
  | "green"
  | "sky"
  | "violet"
  | "indigo"
  | "orange"
  | "white";

// export const skillBarColorsList: SkillBarColors[] = [
//   "red",
//   "green",
//   "sky",
//   "violet",
//   "indigo",
//   "orange",
//   "white",
// ];
