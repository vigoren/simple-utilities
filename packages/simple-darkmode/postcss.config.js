export default (ctx) => {
    return {
        map: ctx.map,
        parser: ctx.parser,
        plugins: {
            autoprefixer: {},
            "postcss-prefixer": {
                prefix: "sdm-",
                ignore: [/simple-/, "dark", "light"]
            },
            cssnano: {
                preset: "advanced"
            }

            //'postcss-header': {
            //    header,
            //},
        }
    };
};
