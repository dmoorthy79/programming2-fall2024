const animal = {
    id: 42,
    name: "rawr",
    type: "dog",
    "num Legs": 4,
    numLegs: 4,
};

console.log(animal);

animal[name] = "moo";
console.log(animal);

animal.type = "cow";
console.log(animal);

animal["num legs"] = 5;
console.log(animal);
//why do you need the commas?

delete animal.type;
console.log(animal);

console.log("name" in animal);
console.log(Object.keys(animal));
console.log(Object.values(animal));
console.log(Object.entries(animal));