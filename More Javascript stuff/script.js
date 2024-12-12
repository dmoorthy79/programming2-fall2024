//const animal = {
//    id: 42,
//    name: "rawr",
//    type: "dog",
//    "num Legs": 4,
//    numLegs: 4,
//};
//
//console.log(animal);
//
//animal[name] = "moo";
//console.log(animal);
//
//animal.type = "cow";
//console.log(animal);
//
//animal["num legs"] = 5;
//console.log(animal);
////why do you need the commas?
//
//delete animal.type;
//console.log(animal);
//
//console.log("name" in animal);
//console.log(Object.keys(animal));
//console.log(Object.values(animal));
//console.log(Object.entries(animal));


let person = {
    name: "Terry",
    age: 23,
    favoriteColor: "green",
    height:"6'8",
    satScore: 400,
    job: "basketball player",
    biggestFear: "inflated basketballs",
    favoriteNumber: 3
};

console.log(person);
person.age = 25;
console.log(person);


let person2 = {
    name: "Balzarina",
    age: 345,
    favoriteColor: "red",
    leastFavoriteColor: "Jessamy",
    GPA: -10.9,
    job: "Professional sleeper (this is an actual job in Finland)" 
};

console.log(person2);
console.log("Once upon a time there live a person named " + person2.name + ". Since she ate her vegetables and had very good genetics, she lived to the age of " + person2.age+ ". However, she wasn't really the birhgtest person, and had a gpa of " + person2.GPA + ". But there was since she lives in Finland, there was still one job she was able to get. It was the job of " + person2.job + ".");



let person3 = {
    name: "Tyger Jellybean",
    age: -3,
    favoriteColor: "blue",
    leastFavoriteColor: "Rufous",
    GPA: 1005.3,
    job: "Dog food taster"  
};

console.log(person3);