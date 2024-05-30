export const author = {
  name: "Dlugolecki",
  username: "@dlugolecki",
  verified: true,
};

export const longDateFormat = new Intl.DateTimeFormat("en-US", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export const timeFormat = new Intl.DateTimeFormat("en-US", {
  hour: "2-digit",
  minute: "2-digit",
});

export const shortDateFormat = new Intl.DateTimeFormat("en-US", {
  day: "numeric",
  month: "short",
});
