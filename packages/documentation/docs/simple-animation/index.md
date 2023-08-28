# Simple Animation

A simple CSS animation library with JavaScript helpers that can be used to enhance certain animations.

The goal of this library is to provide common animations used in larger applications.

## Installation

```bash
npm install @simple-web-utilities/simple-animation
```

## Getting Started

This library contains CSS animations and JavaScript helpers. Check out the getting started section for each below.

- [CSS Animations](css-animations#getting-started)
- [JavaScript Helpers](javascript-helpers#getting-started)

This library also contains [utility classes](utility-classes) and [CSS variables](#css-variables) that can be used to customize the animations.


## CSS Variables

The following CSS variables are available to customize the animations.

| Variable                                 | Description                                                                                                    | Default  |
|------------------------------------------|----------------------------------------------------------------------------------------------------------------|----------|
| `--simple-animation-duration`            | The duration the animation. This will affect the [duration utility classes](utility-classes#duration).         | `1s`     |
| `--simple-animation-delay`               | The delay before the animation starts. This will affect the [delay utility classes](utility-classes#delay).    | `1s`     |
| `--simple-animation-repeat`              | How many times to repeat an animation. This will affect the [repeat utility classes](utility-classes#repeat).  | `1`      |
| `--simple-animation-collapse-max-height` | The max height of an element to use for any [expanding/collapsing animations](css-animations/expand-collapse). | `1000px` |

