# Animal Morph - CSS Polygon Shape Morphing

## Overview

This project showcases a creative use of **CSS clip-path polygons** combined with **CSS transitions** to morph simple triangular shapes into recognizable animals (Fish, Turtle, Butterfly) purely with CSS and JavaScript.

The user can select an animal from a dropdown, and the scattered triangles smoothly rearrange, resize, recolor, and reshape to form that animal's silhouette. When no animal is selected, the triangles scatter randomly around the screen.

---

## How It Works

### Key Technologies

- **CSS `clip-path` (with `polygon` shapes)**  
  Defines the visible shape of each triangular div by clipping its rectangular container into a triangle with three points.

- **CSS Transitions**  
  Smoothly animate changes in `clip-path`, `background-color`, `left`, `top`, and `transform` properties, making the morphing effect visually appealing.

- **JavaScript DOM Manipulation**  
  Controls triangle positioning, color, rotation, and the clipping polygon coordinates dynamically. Updates the styles based on user selection.

- **Viewport-relative Positioning**  
  Triangles are positioned absolutely inside a full-screen container, and the dropdown is fixed near the top for UI clarity.

### Transition Mechanics

1. **Default State (Scattered Triangles):**  
   Each triangle is placed randomly across the viewport with random colors, sizes, rotations, and the same base triangle clip-path.

2. **Morph State (Animal Shape):**  
   When an animal is selected, each triangle smoothly morphs by:  
   - Changing the `clip-path` polygon points to new coordinates defining its part in the animal silhouette.  
   - Moving to a calculated position centered below the dropdown.  
   - Changing color to fit the animal's palette.  
   - Resetting rotation and scaling to create a clean, uniform shape.

3. **Transitions**  
   CSS `transition` properties enable smooth animations on these style changes, allowing the shapes to "shift" naturally from scattered shards into a complete animal figure.

---

## Why This Approach?

- Using CSS polygons for clip-path means each shape is defined with three points (triangle) which is the simplest polygon allowing complex morphing by adjusting just 3 coordinates per shape.
- Keeping transitions purely in CSS avoids heavy JavaScript animations or SVG path manipulations.
- The project is highly compatible with WebKit-based browsers (Chrome, Safari, most mobiles), making it widely usable.
- The visual effect feels dynamic and artistic while being lightweight and performant.

---

## How to Run

1. Open `index.html` in a modern browser (Chrome, Safari recommended).
2. Use the dropdown to select an animal.
3. Watch the triangles morph smoothly from scattered shards to the chosen animal shape.
4. Select the blank option to reset the triangles to scattered mode.

---

## File Structure

- `index.html` — UI layout including dropdown and triangle containers.
- `style.css` — Styling for body, dropdown, triangles, and transitions.
- `script.js` — Logic for scattering and morphing triangles based on selection.

---

## Browser Support

- Best support on WebKit browsers (Chrome, Safari, Edge).
- Firefox supports `clip-path` but via SVG reference, so the morphing logic here is optimized for WebKit only.

---

## Credits

Inspired by the creative use of CSS clip-path polygons and transitions to create morphing shapes. Special thanks to all open-source tutorials on clip-path and CSS animation techniques.

---

Enjoy morphing animals with just CSS & JS!


