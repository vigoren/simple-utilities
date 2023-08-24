module.exports = (ctx) => {
    return {
        map: ctx.map,
        parser: ctx.parser,
        plugins: {
            autoprefixer: {},
            "postcss-prefixer": {
                prefix: "sa-",
                ignore: [/simple-/]
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
