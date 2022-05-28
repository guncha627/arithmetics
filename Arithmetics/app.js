const PI = 3.14;

function calculate () {
    let number = document.getElementById("edge1").value;
    number = Number(number);
    if(number <= 0){
        alert("Please enter positive integer");
    };

    let volume1 = number * number * number;
    let area1 = 6 * number * number;
    document.getElementById("volume1").innerHTML = volume1;
    document.getElementById("area1").innerHTML = area1;
    
    let radius = document.getElementById("radius1").value;
    radius = Number(radius);
    let diametr = 2 * radius;
    let area2 = PI * radius * radius;
    let length1 = 2 * PI * radius;

    document.getElementById("diametr").innerHTML = diametr;
    document.getElementById("area2").innerHTML = area2;
    document.getElementById("length1").innerHTML = Math.floor(length1);

    let x = document.getElementById("x").value;
    x = Number(x);
    let f = 3 * x * x * x - 6 * x * x - 7;
    document.getElementById("f").innerHTML = f;
}
let calcBtn = document.getElementById("calculate");
calcBtn.onclick = calculate;


function turn(){
    let a = Math.floor(Math.random() * 10);
    let b = Math.floor(Math.random() * 10);
    let integer_num = "" + a + "" + b ;
    document.getElementById("integer").innerHTML = "Two-digit number is: " + integer_num; 
    let sum = a + b;
    document.getElementById("sum").innerHTML = "Sum of digits: " + sum; 
    let product = a * b;
    document.getElementById("product").innerHTML = "Product of digits: " + product; 
}
let refresh = document.getElementById("btn");
refresh.addEventListener("click", turn);