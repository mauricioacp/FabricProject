import { fabric } from "fabric";
new fabric.Canvas("C");
let recinto_nombre = document.getElementById("recinto_nombre").value;
const recinto_alto = document.getElementById("recinto_alto").value;
const recinto_ancho = document.getElementById("recinto_ancho").value;
const ventanas_nombres = document.getElementsByClassName("ventanas_nombres");
const ventanas_distance = document.getElementsByClassName("ventanas_distance");
const ventanas_wallside = document.getElementsByClassName("ventanas_wallside");
const ventanas_width = document.getElementsByClassName("ventanas_width");
const puertas_nombres = document.getElementsByClassName("puertas_nombres");
const puertas_distance = document.getElementsByClassName("puertas_distance");
const puertas_wallside = document.getElementsByClassName("puertas_wallside");
const puertas_width = document.getElementsByClassName("puertas_width");
const puertas_dooraxis = document.getElementsByClassName("puertas_dooraxis");
const puertas_dooropening = document.getElementsByClassName("puertas_dooropening");
let canvas = new fabric.Canvas('canvas');
let ctx = canvas.getContext();
let arrayOverlap = [];
let arrayGroup = [];
let select = document.getElementById("sel1");


function addToSelect() {
    select.innerHTML = "";
    let defaultValue = document.createElement("option");
    defaultValue.innerHTML = "Select your Object";
    select.appendChild(defaultValue);
    for (let i = 0; i < arrayOverlap.length; i++) {
        let opt = arrayOverlap[i].name;
        let value = arrayOverlap[i].name;
        let el = document.createElement("option");
        el.innerHTML = opt;
        el.value = value;
        select.appendChild(el);
    }

}


