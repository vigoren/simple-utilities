import { defineConfig } from "vite";
import { resolve } from "path";

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
    }
});
