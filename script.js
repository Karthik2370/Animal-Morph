const animals = {
  fish: [
    { points: '20% 50%, 40% 35%, 40% 65%', color: '#4FC3F7' },
    { points: '40% 35%, 70% 40%, 40% 65%', color: '#0288D1' },
    { points: '70% 40%, 85% 30%, 85% 50%', color: '#01579B' },
    { points: '70% 40%, 85% 50%, 85% 70%', color: '#01579B' },
    { points: '40% 35%, 70% 20%, 70% 40%', color: '#03A9F4' },
    { points: '40% 65%, 70% 60%, 70% 80%', color: '#03A9F4' },
    { points: '30% 45%, 30% 55%, 20% 50%', color: '#B3E5FC' }
  ],

  turtle: [
    { points: '30% 50%, 50% 30%, 50% 70%', color: '#4CAF50' },
    { points: '50% 30%, 70% 50%, 50% 70%', color: '#388E3C' },
    { points: '50% 30%, 55% 15%, 45% 15%', color: '#2E7D32' },
    { points: '30% 50%, 20% 40%, 25% 60%', color: '#66BB6A' },
    { points: '70% 50%, 80% 40%, 75% 60%', color: '#66BB6A' },
    { points: '40% 70%, 45% 85%, 35% 85%', color: '#81C784' },
    { points: '60% 70%, 65% 85%, 55% 85%', color: '#81C784' }
  ],

  butterfly: [
    { points: '40% 30%, 20% 10%, 25% 40%', color: '#F48FB1' },
    { points: '40% 30%, 30% 60%, 25% 40%', color: '#F06292' },
    { points: '60% 30%, 80% 10%, 75% 40%', color: '#CE93D8' },
    { points: '60% 30%, 70% 60%, 75% 40%', color: '#BA68C8' },
    { points: '45% 40%, 55% 40%, 50% 60%', color: '#9C27B0' },
    { points: '45% 60%, 55% 60%, 50% 80%', color: '#6A1B9A' },
    { points: '48% 15%, 52% 15%, 50% 10%', color: '#7B1FA2' }
  ]
};

const container = document.getElementById('container');
const triangles = [];
for (let i = 1; i <= 7; i++) {
  triangles.push(document.getElementById(`tri${i}`));
}

// Position scattered triangles around center
function scatterTriangles() {
  const vw = window.innerWidth;
  const vh = window.innerHeight;

  triangles.forEach(tri => {
    const left = Math.random() * (vw - 300);
    const top = Math.random() * (vh - 300);
    const rotate = (Math.random() * 90 - 45).toFixed(2) + 'deg';
    const scale = (Math.random() + 0.5).toFixed(2);

    const r = Math.floor(Math.random() * 156 + 100);
    const g = Math.floor(Math.random() * 156 + 100);
    const b = Math.floor(Math.random() * 156 + 100);
    const color = `rgb(${r},${g},${b})`;

    tri.style.left = left + 'px';
    tri.style.top = top + 'px';
    tri.style.transform = `rotate(${rotate}) scale(${scale})`;
    tri.style.backgroundColor = color;
    tri.style.clipPath = 'polygon(40% 40%, 50% 60%, 60% 40%)';
    tri.style.webkitClipPath = 'polygon(40% 40%, 50% 60%, 60% 40%)';
  });
}

// Morph into selected animal
function morphTriangles(shape) {
  const dropdownHeight = document.querySelector('.ui').offsetHeight + 20;
  shape.forEach((tri, i) => {
    const el = triangles[i];
    el.style.left = `calc(50% - 150px)`;
    el.style.top = `calc(${dropdownHeight}px + 20vh)`;
    el.style.transform = 'none';
    el.style.backgroundColor = tri.color;
    el.style.clipPath = `polygon(${tri.points})`;
    el.style.webkitClipPath = `polygon(${tri.points})`;
  });
}


function changeAnimal() {
  const selected = document.getElementById('animalSelect').value;
  if (!selected) {
    scatterTriangles();
  } else {
    morphTriangles(animals[selected]);
  }
}

window.onload = () => {
  scatterTriangles();
};
