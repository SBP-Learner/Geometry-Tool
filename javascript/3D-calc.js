const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const Shape = urlParams.get('shape');
const stext = document.getElementById("shape-name");
const back = document.getElementById("back");
const shapeCont = document.getElementById("visual-shape");
const main_shape_txt = document.getElementById("shape-txt"); 

if (Shape === "cube") {
    stext.innerText = "Cube";
    stext.style.cssText = "background: linear-gradient(to right, #00f2fe, #badfffff); -webkit-background-clip: text; background-clip: text; color: transparent; filter: drop-shadow(1px 1px 2px rgba(76, 76, 76, 1))";
    back.style.background = "linear-gradient(to right, #00f2fe, #a5d5ffff)";
    shapeCont.innerHTML = threeD[Shape];
    main_shape_txt.innerText = "Cube";
    main_shape_txt.style.cssText = bg[Shape];

}
else if (Shape === "cuboid") {
    stext.innerText = "Cubiod";
    stext.style.cssText = "background: linear-gradient(to right, #ff9a44, #fc6076);-webkit-background-clip: text;background-clip: text;color: transparent; filter: drop-shadow(1px 1px 2px rgba(76, 76, 76, 1))";
    back.style.background = "linear-gradient(to right, #ff9a44, #fc6076)";
    shapeCont.innerHTML = threeD[Shape];
    main_shape_txt.innerText = "Rectangle";
    main_shape_txt.style.cssText = bg[Shape];
    
}
else if (Shape === "sphere") {
    stext.innerText = "Sphere";
    stext.style.cssText = "background: linear-gradient(to right, #00c6fb, #005bea);-webkit-background-clip: text;background-clip: text;color: transparent; filter: drop-shadow(1px 1px 2px rgba(76, 76, 76, 1))";
    back.style.background = "linear-gradient(to right, #00c6fb, #005bea)";
    shapeCont.innerHTML = threeD[Shape];
    main_shape_txt.innerText = "Sphere";
    main_shape_txt.style.cssText = bg[Shape];
}
else if (Shape === "cylinder") {
    stext.innerText = "Cylinder";
    stext.style.cssText = "background: linear-gradient(to right, #43e97b, #38f9d7);-webkit-background-clip: text;background-clip: text;color: transparent; filter: drop-shadow(1px 1px 2px rgba(76, 76, 76, 1))";
    back.style.background = "linear-gradient(to right, #43e97b, #38f9d7)";
    shapeCont.innerHTML = threeD[Shape];
    main_shape_txt.innerText = "Cylinder";
    main_shape_txt.style.cssText = bg[Shape];
}
else if (Shape === "cone") {
    stext.innerText = "Cone";
    stext.style.cssText = "background: linear-gradient(to right, #f83600, #f9d423);-webkit-background-clip: text;background-clip: text;color: transparent; filter: drop-shadow(1px 1px 2px rgba(76, 76, 76, 1))";
    back.style.background = "linear-gradient(to right, #f83600, #f9d423)";
    shapeCont.innerHTML = threeD[Shape];
    main_shape_txt.innerText = "Cone";
    main_shape_txt.style.cssText = bg[Shape];
}
else if (Shape === "pyramid") {
    stext.innerText = "Pyramid";
    stext.style.cssText = "background: linear-gradient(to bottom, #E6E9F0, #536976);-webkit-background-clip: text;background-clip: text;color: transparent; filter: drop-shadow(1px 1px 2px rgba(76, 76, 76, 1))";
    back.style.background = "linear-gradient(to bottom, #E6E9F0, #536976)";
    shapeCont.innerHTML = threeD[Shape];
    main_shape_txt.innerText = "Pyramid";
    main_shape_txt.style.cssText = bg[Shape];
}
else if (Shape === "torus") {
    stext.innerText = "Torus";
    stext.style.cssText = "background: linear-gradient(to right, #d387ab, #b721ff);-webkit-background-clip: text;background-clip: text;color: transparent; filter: drop-shadow(1px 1px 2px rgba(76, 76, 76, 1))";
    back.style.background = "linear-gradient(to right, #d387ab, #b721ff)";
    shapeCont.innerHTML = threeD[Shape];
    main_shape_txt.innerText = "Torus";
    main_shape_txt.style.cssText = bg[Shape];
}
else {
    console.error("Error selecting shape.")
}