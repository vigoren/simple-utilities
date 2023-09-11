# Change Log

## 1.2.3

### Patch Changes

-   a1252c5: Fixed an issue where if the `Collapse.initialize()` function was called multiple times the click event would get added again to existing elements and cause weird behaviour.

## 1.2.2

### Patch Changes

-   a445435: Added a class `sa-collapsed` that will start elements off as collapsed. Also updated the Collapse JS function to take advantage of this class when determening if an element should expand or collapse. This fixes several issues around having elements start collapsed.

## 1.2.1

### Patch Changes

-   37b2043: Added missing types file for use when importing into TS project.

## 1.2.0

### Minor Changes

-   bb204d1: Added new classes for rotating elements around their center. Rotations can go right (clockwise) or left (counter-clockwise) and either a quarter (90 degrees), half (180 degrees), three quarters (270 degrees) or full (360 degrees) around.

### Patch Changes

-   b0fe99e: Added license details to all generated files.

## 1.1.1

### Patch Changes

-   8f1c96e: Fixed a missing license file issue.

## 1.1.0

### Minor Changes

-   b7d28d6: - **Simple-Animation**: Added options for sliding elements in/out from the top left, top right, bottom left and bottom right.
    -   **Documentation**: Updated the documentation site to reflect these changes.

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## 1.0.4 - Bug Fixes

-   Fixed a bug with the slide left/right animations where the animation was reversed.

## 1.0.0 - Initial Release

The initial release of Simple Animation.
