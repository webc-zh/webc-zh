import { optimize } from "svgo";

export default (content) => {
  try {
    const { data } = optimize(content, {
      multipass: true,
      plugins: ["preset-default", "removeViewBox"],
    });
    return data;
  } catch (e) {
    console.error(e);
    return content;
  }
};
