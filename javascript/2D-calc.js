const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const Shape = urlParams.get('shape');
const stext = document.getElementById("shape-name");
const back = document.getElementById("back");
console.log(Shape);

if (Shape === "square") {
    stext.innerText = "Square";
    stext.style.cssText = "background: linear-gradient(to right, #00f2fe, #badfffff); -webkit-background-clip: text; background-clip: text; color: transparent; filter: drop-shadow(1px 1px 2px rgba(76, 76, 76, 1))";
    back.style.background = "linear-gradient(to right, #00f2fe, #a5d5ffff)";
}
else if (Shape === "rectangle") {
    stext.innerText = "Rectangle";
    stext.style.cssText = "background: linear-gradient(to right, #ff9a44, #fc6076);-webkit-background-clip: text;background-clip: text;color: transparent; filter: drop-shadow(1px 1px 2px rgba(76, 76, 76, 1))";
    back.style.background = "linear-gradient(to right, #ff9a44, #fc6076)";
}
else if (Shape === "circle") {
    stext.innerText = "Circle";
    stext.style.cssText = "background: linear-gradient(to right, #00c6fb, #005bea);-webkit-background-clip: text;background-clip: text;color: transparent; filter: drop-shadow(1px 1px 2px rgba(76, 76, 76, 1))";
    back.style.background = "linear-gradient(to right, #00c6fb, #005bea)";
}
else if (Shape === "triangle") {
    stext.innerText = "Triangle";
    stext.style.cssText = "background: linear-gradient(to bottom, #E6E9F0, #536976);-webkit-background-clip: text;background-clip: text;color: transparent; filter: drop-shadow(1px 1px 2px rgba(76, 76, 76, 1))";
    back.style.background = "linear-gradient(to bottom, #E6E9F0, #536976)";
}
else if (Shape === "rhombus") {
    stext.innerText = "Rhombus";
    stext.style.cssText = "background: linear-gradient(to right, #d387ab, #b721ff);-webkit-background-clip: text;background-clip: text;color: transparent; filter: drop-shadow(1px 1px 2px rgba(76, 76, 76, 1))";
    back.style.background = "linear-gradient(to right, #d387ab, #b721ff)";
}
else if (Shape === "trapezium") {
    stext.innerText = "Traqezium";
    stext.style.cssText = "background: linear-gradient(to right, #43e97b, #38f9d7);-webkit-background-clip: text;background-clip: text;color: transparent; filter: drop-shadow(1px 1px 2px rgba(76, 76, 76, 1))";
    back.style.background = "linear-gradient(to right, #43e97b, #38f9d7)";
}
else if (Shape === "kite") {
    stext.innerText = "Kite";
    stext.style.cssText = "background: linear-gradient(to right, #f83600, #f9d423);-webkit-background-clip: text;background-clip: text;color: transparent; filter: drop-shadow(1px 1px 2px rgba(76, 76, 76, 1))";
    back.style.background = "linear-gradient(to right, #f83600, #f9d423)";
}
else {
    console.error("Error selecting shape.")
}
