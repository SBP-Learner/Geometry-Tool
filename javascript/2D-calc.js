// code for 2D shapes
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const Shape = urlParams.get('shape');
const stext = document.getElementById("shape-name");
const back = document.getElementById("back");
const shapeCont = document.getElementById("visual-shape");
const main_shape_txt = document.getElementById("shape-txt"); 

if (Shape === "square") {
    stext.innerText = "Square";
    stext.style.cssText = bg[Shape];
    main_shape_txt.innerText = "Square";
    main_shape_txt.style.cssText = "background: linear-gradient(to right, #00f2fe, #badfffff); -webkit-background-clip: text; background-clip: text; color: transparent; filter: drop-shadow(1px 1px 2px rgba(76, 76, 76, 1))";
    back.style.background = bg[Shape];
    shapeCont.innerHTML = twoD[Shape];
}
else if (Shape === "rectangle") {
    stext.innerText = "Rectangle";
    stext.style.cssText = bg[Shape];
    main_shape_txt.innerText = "Rectangle";
    main_shape_txt.style.cssText = bg[Shape];
    back.style.background = "linear-gradient(to right, #ff9a44, #fc6076)";
    shapeCont.innerHTML = twoD[Shape];
}
else if (Shape === "circle") {
    stext.innerText = "Circle";
    stext.style.cssText = bg[Shape];
    main_shape_txt.innerText = "Circle";
    main_shape_txt.style.cssText = bg[Shape];
    back.style.background = "linear-gradient(to right, #00c6fb, #005bea)";
    shapeCont.innerHTML = twoD[Shape];
}
else if (Shape === "triangle") {
    stext.innerText = "Triangle";
    stext.style.cssText = bg[Shape];
    main_shape_txt.innerText = "Triangle";
    main_shape_txt.style.cssText = bg[Shape];
    back.style.background = "linear-gradient(to bottom, #E6E9F0, #536976)";
    shapeCont.innerHTML = twoD[Shape];
}
else if (Shape === "rhombus") {
    stext.innerText = "Rhombus";
    stext.style.cssText = bg[Shape];
    main_shape_txt.innerText = "Rhombus";
    main_shape_txt.style.cssText = bg[Shape];
    back.style.background = "linear-gradient(to right, #d387ab, #b721ff)";
    shapeCont.innerHTML = twoD[Shape];
}
else if (Shape === "trapezium") {
    stext.innerText = "Traqezium";
    stext.style.cssText = bg[Shape];
    main_shape_txt.innerText = "Traqezium";
    main_shape_txt.style.cssText = bg[Shape];
    back.style.background = "linear-gradient(to right, #43e97b, #38f9d7)";
    shapeCont.innerHTML = twoD[Shape];
}
else if (Shape === "kite") {
    stext.innerText = "Kite";
    stext.style.cssText = bg[Shape];
    main_shape_txt.innerText = "Kite";
    main_shape_txt.style.cssText =bg[Shape]
    back.style.background = "linear-gradient(to right, #f83600, #f9d423)";
    shapeCont.innerHTML = twoD[Shape];
}
else {
    console.error("Error selecting shape.")
}

// code for 3D shapes

/* if (Shape === "square") {
}
else if (Shape === "rectangle") {
}
else if (Shape === "circle") {
}
else if (Shape === "triangle") {
}
else if (Shape === "rhombus") {
}
else if (Shape === "trapezium") {
}
else if (Shape === "kite") {
}
else {
    console.error("Error selecting shape.")
} */