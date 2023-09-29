import { defineConfig } from "vite";
import { resolve } from "path";
import banner from "vite-plugin-banner";
import dts from "vite-plugin-dts";

import { name, version, description, author } from "./package.json";

export default defineConfig({
    base: "./",
    build: {
        //outDir: "../dist",
        emptyOutDir: true,
        minify: true,
        reportCompressedSize: true,
        lib: {
            entry: resolve(__dirname, "src/scripts/index.ts"),
            name: "SimpleDarkMode",
            fileName: "simple-darkmode"
        },
        rollupOptions: {
            output: {
                assetFileNames: `simple-darkmode.[ext]`
            }
        }
    },
    plugins: [
        banner(`
    ${name} v${version}: ${description}
    Copyright (C) ${new Date().getFullYear()} ${author}
                      
    This Source Code Form is subject to the terms of the Mozilla Public
    License, v. 2.0. If a copy of the MPL was not distributed with this
    file, You can obtain one at http://mozilla.org/MPL/2.0/.
`),
        dts({ rollupTypes: true })
    ]
});
