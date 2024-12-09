let animals = ["horse", "dog", "camel", "cat", "snail"];

for(let i=0; i<5; i++){
    console.log(animals);
}
animals.push(animals.uppercase);

animals.pop(2);
console.log(animals);


let TestScores = [37, 45, 53, 93, 85, 73, 62, 89, 97, 79];
for(let i = 0; i < TestScores.length; i++){
  TestScores.push(i+5);
}
TestScores.splice(1,3, "retake");