let topRoom = 100;
let leftRoom = 50;
var rect = new fabric.Rect({
    left: leftRoom,
    top: topRoom,
    fill: 'transparent',
    stroke: 'solid black',
    strokeWidth: 2,
    strokeUniform: true,
    width: parseInt(recinto_ancho),
    height: parseInt(recinto_alto),
    selectable: false
    // hasControls: false,
    // lockMovementX: true,
    // lockScalingX: true
    // lockUniScaling: true,
    // lockRotation: true,
    // selectable: false
});
if (rect.width > 350 || rect.height > 300) {
}
else {
    canvas.add(rect);
}
for (var a = 0; a < ventanas_distance.length; a++) {
    let heightWind1 = 10;
    let width_positivo = ventanas_width[a].value * -1;
    if (ventanas_wallside[a].value.toLowerCase() === "n") {
        topRoom = 100;
        leftRoom = 50;
        let wind1 = new fabric.Rect();
        wind1.set({
            left: leftRoom + parseInt(ventanas_distance[a].value),
            top: topRoom - heightWind1 / 2,
            fill: 'transparent',
            stroke: 'black',
            strokeWidth: 2,
            strokeUniform: true,
            width: width_positivo,
            height: heightWind1,
            //angle: 90, //solo para paredes E y O
            selectable: false
        });
        let seSolapa = false;
        //Límites ancho: 
        if ((wind1.width + parseInt(ventanas_distance[a].value)) > rect.width) {
        }
        else {
            //Condiciones Solapamiento:
            arrayOverlap.forEach(function (i) {
                if (i.intersectsWithObject(wind1)) {
                    seSolapa = true;
                }
            });
            if (!seSolapa) {
                arrayOverlap.push(wind1);
                canvas.add(wind1);
            }
        }
    }
    if (ventanas_wallside[a].value.toLowerCase() === "s") {
        topRoom = 100 + rect.height;
        leftRoom = 50 + rect.width;
        var wind1 = new fabric.Rect();
        ventanas_width[a].value * -1;
        wind1.set({
            left: (leftRoom - parseInt(ventanas_distance[a].value)),
            top: topRoom - heightWind1 / 2,
            fill: 'transparent',
            stroke: 'black',
            strokeWidth: 1,
            strokeUniform: true,
            width: width_positivo * -1,
            height: heightWind1,
            //angle: 90, //solo para paredes E y O
            selectable: false
        });
        let seSolapa = false;
        if ((wind1.width * (-1) + parseInt(ventanas_distance[a].value)) > rect.width) {
        }
        else {
            //Condiciones Solapamiento:
            arrayOverlap.forEach(function (i) {
                if (i.intersectsWithObject(wind1)) {
                    seSolapa = true;
                }
            });
            if (!seSolapa) {
                arrayOverlap.push(wind1);
                canvas.add(wind1);
            }
        }
    }
    if (ventanas_wallside[a].value.toLowerCase() === "e") {
        topRoom = 100;
        leftRoom = 50 + rect.width;
        var wind1 = new fabric.Rect();
        let positivo = (parseInt(ventanas_width[a].value) * -1);
        wind1.set({
            left: (leftRoom - heightWind1 / 2),
            top: topRoom + parseInt(ventanas_distance[a].value),
            fill: 'transparent',
            stroke: 'black',
            strokeWidth: 2,
            strokeUniform: true,
            width: heightWind1,
            height: positivo,
            //angle: 10, //solo para paredes E y O
            selectable: false
        });
        let seSolapa = false;
        //Límites ancho: 
        if ((wind1.height + parseInt(ventanas_distance[a].value)) > rect.height) {
            alert('x');
        }
        else {
            //Condiciones Solapamiento:
            arrayOverlap.forEach(function (i) {
                if (i.intersectsWithObject(wind1)) {
                    seSolapa = true;
                }
            });
            if (!seSolapa) {
                arrayOverlap.push(wind1);
                canvas.add(wind1);
            }
        }
    }
    if (ventanas_wallside[a].value.toLowerCase() === "o") {
        topRoom = 100 + rect.height;
        leftRoom = 50;
        let wind1 = new fabric.Rect();
        let positivo = (parseInt(ventanas_width[a].value) * -1);
        //ventanas_width[a].value * -1;
        wind1.set({
            left: (leftRoom - heightWind1 / 2),
            top: topRoom - parseInt(ventanas_distance[a].value),
            fill: 'transparent',
            stroke: 'black',
            strokeWidth: 2,
            strokeUniform: true,
            width: heightWind1,
            height: positivo * -1,
            //angle: 10, //solo para paredes E y O
            selectable: false
        });
        let seSolapa = false;
        //Límites ancho: 
        if ((wind1.height * (-1) + parseInt(ventanas_distance[a].value)) > rect.height) {
        }
        else {
            //Condiciones Solapamiento:
            arrayOverlap.forEach(function (i) {
                if (i.intersectsWithObject(wind1)) {
                    seSolapa = true;
                }
            });
            if (!seSolapa) {
                arrayOverlap.push(wind1);
                canvas.add(wind1);
            }
        }
    }
}
for (var a = 0; a < puertas_distance.length; a++) {
    let heightDoor = 10;
    let width_positivo = puertas_width[a].value * -1;
    if (puertas_wallside[a].value.toLowerCase() === "n") {
        let ejeX = Boolean(puertas_dooropening[a].value);
        let ejeY = Boolean(puertas_dooraxis[a].value);
        topRoom = 100;
        leftRoom = 50;
        let x = width_positivo;
        if (puertas_dooropening[a].value == false) {
            topRoom = topRoom + x - 5;
        }
        else {
            topRoom = topRoom - 5;
        }
        let door1 = new fabric.Path('M 0 0 L 0 ' + x + ' Q ' + x + ',' + x + ',' + x + ',0,0,' + x + ' L ' + x + ' 0z + M 0 0 L 0 ' + x + ' L -10 ' + x + ' L -10 0Z');
        door1.set({
            left: leftRoom + parseInt(puertas_distance[a].value) + x + 1,
            top: topRoom - x,
            fill: 'transparent',
            stroke: 'black',
            perPixelTargetFind: true,
            strokeWidth: 2,
            strokeUniform: true,
            angle: 90,
            flipX: ejeX,
            flipY: ejeY,
            selectable: false
        });
        let seSolapa = false;
        //Límites ancho: 
        if ((parseInt(puertas_distance[a].value) + width_positivo) > rect.width) {
        }
        else {
            //Condiciones Solapamiento:
            arrayOverlap.forEach(function (i) {
                if (i.intersectsWithObject(door1)) {
                    seSolapa = true;
                }
            });
            if (!seSolapa) {
                arrayOverlap.push(door1);
                canvas.add(door1);
            }
        }
    }
    if (puertas_wallside[a].value.toLowerCase() === "e") {
        let ejeX = Boolean(puertas_dooropening[a].value);
        let ejeY = Boolean(puertas_dooraxis[a].value);
        topRoom = 100;
        leftRoom = 50 + rect.width;
        let x = width_positivo;
        if (puertas_dooropening[a].value == false) {
            leftRoom = leftRoom + heightDoor / 2 + 1;
        }
        else {
            leftRoom = leftRoom + x + heightDoor / 2 + 1;
        }
        let door1 = new fabric.Path('M 0 0 L 0 ' + x + ' Q ' + x + ',' + x + ',' + x + ',0,0,' + x + ' L ' + x + ' 0z + M 0 0 L 0 ' + x + ' L -10 ' + x + ' L -10 0Z');
        door1.set({
            left: leftRoom,
            top: topRoom + parseInt(puertas_distance[a].value) + x + 1,
            fill: 'transparent',
            stroke: 'brown',
            perPixelTargetFind: true,
            strokeWidth: 1,
            strokeUniform: true,
            angle: 180,
            flipX: ejeX,
            flipY: ejeY,
            selectable: false
        });
        let seSolapa = false;
        //Límites ancho: 
        if ((parseInt(puertas_distance[a].value) + width_positivo) > rect.height) {
        }
        else {
            //Condiciones Solapamiento:
            arrayOverlap.forEach(function (i) {
                if (i.intersectsWithObject(door1)) {
                    seSolapa = true;
                }
            });
            if (!seSolapa) {
                arrayOverlap.push(door1);
                canvas.add(door1);
            }
        }
    }
    if (puertas_wallside[a].value.toLowerCase() === "s") {
        let ejeX = Boolean(puertas_dooropening[a].value);
        let ejeY = Boolean(puertas_dooraxis[a].value);
        topRoom = 100 + rect.height;
        leftRoom = 50 + rect.width;
        let x = width_positivo;
        if (puertas_dooropening[a].value == false) {
            topRoom = topRoom + heightDoor / 2 + 1;
        }
        else {
            topRoom = topRoom + x + heightDoor / 2 + 1;
        }
        let door1 = new fabric.Path('M 0 0 L 0 ' + x + ' Q ' + x + ',' + x + ',' + x + ',0,0,' + x + ' L ' + x + ' 0z + M 0 0 L 0 ' + x + ' L -10 ' + x + ' L -10 0Z');
        door1.set({
            left: leftRoom - parseInt(puertas_distance[a].value) - x,
            top: topRoom,
            fill: 'transparent',
            stroke: 'brown',
            perPixelTargetFind: true,
            strokeWidth: 1,
            strokeUniform: true,
            angle: 270,
            flipX: ejeX,
            flipY: ejeY,
            selectable: false
        });
        let seSolapa = false;
        if ((parseInt(puertas_distance[a].value) + width_positivo) > rect.width) {
        }
        else {
            //Condiciones Solapamiento:
            arrayOverlap.forEach(function (i) {
                if (i.intersectsWithObject(door1)) {
                    seSolapa = true;
                }
            });
            if (!seSolapa) {
                arrayOverlap.push(door1);
                canvas.add(door1);
            }
        }
    }
    if (puertas_wallside[a].value.toLowerCase() === "o") {
        let ejeX = Boolean(puertas_dooropening[a].value);
        let ejeY = Boolean(puertas_dooraxis[a].value);
        topRoom = 100 + rect.height;
        leftRoom = 50;
        let x = width_positivo;
        if (puertas_dooropening[a].value == false) {
            leftRoom = leftRoom - heightDoor / 2;
        }
        else {
            leftRoom = leftRoom - x - heightDoor / 2;
        }
        let door1 = new fabric.Path('M 0 0 L 0 ' + x + ' Q ' + x + ',' + x + ',' + x + ',0,0,' + x + ' L ' + x + ' 0z + M 0 0 L 0 ' + x + ' L -10 ' + x + ' L -10 0Z');
        door1.set({
            left: leftRoom,
            top: topRoom - parseInt(puertas_distance[a].value) - x,
            fill: 'transparent',
            stroke: 'brown',
            perPixelTargetFind: true,
            strokeWidth: 1,
            strokeUniform: true,
            // angle: 0,
            flipX: ejeX,
            flipY: ejeY,
            selectable: false
        });
        let seSolapa = false;
        if ((parseInt(puertas_distance[a].value) + width_positivo) > rect.height) {
        }
        else {
            //Condiciones Solapamiento:
            arrayOverlap.forEach(function (i) {
                if (i.intersectsWithObject(door1)) {
                    seSolapa = true;
                }
            });
            if (!seSolapa) {
                arrayOverlap.push(door1);
                canvas.add(door1);
            }
        }
    }
}
//# sourceMappingURL=fabric-TypeScript.js.map