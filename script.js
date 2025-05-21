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
    { points: '40% 30%, 20% 10%, 25% 40%', color: '#F48FB1' },  // left upper wing top
    { points: '40% 30%, 30% 60%, 25% 40%', color: '#F06292' },  // left upper wing bottom
    { points: '60% 30%, 80% 10%, 75% 40%', color: '#CE93D8' },  // right upper wing top
    { points: '60% 30%, 70% 60%, 75% 40%', color: '#BA68C8' },  // right upper wing bottom
    { points: '45% 40%, 55% 40%, 50% 60%', color: '#9C27B0' },  // body top
    { points: '45% 60%, 55% 60%, 50% 80%', color: '#6A1B9A' },  // body bottom
    { points: '48% 15%, 52% 15%, 50% 10%', color: '#7B1FA2' }   // antennae
  ]
};

function changeAnimal() {
  const selected = document.getElementById('animalSelect').value;
  const shape = animals[selected];

  shape.forEach((tri, i) => {
    const el = document.getElementById(`tri${i + 1}`);
    el.style.webkitClipPath = `polygon(${tri.points})`;
    el.style.clipPath = `polygon(${tri.points})`;
    el.style.backgroundColor = tri.color;
  });
}

window.onload = () => {
  changeAnimal();
};
