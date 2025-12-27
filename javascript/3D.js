let index = 0;
const track = document.getElementById("slide");
const total = track.children.length;
const width = 320;

function update() {
  track.style.transform = `translateX(-${index * width}px)`;
}

function next() {
  index = (index + 1) % total;
  update();
}

function prev() {
  index = (index - 1 + total) % total;
  update();
}

setInterval(next, 3000);