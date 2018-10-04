// scripts.js

function getTriangleArea(a, h) {
    if (a > 0 && h > 0) {
        return a * h / 2;
    } else {
        return 'nieprawidlowe dane';
    }
}

var triangle1Area = getTriangleArea(3, -3),
    triangle2Area = getTriangleArea(2, 4),
    triangle3Area = getTriangleArea(20, 5);

console.log(triangle1Area);
console.log(triangle2Area);
console.log(triangle3Area);
