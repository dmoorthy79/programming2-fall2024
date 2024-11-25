function generate() {
    //Insert user inputs into the madlib
    const a1 = document.getElementById("a1input").value;
    const n1 = document.getElementById("n1input").value;
    const a2 = document.getElementById("a2input").value;
    const n2 = document.getElementById("n2input").value;
    const v1 = document.getElementById("v1input").value;
    const v2 = document.getElementById("v2input").value;
    const p1 = document.getElementById("p1input").value;
    const pl1 = document.getElementById("pl1input").value;
    const t1 = document.getElementById("t1input").value;
    const t2 = document.getElementById("t2input").value;
    const y1 = document.getElementById("y1input").value;
    const ad1 = document.getElementById("ad1input").value;
    
    //Insert user inputs into the madlib
    document.getElementById("a1").innerText = a1;
    document.getElementById("a2").innerText = a2;
    document.getElementById("n1").innerText = n1;
    document.getElementById("n2").innerText = n2;
    document.getElementById("v1").innerText = v1;
    document.getElementById("v2").innerText = v2;
    document.getElementById("p1").innerText = p1;
    document.getElementById("pl1").innerText = pl1;
    document.getElementById("t1").innerText = t1;
    document.getElementById("t2").innerText = t2;
    document.getElementById("y1").innerText = y1;
    document.getElementById("ad1").innerText = ad1;
    
    document.getElementById("madlib").style.display = "block";
    document.getElementById("madlib").style.backgroundColor = "green";
}