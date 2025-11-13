let expression = "";

function HandleButton(character) {
    expression += `${character}`;
    document.getElementById("display").value = expression;
}

document.getElementById("one").onclick = () => {
    HandleButton("1");
}

document.getElementById("two").onclick = () => {
    HandleButton("2");
}

document.getElementById("three").onclick = () => {
    HandleButton("3");
}

document.getElementById("four").onclick = () => {
    HandleButton("4");
}

document.getElementById("five").onclick = () => {
    HandleButton("5");
}

document.getElementById("six").onclick = () => {
    HandleButton("6");
}

document.getElementById("seven").onclick = () => {
    HandleButton("7");
}

document.getElementById("eight").onclick = () => {
    HandleButton("8");
}

document.getElementById("nine").onclick = () => {
    HandleButton("9");
}

document.getElementById("zero").onclick = () => {
    HandleButton("0");
}

document.getElementById("dot").onclick = () => {
    HandleButton(".");
}

document.getElementById("plus").onclick = () => {
    HandleButton("+");
}

document.getElementById("minus").onclick = () => {
    HandleButton("-");
}

document.getElementById("multiply").onclick = () => {
    HandleButton("*");
}

document.getElementById("divide").onclick = () => {
    HandleButton("/");
}

document.getElementById("allclear").onclick = () => {
    expression = "";
    document.getElementById("display").value = expression;
}

document.getElementById("clear").onclick = () => {
    expression = String(expression);
    let size = expression.length;
    expression = expression.substring(0,size-1);
    document.getElementById("display").value = expression;
}

document.getElementById("equals").onclick = () => {
    expression = eval(expression);
    document.getElementById("display").value = expression;
}