const animals = {
  fish: [
    { points: '20% 50%, 40% 35%, 40% 65%', color: 'linear-gradient(45deg, #4FC3F7, #0288D1)', animated: 'fish' },
    { points: '40% 35%, 70% 40%, 40% 65%', color: 'linear-gradient(45deg, #0288D1, #01579B)', animated: 'fish' },
    { points: '70% 40%, 85% 30%, 85% 50%', color: 'linear-gradient(45deg, #01579B, #4FC3F7)', animated: 'fish' },
    { points: '70% 40%, 85% 50%, 85% 70%', color: 'linear-gradient(45deg, #01579B, #4FC3F7)', animated: 'fish' },
    { points: '40% 35%, 70% 20%, 70% 40%', color: 'linear-gradient(45deg, #03A9F4, #4FC3F7)', animated: 'fish' },
    { points: '40% 65%, 70% 60%, 70% 80%', color: 'linear-gradient(45deg, #03A9F4, #4FC3F7)', animated: 'fish' },
    { points: '30% 45%, 30% 55%, 20% 50%', color: 'linear-gradient(45deg, #B3E5FC, #4FC3F7)', animated: 'fish' }
  ],
  turtle: [
    { points: '30% 50%, 50% 30%, 50% 70%', color: 'linear-gradient(45deg, #4CAF50, #388E3C)', animated: 'turtle' },
    { points: '50% 30%, 70% 50%, 50% 70%', color: 'linear-gradient(45deg, #388E3C, #2E7D32)', animated: 'turtle' },
    { points: '50% 30%, 55% 15%, 45% 15%', color: 'linear-gradient(45deg, #2E7D32, #4CAF50)', animated: 'turtle' },
    { points: '30% 50%, 20% 40%, 25% 60%', color: 'linear-gradient(45deg, #66BB6A, #4CAF50)', animated: 'turtle' },
    { points: '70% 50%, 80% 40%, 75% 60%', color: 'linear-gradient(45deg, #66BB6A, #4CAF50)', animated: 'turtle' },
    { points: '40% 70%, 45% 85%, 35% 85%', color: 'linear-gradient(45deg, #81C784, #4CAF50)', animated: 'turtle' },
    { points: '60% 70%, 65% 85%, 55% 85%', color: 'linear-gradient(45deg, #81C784, #4CAF50)', animated: 'turtle' }
  ],
  butterfly: [
    { points: '40% 30%, 20% 10%, 25% 40%', color: 'linear-gradient(45deg, #F48FB1, #F06292)', animated: 'butterfly' },
    { points: '40% 30%, 30% 60%, 25% 40%', color: 'linear-gradient(45deg, #F06292, #CE93D8)', animated: 'butterfly' },
    { points: '60% 30%, 80% 10%, 75% 40%', color: 'linear-gradient(45deg, #CE93D8, #BA68C8)', animated: 'butterfly' },
    { points: '60% 30%, 70% 60%, 75% 40%', color: 'linear-gradient(45deg, #BA68C8, #9C27B0)', animated: 'butterfly' },
    { points: '45% 40%, 55% 40%, 50% 60%', color: 'linear-gradient(45deg, #9C27B0, #6A1B9A)', animated: 'butterfly' },
    { points: '45% 60%, 55% 60%, 50% 80%', color: 'linear-gradient(45deg, #6A1B9A, #7B1FA2)', animated: 'butterfly' },
    { points: '48% 15%, 52% 15%, 50% 10%', color: 'linear-gradient(45deg, #7B1FA2, #F48FB1)', animated: 'butterfly' }
  ],
  trex: [
    { points: '20% 40%, 35% 25%, 35% 55%', color: 'linear-gradient(45deg, #8B5A2B, #5C4033)' }, // Head (tilted up)
    { points: '35% 30%, 60% 35%, 60% 65%', color: 'linear-gradient(45deg, #4CAF50, #2E7D32)', animated: 'trex' }, // Body
    { points: '50% 65%, 60% 75%, 45% 75%', color: 'linear-gradient(45deg, #388E3C, #4CAF50)', animated: 'trex' }, // Leg
    { points: '60% 35%, 70% 30%, 65% 40%', color: 'linear-gradient(45deg, #4CAF50, #2E7D32)', animated: 'trex-scales' }, // Back scale 1
    { points: '65% 40%, 75% 35%, 70% 45%', color: 'linear-gradient(45deg, #388E3C, #4CAF50)', animated: 'trex-scales' }, // Back scale 2
    { points: '70% 45%, 80% 40%, 75% 50%', color: 'linear-gradient(45deg, #2E7D32, #388E3C)', animated: 'trex-scales' }, // Back scale 3
    { points: '75% 50%, 85% 45%, 80% 55%', color: 'linear-gradient(45deg, #4CAF50, #2E7D32)', animated: 'trex-scales' } // Tail scale
  ]
};

