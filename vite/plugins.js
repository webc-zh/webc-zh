import pugPlugin from "./pug.js";
import styleMinify from "./styleMinify.js";
import jsMinify from "./jsMinify.js";
import icoGen from "./icoGen.js";
import ROOT from "./const/ROOT.js";
import pluginComm from "./pluginComm.js";

export default (is_build) => {
  const plugins = [...pluginComm(ROOT, is_build, true), icoGen(), pugPlugin(is_build)];

  if (is_build) {
    plugins.push(styleMinify(), jsMinify());
  }

  return plugins;
};
