# Melvor Idle Bank Tab Centering Mod

This mod modifies the styling of the elements within the `#bank-tab-menu` section and `.tab-pane` of the Melvor Idle game interface. It ensures that the first `<ul>` inside the `#bank-tab-menu` and the `<div>` elements inside `.tab-pane` are styled with `justify-content: center`, applying a flex layout to center the contents.

## Features
- Centers the first `<ul>` inside `#bank-tab-menu`.
- Centers all `<div>` elements inside each `.tab-pane`.
- Dynamically applies the styles when the elements are added to the DOM.

## How it Works
- The mod uses a `MutationObserver` to detect changes in the DOM and apply the styles once the necessary elements are present.
- The script only runs once and will stop observing after applying the styles, making it efficient and non-intrusive.

.