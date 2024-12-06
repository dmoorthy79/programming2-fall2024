//let tasks = ["do homework", "practice trombone", "study for SAT"];
//alert(tasks[0]);
//
//
////change the first item
//tasks[0] = "make dinner";
//alert(tasks);
//
//tasks.push("eat dinner");
//alert(tasks);s
//
//tasks.splice([2]);
//alert(tasks);

//let groceries = ["milk", "fruit", "bread", "eggs"];
//groceries.splice(0,1);
//alert(groceries);

let items = ["computer", "notebook", "backpack"];
items.push("water bottle");
items.push("phone");
console.log(items);
items.pop();
console.log(items);
items.splice(1,1,"pencil");
items.splice(2, 1);
console.log(items);

let numbers = ["1","5","4","6"];
numbers.splice(0,0,"23");
console.log(numbers);
numbers.splice(1,1,"35");
console.log(numbers);