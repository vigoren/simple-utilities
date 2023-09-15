export default (ctx) => {
    return {
        map: ctx.map,
        parser: ctx.parser,
        plugins: {
            autoprefixer: {},
            "postcss-prefixer": {
                prefix: "sms-",
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
