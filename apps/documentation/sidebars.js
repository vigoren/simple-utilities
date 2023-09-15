/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    // By default, Docusaurus generates a sidebar from the docs folder structure
    simpleAnimationSidebar: [
        "simple-animation/index",
        {
            type: "category",
            label: "CSS Animations",
            link: {
                type: "doc",
                id: "simple-animation/css-animations/index"
            },
            items: [
                "simple-animation/css-animations/fade",
                "simple-animation/css-animations/slide",
                "simple-animation/css-animations/fade-and-slide",
                "simple-animation/css-animations/rotate",
                "simple-animation/css-animations/expand-collapse"
            ]
        },
        {
            type: "category",
            label: "JavaScript Helpers",
            link: {
                type: "doc",
                id: "simple-animation/javascript-helpers/index"
            },
            items: ["simple-animation/javascript-helpers/collapse"]
        },
        "simple-animation/utility-classes"
    ],
    simpleMultiSelectSidebar: [
        "simple-multi-select/index",
        "simple-multi-select/html",
        "simple-multi-select/css-variables",
        {
            type: "category",
            label: "JavaScript",
            collapsible: true,
            collapsed: false,
            items: ["simple-multi-select/javascript/modules", "simple-multi-select/javascript/classes/MultiSelect"]
        }
    ]

    // But you can create a sidebar manually
    /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

module.exports = sidebars;
