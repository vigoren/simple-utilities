import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
    root: "src",
    build: {
        outDir: "../dist-dev",
        emptyOutDir: true,
        lib: {
            entry: resolve(__dirname, "src/index.html"),
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
