# Utility Classes

These are classes that affect how the animation is applied or will run.

## Duration

These classes provide a shorthand way to set the `animation-duration` CSS property.

The initial duration that these classes are based on is set by the `--simple-animation-duration` CSS variable, which defaults to `1s`. Changing this variable will change the duration of all animations that use these classes.

The duration column in the table below assumes the `--simple-animation-duration` variable is set to `1s`.

| Class Name              | Duration |
|-------------------------|----------|
| `sa-duration-half`      | `0.5s`   |
| `sa-duration-third`     | `0.33s`  |
| `sa-duration-quarter`   | `0.25s`  |
| `sa-duration-double`    | `2s`     |
| `sa-duration-triple`    | `3s`     |
| `sa-duration-quadruple` | `4s`     |

## Delay

These classes provide a shorthand way to set the `animation-delay` CSS property.

The initial delay that these classes are based on is set by the `--simple-animation-delay` CSS variable, which defaults to `1s`. Changing this variable will change the delay of all animations that use these classes.

The delay column in the table below assumes the `--simple-animation-delay` variable is set to `1s`.

| Class Name           | Delay |
|----------------------|-------|
| `sa-delay`           | `1s`  |

## Repeat

These classes provide a shorthand way to set the `animation-iteration-count` CSS property.

The initial repeat that these classes are based on is set by the `--simple-animation-repeat` CSS variable, which defaults to `1`. Changing this variable will change the repeat of all animations that use these classes.

The repeat column in the table below assumes the `--simple-animation-repeat` variable is set to `1`.

| Class Name           | Repeat     |
|----------------------|------------|
| `sa-repeat`          | `1`        |
| `sa-repeat-infinite` | `infinite` |
