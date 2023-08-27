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
        "simple-animation/getting-started",
        {
            type: "category",
            label: "CSS Animations",
            link: {
                type: "generated-index",
                title: "CSS Animations",
                description: "Below are a list of all CSS animations available in Simple Animation."
            },
            items: [
                "simple-animation/css-animations/fade",
                "simple-animation/css-animations/slide",
                "simple-animation/css-animations/fade-and-slide",
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
            items: []
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
