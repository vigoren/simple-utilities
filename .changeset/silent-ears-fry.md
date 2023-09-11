---
"@simple-web-utilities/simple-animation": patch
---

Fixed an issue where if the `Collapse.initialize()` function was called multiple times the click event would get added again to existing elements and cause weird behaviour.
