function namefinder() {
    
let bm = document.getElementById("birthmonth").value;
let message = document.getElementById("message");

if (bm == "January") {
    message.innerText = "agreeable";
}

else if (bm == "Febuary") {
    message.innerText = "ambitious";
}
else if (bm == "March") {
    message.innerText = "bewildered";
}
else if (bm == "April") {
    message.innerText = "brave";
}
else if (bm == "May") {
    message.innerText = "elegant";
}
else if (bm == "June") {
    message.innerText = "glamorous";
}
else if (bm == "July") {
    message.innerText = "obedient";
}
else if (bm == "August") {
    message.innerText = "fierce";
}
else if (bm == "September") {
    message.innerText = "grumpy";
}
else if (bm == "October") {
    message.innerText = "massive";
}
else if (bm == "November") {
    message.innerText = "witty";
}
else if (bm == "December") {
    message.innerText = "wonderful";
}
else{
    message.innerText = "please input a correct month";
}
    
let a = document.getElementById("age").value;

if (a == "0-10") {
    message.innerText += "lion";
}

else if (a == "11-20") {
    message.innerText += " ambitious";
}
else if (a == "21-30") {
    message.innerText += " tiger";
}
else if (a == "31-40") {
    message.innerText += " cat";
}
else if (a == "41-50") {
    message.innerText += " dog";
}
else if (a == "51-60") {
    message.innerText += " armadillo";
}
else if (a == "61-70") {
    message.innerText += " lynx";
}
else if (a == "71-80") {
    message.innerText += " hawk";
}
else if (a == "81-90") {
    message.innerText += " snake";
}
else if (a == "91-100") {
    message.innerText += " pig";
}
else if (a == "101-110") {
    message.innerText += " bird";
}
else{
    message.innerText = "please input a correct age";
}
    
let fc = document.getElementById("favoriteColor").value;

if (fc == blue) {
    message.innerText = " robot";
}

else if (fc == "green") {
    message.innerText += " banana";
}
else if (fc == "yellow") {
    message.innerText += " ice-cream";
}
else if (fc == "purple") {
    message.innerText += " table";
}
else if (fc == "aquamarine") {
    message.innerText += " chair";
}
else if (fc == "red") {
    message.innerText += " month";
}
else {
    message.innerText = "Please enter an actual color";
}
}