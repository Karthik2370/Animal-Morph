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

## Credits

Inspired by [Species in Pieces](http://www.species-in-pieces.com/), a website that brilliantly exploits CSS clip-path polygons to create morphing animal shapes. The creator of that website provided invaluable insights and techniques that inspired this project and demonstrated how powerful and beautiful CSS polygon morphing can be.
