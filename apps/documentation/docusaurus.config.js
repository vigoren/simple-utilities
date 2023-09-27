// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "Simple Web Utilities",
    tagline: "Utilities to make web development easier",
    favicon: "img/logo.svg",

    // Set the production url of your site here
    url: "https://vigoren.github.io",
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: "/simple-web-utilities/",

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: "vigoren", // Usually your GitHub org/user name.
    projectName: "simple-web-utilities", // Usually your repo name.
    trailingSlash: true,

    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: "en",
        locales: ["en"]
    },

    presets: [
        [
            "classic",
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve("./sidebars.js")
                },
                blog: false,
                theme: {
                    customCss: require.resolve("./src/css/custom.css")
                }
            })
        ]
    ],

    plugins: [
        [
            "docusaurus-plugin-typedoc",

            // Plugin / TypeDoc options
            {
                entryPoints: ["../../packages/simple-multi-select/src/scripts/index.ts"],
                out: "simple-multi-select/javascript/api",
                tsconfig: "../../packages/simple-multi-select/tsconfig.json",
                media: "./static/img",
                frontmatter: {
                    pagination_next: null,
                    pagination_prev: null
                },
                sidebar: {
                    fullNames: true
                }
            }
        ]
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // Replace with your project's social card
            image: "img/docusaurus-social-card.jpg",
            navbar: {
                title: "Simple Web Utilities",
                logo: {
                    alt: "Simple Web Utilities",
                    src: "img/logo.svg"
                },
                items: [
                    {
                        type: "docSidebar",
                        sidebarId: "simpleAnimationSidebar",
                        position: "left",
                        label: "Simple Animation"
                    },
                    {
                        type: "docSidebar",
                        sidebarId: "simpleMultiSelectSidebar",
                        position: "left",
                        label: "Simple Multi-Select"
                    },
                    {
                        type: "docSidebar",
                        sidebarId: "simpleToggleSidebar",
                        position: "left",
                        label: "Simple Toggle"
                    },
                    {
                        href: "https://github.com/vigoren/simple-web-utilities",
                        position: "right",
                        className: "header-github-link",
                        "aria-label": "GitHub repository"
                    }
                ]
            },
            footer: {
                style: "dark",
                links: [
                    {
                        title: "Packages",
                        items: [
                            {
                                label: "Simple Animation",
                                to: "/docs/simple-animation"
                            },
                            {
                                label: "Simple Multi-Select",
                                to: "/docs/simple-multi-select"
                            }
                        ]
                    },
                    {
                        title: "More",
                        items: [
                            {
                                label: "GitHub",
                                href: "https://github.com/vigoren/simple-web-utilities"
                            }
                        ]
                    }
                ],
                copyright: `Copyright © ${new Date().getFullYear()} Simple Web Utilities, Inc. Built with Docusaurus.`
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme
            }
        })
};

module.exports = config;
