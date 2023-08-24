import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
    root: "src",
    build: {
        outDir: "../dist",
        emptyOutDir: true,
        minify: true,
        reportCompressedSize: true,
        lib: {
            entry: resolve(__dirname, "src/index.ts"),
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
