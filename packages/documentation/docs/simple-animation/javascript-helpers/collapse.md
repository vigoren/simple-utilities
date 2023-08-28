# Collapse

This helper enhances the [expand/collapse animations](../css-animations/expand-collapse.mdx) which are used to expand or collapse an element.

This helper will set the `--simple-animation-collapse-max-height` CSS variable to the height of the element. This will ensure that when the element is being animated the correct height is used.

## Including the Helper
To include this helper in your code you can import it like this:

```javascript
import { Collapse } from '@simple-web-utilities/simple-animation';
```

## Running the Helper

When included this helper is automatically run on page load.

The helper can also be manually triggered by calling the `initialize` method.

```javascript
Collapse.initialize();
```

## Collapse HTML Elements

This helper will look for any HTML elements that contains the attribute `data-sa-collapse`. The value of this attribute should be a selector (ID or CSS) that will be used to find the element that will be collapsed.

```html
<button data-sa-collapse="#collapse">Collapse</button>
<div id="collapse" class="simple-animation sa-collapse">...</div>
```

:::info

In the case that multiple elements match the selector, only the first element will be used.

:::

## What The Helper Does

When the helper is run it will do the following:

1. Find all elements that contain the attribute `data-sa-collapse`.
2. For each element found:
   1. Find the collapse element that matches the selector in the `data-sa-collapse` attribute.
   2. Set the `--simple-animation-collapse-max-height` CSS variable on the collapse element to the height of the collapse element.
   3. Add a click event listener to the element that will toggle the `sa-collapse-up` and `sa-expand-down` classes on the collapse element.

By setting the `--simple-animation-collapse-max-height` CSS variable on each collapse element the expand/collapse animations will run correctly.




