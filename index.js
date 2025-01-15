const colorElement = document.getElementById("shape-color");
const shapeElement = document.getElementById("square");
const changeColorElement = document.getElementById("color");
const changeShapeElement = document.getElementById("shape");

const shapes = [
  "square",
  "triangle",
  "circle",
  "hexagon",
  "frame",
  "star",
  "arrow",
  "cross",
  "rectangle",
];

changeColorElement.addEventListener("click", () => {
  const randomCol = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  colorElement.style.backgroundColor = randomCol;
});

changeShapeElement.addEventListener("click", () => {
  const currShape = shapeElement.className;
  const remainingShapes = shapes.filter((shape) => shape !== currShape);
  const randomShape =
    remainingShapes[Math.floor(Math.random() * remainingShapes.length)];
  shapeElement.className = randomShape;
});