// DOM elements
const container = document.getElementById('container');
const radialToggle = document.querySelector('.radial-toggle');
const radialMenu = document.querySelector('.radial-menu');
const radialItems = document.querySelectorAll('.radial-item');
const triangles = Array.from({ length: 7 }, (_, i) => document.getElementById(`tri${i + 1}`));

// Track animation state and selected animal
let isAnimated = false;
let selectedAnimal = null;

// Scatter triangles randomly
function scatterTriangles() {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const minDimension = Math.min(vw, vh);

  triangles.forEach(tri => {
    const size = Math.min(300, minDimension * 0.2);
    const left = Math.random() * (vw - size);
    const top = Math.random() * (vh - size);
    const rotate = (Math.random() * 90 - 45).toFixed(2) + 'deg';
    const scale = (Math.random() * 0.5 + 0.75).toFixed(2);
    const r = Math.floor(Math.random() * 156 + 100);
    const g = Math.floor(Math.random() * 156 + 100);
    const b = Math.floor(Math.random() * 156 + 100);
    const color = `rgb(${r},${g},${b})`;

    tri.style.left = `${left}px`;
    tri.style.top = `${top}px`;
    tri.style.transform = `rotate(${rotate}) scale(${scale})`;
    tri.style.background = color;
    tri.style.clipPath = 'polygon(40% 40%, 50% 60%, 60% 40%)';
    tri.style.webkitClipPath = 'polygon(40% 40%, 50% 60%, 60% 40%)';
    tri.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
    tri.classList.remove('animated-trex', 'animated-trex-scales', 'animated-fish', 'animated-turtle', 'animated-butterfly');
  });
  isAnimated = false;
}

// Morph triangles into selected animal shape
function morphTriangles(shape) {
  const dropdownHeight = document.querySelector('.ui').offsetHeight + 20;
  const isMobile = window.innerWidth <= 600;
  
  // Adjust center position based on screen size
  const centerX = isMobile 
    ? window.innerWidth / 2 - (window.innerWidth * 0.15)
    : window.innerWidth / 2 - Math.min(150, window.innerWidth * 0.1);
    
  const centerY = isMobile
    ? dropdownHeight + window.innerHeight * 0.35
    : dropdownHeight + window.innerHeight * 0.2;

  // Scale factor for mobile
  const scale = isMobile ? 1.5 : 1;

  triangles.forEach((el, i) => {
    const tri = shape[i] || { points: '40% 40%, 50% 60%, 60% 40%', color: '#333' };
    el.style.left = `${centerX}px`;
    el.style.top = `${centerY}px`;
    el.style.transform = `scale(${scale})`;
    el.style.setProperty('--mobile-scale', scale);
    el.style.background = tri.color;
    el.style.clipPath = `polygon(${tri.points})`;
    el.style.webkitClipPath = `polygon(${tri.points})`;
    el.style.boxShadow = '0 0 15px rgba(0, 0, 0, 0.7)';
    el.classList.remove('animated-trex', 'animated-trex-scales', 'animated-fish', 'animated-turtle', 'animated-butterfly');
  });
  isAnimated = false;
}

// Trigger animations for selected animal
function triggerAnimation(shape) {
  const isMobile = window.innerWidth <= 600;
  const scale = isMobile ? 1.5 : 1;

  triangles.forEach((el, i) => {
    const tri = shape[i] || {};
    el.classList.remove('animated-trex', 'animated-trex-scales', 'animated-fish', 'animated-turtle', 'animated-butterfly');
    if (tri.animated) {
      el.classList.add(`animated-${tri.animated}`);
      // Maintain the scale while animating
      el.style.transform = `scale(${scale})`;
    }
  });
  isAnimated = true;
}

// Handle animal selection
function changeAnimal(animal) {
  selectedAnimal = animal;
  if (!animal) {
    scatterTriangles();
  } else {
    morphTriangles(animals[animal]);
  }
  radialMenu.classList.remove('open');
}

// Toggle radial menu
radialToggle.addEventListener('click', (e) => {
  e.stopPropagation();
  radialMenu.classList.toggle('open');
});

// Handle radial item clicks
radialItems.forEach(item => {
  item.addEventListener('click', (e) => {
    e.stopPropagation();
    const animal = item.getAttribute('data-animal');
    changeAnimal(animal);
  });
});

// Close radial menu on outside click
document.addEventListener('click', (e) => {
  if (!radialMenu.contains(e.target) && !radialToggle.contains(e.target)) {
    radialMenu.classList.remove('open');
  }
});

// Handle click to animate
container.addEventListener('click', (e) => {
  e.stopPropagation();
  if (selectedAnimal && !isAnimated) {
    triggerAnimation(animals[selectedAnimal]);
  }
});

// Initialize on load
window.onload = scatterTriangles;