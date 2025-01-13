//let fastfood = ["hamburger", "fries", "milkshakes", "chicken nuggets"];
//
//for(let i =0; i < fastfood.length; i++ ){
//    console.log(fastfood[i]);
//}

//let numbers = [45,23,78];
//for(let i = 0; i < numbers.length; i++){
//    double.push(i*2);
//}
//console.log(numbers[i]);

//for(let i = 0; i < 100; i++){
//    console.log("Dhruv");
//}
//
//let animals = ["horse", "dog", "cat", "pig", "cow"];
////
//for (i = 0; i == animals.length; i++){
//   console.log(animals);
//}
//
//for (i = 0; i == animals.length; i++){
//    animals2 = animals.uppercase;
//}
//console.log(animals);
//
let testscores = [92, 56, 40, 83, 62, 99, 49, 69, 77, 36];
for (let i =0; i < testscores.length; i++){
    testscores[i] = testscores[i]+5;
}
console.log(testscores);
for(let i=0; i < testscores.length; i++){
    if (testscores[i]<50){
    testscores.splice([i],1, "Retake");
    console.log(testscores);
    }
}



