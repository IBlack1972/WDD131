let radiusOutput = document.getElementById('radius');
let areaOutput = document.getElementById('area');

let area = 0;
const PI = 3.14159;

let radius = 10;
area = PI * radius * radius;
radiusOutput.textContent = radius;
areaOutput.textContent = area;

radius = 20;
area = PI * radius * radius;
radiusOutput = radius;
areaOutput = area;

