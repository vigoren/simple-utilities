export default (ctx) => {
    return {
        map: ctx.map,
        parser: ctx.parser,
        plugins: {
            "postcss-prefixer": {
                prefix: "sa-",
                ignore: [/simple-/]
            }
            //'postcss-header': {
            //    header,
            //},
        }
    };
};
