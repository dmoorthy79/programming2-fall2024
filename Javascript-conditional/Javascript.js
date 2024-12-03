//let score = 27;
//
// if(score>= 90){
//     alert("You got an A");
// }
//else if(score>= 80){
//     alert("You got an B");
// }
//else if(score>= 70){
//     alert("You got an C");
//}
//else{
//     alert("You need to study more");
// }

//let temp = 28;
//let condition = "sunny";
//
//if(temp >= 70 && condition == "sunny"){
//console.log("Wear a t-shirt");
//}
//
//else if(temp>40 && (condition == "rainy" || "stormy")){
//    console.log("Wear a raincoat");
//}
//
//else if (temp <= 30 || condition == "snowy"){
//    console.log("Wear a winter coat");
//}
//
//else if (temp > 30 && temp <50){
//    console.log("Wear a coat");
//}
//
//else if (temp > 50 && temp <70){
//    console.log("Wear a hoodie");
//}
//
//else{
//    console.log("Stay inside");
//}



const username = "CrouchingTiger";
let password = "Dhruv123";

function login(){
    let u = document.getElementById("username").value;
    let p = document.getElementById("password").value;
    let message = document.getElementById("message");
    
    if (u != username && p == password) {
    message.innerText = "That is not the correct username!";
}

else if(u == username && p != password){
    message.innerText = "That is not the correct password!";
}

else if (u == username && p == password){
    message.innerText = "That is the correct username and password!";
}
else{
    message.innerText = "That is not the correct username or password!";
}
}

