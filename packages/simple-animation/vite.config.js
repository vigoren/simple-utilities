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
            name: "SimpleAnimation",
            fileName: "simple-animation"
        },
        rollupOptions: {
            output: {
                assetFileNames: `simple-animation.[ext]`
            }
        }
    },
    plugins: [
        banner(`
    ${name} v${version}: ${description}
    Copyright (C) ${new Date().getFullYear()} ${author}
                      
    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.
                       
    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.
                      
    You should have received a copy of the GNU General Public License
    along with this program.  If not, see https://www.gnu.org/licenses/.
`),
        dts({ rollupTypes: true })
    ]
});
