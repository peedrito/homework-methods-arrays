const cars = ['Ford Ká', 'Ranger', 'Hilux', 'Corola', 'Fusca', 'Chevete', 'Brasilia'];

function groupCar (array, number) {
    return array.splice(number, 3);
}

console.log(groupCar(cars, 2));