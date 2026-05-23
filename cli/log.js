import ansis from "ansis";

export const log = console.log,
  green = process.stdout.isTTY ? ansis.greenBright : (x) => x;
