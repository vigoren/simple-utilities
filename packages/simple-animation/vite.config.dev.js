import { resolve } from "path";

import defaultConfig from "./vite.config.js";
defaultConfig.build.lib.entry = resolve(__dirname, "src/index.html");
defaultConfig.plugins = [];
export default defaultConfig;
