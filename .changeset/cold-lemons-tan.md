---
"@simple-web-utilities/simple-multi-select": patch
---

Added a parameter to the `InitializeAllMultiSelects` function called root. This takes a HTMLElement or Document type and will use that as the basis to search for all selects. This defaults to the document. This is useful if the scope of where to search for selects needs to be limited on a page.
