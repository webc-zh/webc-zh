import CDN from "./cdn.page.js";

export default {
  x: (process.env.NODE_ENV === "production" ? CDN : "/") + "x.js",
};
