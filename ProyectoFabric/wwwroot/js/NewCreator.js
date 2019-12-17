
class Recinto {
    constructor(nombre, altura, anchura) {
        this.Nombre = nombre,
            this.Altura = altura,
            this.Anchura = anchura
    }
}
class Ventana {

    constructor(nombre, distance, anchura, orientacion) {
        this.Nombre = nombre,
            this.Distance = distance,
            this.Anchura = anchura,
            this.orientacion = orientacion
    }
}
class Puerta {
    constructor(nombre, altura, anchura, orientacion, dooraxis, dooropening) {
        this.Nombre = nombre,
            this.Altura = altura,
            this.Anchura = anchura,
            this.Orientacion = orientacion,

            this.DoorAxis = dooraxis,
            this.DoorOpening = dooropening
    }

};
class Plano {
    constructor(Nombre, Recinto, Ventana, Puertas, userId) {
        this.userId = userId
        this.Nombre = Nombre,
            this.Recinto = Recinto,
            this.Ventanas = [Ventana],
            this.Puertas = [Puertas]
    };
}


let userId = document.getElementById("appUserId").value;
let MyPlano = new Plano();
MyPlano.userId = userId;

let canvas = new fabric.Canvas('canvas');
let ctx = canvas.getContext('2d');
let workplace = document.getElementsByClassName("workPlace")[0];
let select = document.getElementById("sel1");
let room = document.getElementById("room");
let arrayOverlap = [];
let nombrePlano = document.getElementById('nombreplano');
MyPlano.Nombre = nombrePlano.value;



//var SelectObject = function (ObjectName) {
//    canvas.getObjects().forEach(function (x) {
//        if (x.id === ObjectName) {
//            canvas.setActiveObject(x);
//        }
//    })
//}

// BOTON ELIMINAR TODO (Recinto, Ventanas y Puertas)

let botonDeleteAll = document.getElementById("botonDeleteAll");


botonDeleteAll.addEventListener('click', function () {
    canvas.clear().renderAll();
    arrayOverlap = [];
    addToSelect();
})

select.addEventListener('change', function () {

    let foundObject = arrayOverlap.find(element => element.name == this.value);
    let foundVentanas = MyPlano.Ventanas.find(element => element.name == this.value);
    let foundPuertas = MyPlano.Puertas.find(element => element.name == this.value);

    this.onclick = window.scrollTo({ top: 865, behavior: "smooth" });

    if (MyPlano.Ventanas[0] == null) {

        MyPlano.Ventanas.splice(0, 1);

    }
    if (MyPlano.Puertas[0] == null) {


        MyPlano.Puertas.splice(0, 1);
    }


    if (foundObject.type == "room") {
        let i = arrayOverlap.indexOf(foundObject);
        arrayOverlap.splice(i, 1);
        let MyplanoObjectRecinto = MyPlano.Recinto.name == this.value;
        MyPlano.Recinto == null

        createRoomForm(foundObject, MyplanoObjectRecinto);
    }

    if (foundObject.type == "window") {
        let i = arrayOverlap.indexOf(foundObject);
        arrayOverlap.splice(i, 1);
        let y = MyPlano.Ventanas.indexOf(foundVentanas);
        MyPlano.Ventanas.splice(y, 1);
        createWindowForm(foundObject, foundVentanas);

    }

    if (foundObject.type == "door") {
        let i = arrayOverlap.indexOf(foundObject);
        arrayOverlap.splice(i, 1);
        let y = MyPlano.Puertas.indexOf(foundPuertas);
        MyPlano.Puertas.splice(y, 1);
        createDoorForm(foundObject, foundPuertas);

    }
})


room.addEventListener("click", function () {

    this.onclick = window.scrollTo({ top: 865, behavior: "smooth" });
    createRoomForm();

    let wind = document.getElementById("window");

    wind.addEventListener("click", function () {

        this.onclick = window.scrollTo({ top: 865, behavior: "smooth" });
        createWindowForm();

    })

    let door = document.getElementById("door");

    door.addEventListener("click", function () {

        this.onclick = window.scrollTo({ top: 865, behavior: "smooth" });
        createDoorForm();

    })
})

function createRoomForm(Object, myplanorecinto) {
    $('.workPlace').empty();

    let formRoom = document.createElement('form');
    formRoom.setAttribute("class", "formRoom");
    workplace.appendChild(formRoom);

    let headingRoom = document.createElement('h3');
    headingRoom.innerHTML = "Room";
    headingRoom.setAttribute("class", 'room');

    formRoom.appendChild(headingRoom);

    let line = document.createElement('hr');
    formRoom.appendChild(line);

    let linebreak = document.createElement('br');
    formRoom.appendChild(linebreak);

    let nameLabel = document.createElement('label');
    nameLabel.setAttribute("class", "labelsforms");
    nameLabel.innerHTML = "Name :";
    formRoom.appendChild(nameLabel);

    let inputName = document.createElement('input');
    inputName.setAttribute("type", "text");
    inputName.setAttribute("class", "form-control")


    if (Object == null) {

        inputName.setAttribute("placeholder", "Enter Name");
    }
    else {
        inputName.setAttribute("value", Object.name);

    }

    formRoom.appendChild(inputName);

    let linebreak1 = document.createElement('br');
    formRoom.appendChild(linebreak1);

    let widthlabel = document.createElement('label');
    widthlabel.setAttribute("class", "labelsforms");
    widthlabel.innerHTML = "Width :";

    formRoom.appendChild(widthlabel);

    let inputWidth = document.createElement('input');
    inputWidth.setAttribute("type", "number");
    inputWidth.setAttribute("step", "0.01");
    inputWidth.required = true;
    inputWidth.setAttribute("class", "form-control")
    if (Object == null) {


        inputWidth.setAttribute("placeholder", "Enter the Width");
    }
    else {

        inputWidth.setAttribute("value", Object.width);
        

    }
    formRoom.appendChild(inputWidth);

    let linebreak0 = document.createElement('br');
    formRoom.appendChild(linebreak0);

    let heightlabel = document.createElement('label');
    heightlabel.setAttribute("class", "labelsforms");
    heightlabel.innerHTML = "Height :";
    formRoom.appendChild(heightlabel);

    let inputHeight = document.createElement('input');
    inputHeight.setAttribute("type", "number");
    inputHeight.setAttribute("step", "0.01");
    inputHeight.setAttribute("class", "form-control");
    inputHeight.required = true;
    if (Object == null) {


        inputHeight.setAttribute("placeholder", "Enter the Height");

    }
    else {

        inputHeight.setAttribute("value", Object.height);


    }
    formRoom.appendChild(inputHeight);

    let messagebreak = document.createElement('br');
    formRoom.appendChild(messagebreak);

    let botonCreate = document.createElement('button');
    botonCreate.setAttribute("type", "button");
    botonCreate.setAttribute("class", "btn btn-outline-success");
    botonCreate.innerHTML = "Create";
    formRoom.appendChild(botonCreate);

    let botonDelete = document.createElement('button');
    botonDelete.setAttribute("type", "button");
    botonDelete.setAttribute("class", "btn btn-outline-danger");
    botonDelete.innerHTML = "Delete";
    formRoom.appendChild(botonDelete);

    let rect = Object;

    botonCreate.addEventListener("click", function () {

        rect = createRoom(inputName, inputWidth, inputHeight, formRoom);

    })

    botonDelete.addEventListener("click", function () {

        //if (!myplanorecinto == null) {

        //    MyPlano.Recinto.splice(MyPlano.Recinto.indexOf(myplanorecinto), 1);
        //}
        //else {
        //    MyPlano.Recinto.splice((MyPlano.Recinto.length - 1), 1);
        //}

        formRoom.remove();
        canvas.remove(rect);
        addToSelect();
    })
}


function createRoom(inputName, inputWidth, inputHeight, formroom) {

    let heightWind1 = 10;
    let heightDoor = 10;
    let topRoom = 100;
    let leftRoom = 100;
    
    rect = new fabric.Rect({

        name: inputName.value,
        //title: inputName.value,
        type: "room",
        left: leftRoom,
        top: topRoom,
        fill: 'transparent',
        stroke: 'solid black',
        strokeWidth: 1,
        strokeUniform: true,
        width: parseInt(inputWidth.value),
        height: parseInt(inputHeight.value),
        selectable: true,
        hasControls: false,
        // lockMovementX: true,
        // lockUniScaling: true,
        //lockRotation: true,
        // selectable: false
    });
    var dataName = inputName.value;
    var dataHeight = inputHeight.value;
    var dataWidth = inputWidth.value;

    // Expresiones regulares para validacion
    var exp = /[A-Za-z0-9]/;
    var exp1 = /[0-9]/;


    



    // VALIDADACIONES DEL RECINTO 
    //Límites ancho: 

    if (rect.width > 350 || rect.height > 300) {


        swal("Size Validation", "The size of the enclosure is bigger than the plane", "error");

    }

    // Name Validations

    else if ((inputName.value == "")) {
        swal("Name Validation", "You must enter a Name for the Room", "error");
    }

    else if (!exp.test(dataName)) {
        swal("Name Validation", "Special characters are not allowed in the name", "error");
    }

    // Width Validations

    else if ((inputWidth.value == "")) {
        swal("Width Validation", "You must enter a Width for the Room", "error");
    }

    else if ((inputWidth.value <= 0)) {
        swal("Width Validation", "Negative values and zero values are not allowed", "error");
    }

    else if (!exp1.test(dataWidth)) {
        swal("Width Validation", "The Special Caharcters/Letters are not allowed in the Width", "error");
    }

    // Height Validations

    else if ((inputHeight.value == "")) {
        swal("Height Validation", "You must enter a Height for the Room", "error");
    }

    else if (!exp1.test(dataHeight)) {
        swal("Height Validation", "The Special Caharcters/Letters are not allowed in the Height", "error");
    }

    else if ((inputHeight.value <= 0)) {
        swal("Height Validation", "Negative values and zero values are not allowed", "error");
    }
    else {
        formroom.remove();
        canvas.clear().renderAll();
        arrayOverlap.push(rect);
        let recinto1 = new Recinto(inputName.value, inputHeight.value, inputWidth.value);
        MyPlano.Recinto = recinto1;
        addToSelect();

        //Redimensionado de objetos al cambiar las medidas de Room. 

        arrayOverlap.forEach(function (x) {

            if (x.type == "window" && x.side == "n") {
                x.set('left', leftRoom + x.distance);
                x.set('top', topRoom - heightWind1 / 2);
                if (x.distance + x.width > rect.width) {
                    swal("Limit Validation", ' Some elements are out of the room size', "error");
                }
            }
            if (x.type == "window" && x.side == "e") {
                x.set('left', leftRoom + rect.width - heightWind1 / 2);
                x.set('top', topRoom + x.distance);
                if (x.distance + x.height > rect.height) {
                    swal("Limit Validation", ' Some elements are out of the room size', "error");
                }
            }
            if (x.type == "window" && x.side == "s") {
                x.set('left', leftRoom + rect.width - x.distance);
                x.set('top', topRoom + rect.height - heightWind1 / 2);
                if (x.distance + x.width * (-1) > rect.width) {
                    swal("Limit Validation", ' Some elements are out of the room size', "error");
                }
            }
            if (x.type == "window" && x.side == "o") {
                x.set('top', topRoom + rect.height - x.distance);
                if (x.distance + x.height * (-1) > rect.height) {
                    swal("Limit Validation", ' Some elements are out of the room size', "error");
                }
            }

            if (x.type == "door" && x.side == "n") {
                if (x.flipX == true) {
                    x.set('left', leftRoom + x.distance + x.height + 1);
                    x.set('top', topRoom - x.height - heightDoor / 2)
                } else {
                    x.set('left', leftRoom + x.distance + x.height + 1);
                    x.set('top', topRoom - heightDoor / 2)
                }
                if (x.distance + x.height > rect.width) {
                    swal("Limit Validation", ' Some elements are out of the room size', "error");
                }
            }
            if (x.type == "door" && x.side == "e") {
                if (x.flipX == true) {
                    x.set('left', leftRoom + rect.width + x.width - heightDoor / 2 + 1);
                    x.set('top', topRoom + x.distance + x.height + 1)
                } else {
                    x.set('left', leftRoom + rect.width + heightDoor / 2 + 1);
                    x.set('top', topRoom + x.distance + x.height + 1)
                }
                if (x.distance + x.height > rect.height) {
                    swal("Limit Validation", ' Some elements are out of the room size', "error");
                }
            }
            if (x.type == "door" && x.side == "s") {
                if (x.flipX == true) {
                    x.set('left', leftRoom + rect.width - x.distance - x.height);
                    x.set('top', topRoom + rect.height + x.width - heightWind1 / 2 + 1);
                } else {
                    x.set('left', leftRoom + rect.width - x.distance - x.height);
                    x.set('top', topRoom + rect.height + heightWind1 / 2 + 1);
                }
                if (x.distance + x.height > rect.width) {
                    swal("Limit Validation", ' Some elements are out of the room size', "error");
                }
            }
            if (x.type == "door" && x.side == "o") {
                if (x.flipX == true) {
                    x.set('left', leftRoom - x.width + heightDoor / 2);
                    x.set('top', topRoom + rect.height - x.distance - x.height);
                } else {
                    x.set('left', leftRoom - heightWind1 / 2);
                    x.set('top', topRoom + rect.height - x.distance - x.height);
                }
                if (x.distance + x.height > rect.height) {
                    swal("Limit Validation", ' Some elements are out of the room size', "error");
                }
            }

            canvas.add(x);
        })

    }
    return rect;
};


function createWindowForm(Object, myplanoventanas) {
    $('.workPlace').empty();

    // FORMULARIO VENTANAS

    let formWindow = document.createElement('form');
    formWindow.setAttribute("class", "formWindow");
    workplace.appendChild(formWindow);

    let headingWindow = document.createElement('h3');
    headingWindow.innerHTML = "Window";
    formWindow.appendChild(headingWindow);

    let line = document.createElement('hr');
    formWindow.appendChild(line);


    // Label Nombre Ventana

    let nameWindLabel = document.createElement('label');
    nameWindLabel.innerHTML = "Name :";
    nameWindLabel.setAttribute("class", "labelsforms");
    formWindow.appendChild(nameWindLabel);

    // Input Nombre Ventana

    let inputWindName = document.createElement('input');
    inputWindName.setAttribute("type", "text");

    inputWindName.setAttribute("class", "form-control ");

    if (Object == null) {


        inputWindName.setAttribute("placeholder", "Enter Name");

    }
    else {

        inputWindName.setAttribute("value", Object.name);


    }
    formWindow.appendChild(inputWindName);


    // Label RoomSide

    let sideLabel = document.createElement('label');
    sideLabel.innerHTML = "Room Side :";
    sideLabel.setAttribute("class", "labelsforms");
    formWindow.appendChild(sideLabel);

    // Select Ventana
    let inputSide = document.createElement('select');
    inputSide.setAttribute("class", "form-control ");
    formWindow.appendChild(inputSide);

    let optionN = document.createElement('option');
    optionN.setAttribute('label', 'North');
    optionN.setAttribute("value", "n");
    inputSide.appendChild(optionN);

    let optionE = document.createElement('option');
    optionE.setAttribute('label', 'East');
    optionE.setAttribute("value", "e");
    inputSide.appendChild(optionE);

    let optionS = document.createElement('option');
    optionS.setAttribute('label', 'South');
    optionS.setAttribute("value", "s");
    inputSide.appendChild(optionS);

    let optionO = document.createElement('option');
    optionO.setAttribute('label', 'West');
    optionO.setAttribute("value", "o");
    inputSide.appendChild(optionO);


    // Label Distance Ventana
    let distanceLabel = document.createElement('label');
    distanceLabel.innerHTML = "Distance :";
    distanceLabel.setAttribute("class", "labelsforms");

    formWindow.appendChild(distanceLabel);

    //Input Distance Ventana
    let inputDistance = document.createElement('input');
    inputDistance.setAttribute("type", "number");
    inputDistance.setAttribute("step", "0.01");
    inputDistance.setAttribute("class", "form-control");

    inputDistance.required = true;
    if (Object == null) {


        inputDistance.setAttribute("placeholder", "Enter the Distance");

    }
    else {

        inputDistance.setAttribute("value", Object.distance);


    }

    formWindow.appendChild(inputDistance);


    //Label Width Ventanas

    let widthlabel = document.createElement('label');
    widthlabel.innerHTML = "Width :";
    widthlabel.setAttribute("class", "labelsforms");
    formWindow.appendChild(widthlabel);

    //Input Width Ventana

    let inputWidth = document.createElement('input');

    inputWidth.setAttribute("type", "number");
    inputWidth.setAttribute("step", "0.01");
    inputWidth.setAttribute("class", "form-control");
    inputWidth.required = true;

    if (Object == null) {

        inputWidth.setAttribute("placeholder", "Enter the Width");

    }
    else {

        inputWidth.setAttribute("value", Object.width);
    }

    formWindow.appendChild(inputWidth);


    let messagebreak = document.createElement('br');
    formWindow.appendChild(messagebreak);

    // Boton Create Ventanas

    let botonCreate = document.createElement('button');
    botonCreate.setAttribute("type", "button");
    botonCreate.setAttribute("class", "btn btn-outline-success");
    botonCreate.innerHTML = "Create";
    formWindow.appendChild(botonCreate);

    // Boton Delete Ventanas

    let botonDelete = document.createElement('button');
    botonDelete.setAttribute("type", "button");
    botonDelete.setAttribute("class", "btn btn-outline-danger");
    botonDelete.innerHTML = "Delete";
    formWindow.appendChild(botonDelete);

    let rect = Object;

    // Crear Ventanas

    botonCreate.addEventListener("click", function () {
        wind1 = createWindow(inputSide, inputWindName, inputDistance, inputWidth, formWindow);

    })

    // Eliminar Ventanas

    botonDelete.addEventListener("click", function () {

        formWindow.remove();
        canvas.remove(wind1);
        addToSelect();

        //if (!myplanoventanas == null) {

        //    MyPlano.Ventanas.splice(MyPlano.Ventanas.indexOf(myplanoventanas), 1);
        //}
        //else {
        //    MyPlano.Ventanas.splice((MyPlano.Ventanas.length - 1), 1);
        //}

    })
}

// FIN DE FORMULARIOS VENTANAS

// CONDICIONES PARA PUERTA NORTE

function createWindow(inputSide, inputWindName, inputDistance, inputWidth, formWindow) {
    let heightWind1 = 10;
    let wind1;
    let roomSize = canvas._objects.find(x => x.type == "room");

    if (inputSide.value.toLowerCase() === "n") {
        let topRoom = 100;
        let leftRoom = 100;

        wind1 = new fabric.Rect({
            name: inputWindName.value,
            type: "window",
            side: inputSide.value.toLowerCase(),
            left: leftRoom + parseInt(inputDistance.value),
            distance: parseInt(inputDistance.value),
            top: topRoom - heightWind1 / 2,
            fill: 'transparent',
            stroke: 'blue',
            strokeWidth: 1,
            strokeUniform: true,
            width: parseInt(inputWidth.value),
            height: heightWind1,
            //angle: 90, solo para paredes E y O
            selectable: false
        });

        let seSolapa = false;

        var dataName = inputWindName.value;
        var dataDistance = inputDistance.value;
        var dataWidth = inputWidth.value;

        // Expresiones regulares para validacion
        var exp = /[A-Za-z0-9]/;
        var exp1 = /[0-9]/;


        //Límites ancho: 
        if ((wind1.width + parseInt(inputDistance.value)) > rect.width) {

            swal("Overlap Error", "The object entered overlaps with the previous", "error");

        }

        else if ((inputWindName.value == "")) {
            swal("Name Validation", "You must enter a Name for the Window", "error");
        }

        // Name Validations
        else if (!exp.test(dataName)) {
            swal("Name Validation", "Special characters are not allowed in the name", "error");
        }


        // Width Validations


        else if (!exp1.test(dataWidth)) {
            swal("Width Validation", "The Special Caharcters/Letters are not allowed in the Width", "error");
        }

        else if ((inputWidth.value == "")) {
            swal("Width Validation", "You must enter a Width for the Window", "error");
        }


        else if ((inputWidth.value <= 0)) {
            swal("Width Validation", "Negative values are not allowed", "error");
        }


        // Distance Validations

        else if ((inputDistance.value == "")) {
            swal("Distance Validation", "You must enter a Distance for the Window", "error");
        }


        else if ((inputDistance.value <= 0)) {
            swal("Distance Validation", "Negative values and zero values are not allowed", "error");
        }



        else if (!exp1.test(dataDistance)) {
            swal("Distance Validation", "The Special Caharcters/Letters are not allowed in the Distance", "error");
        }


        else {

            //Condiciones Solapamiento:
            arrayOverlap.forEach(function (i) {

                if (i != rect) {

                    if (i.intersectsWithObject(wind1)) {

                        swal("Overlap Validation", "Objects Overlap", "error");
                        seSolapa = true;
                        canvas.clear().renderAll();
                        addToSelect();
                        arrayOverlap.forEach(function (x) {
                            canvas.add(x);
                        })
                    }
                }

            });
            if (!seSolapa) {
                formWindow.remove();
                canvas.clear().renderAll();
                arrayOverlap.push(wind1);
                let Ventana1 = new Ventana(inputWindName.value, inputDistance.value, inputWidth.value * -1, inputSide.value);
                MyPlano.Ventanas.push(Ventana1);
                addToSelect();
                arrayOverlap.forEach(function (x) {
                    canvas.add(x);
                })
            }

        }

    }

    // CONDICIONES VENTANA SUR

    if (inputSide.value.toLowerCase() === "s") {
        let topRoom = 100;
        let leftRoom = 100;
        topRoom = topRoom + roomSize.height;
        leftRoom = leftRoom + roomSize.width;

        wind1 = new fabric.Rect();
        wind1.set({
            name: inputWindName.value,
            type: "window",
            side: inputSide.value.toLowerCase(),
            distance: parseInt(inputDistance.value),
            left: (leftRoom - parseInt(inputDistance.value)),
            top: topRoom - heightWind1 / 2,
            fill: 'transparent',
            stroke: 'blue',
            strokeWidth: 1,
            strokeUniform: true,
            width: parseInt(inputWidth.value * -1),
            height: heightWind1,
            //angle: 90, //solo para paredes E y O
            selectable: false
        });
        let seSolapa = false;

        var dataName = inputWindName.value;
        var dataDistance = inputDistance.value;
        var dataWidth = inputWidth.value;

        // Expresiones regulares para validacion
        var exp = /[A-Za-z0-9]/;
        var exp1 = /[0-9]/;

        //Límites ancho: 
        if ((wind1.width * (-1) + parseInt(inputDistance.value)) > rect.width) {

            swal("Width Error", "The width of the object is bigger than the width of the wall", "error");

        }
        else if ((inputWindName.value == "")) {
            swal("Name Validation", "You must enter a Name for the Window", "error");
        }

        // Name Validations
        else if (!exp.test(dataName)) {
            swal("Name Validation", "Special characters are not allowed in the name", "error");
        }


        // Width Validations


        else if (!exp1.test(dataWidth)) {
            swal("Width Validation", "The Special Caharcters/Letters are not allowed in the Width", "error");
        }

        else if ((inputWidth.value == "")) {
            swal("Width Validation", "You must enter a Width for the Window", "error");
        }

        else if ((inputWidth.value <= 0)) {
            swal("Width Validation", "Negative values and zero values are not allowed", "error");
        }

        // Distance Validations

        else if ((inputDistance.value == "")) {
            swal("Distance Validation", "You must enter a Distance for the Window", "error");
        }

        else if (!exp1.test(dataDistance)) {
            swal("Distance Validation", "The Special Caharcters/Letters are not allowed in the Distance", "error");
        }

        else if ((inputDistance.value <= 0)) {
            swal("Distance Validation", "Negative values and zero values are not allowed", "error");
        }

        else {

            //Condiciones Solapamiento:
            arrayOverlap.forEach(function (i) {

                if (i != rect) {

                    if (i.intersectsWithObject(wind1)) {

                        swal("Overlap Validation", "Objects Overlap", "error");
                        seSolapa = true;
                        canvas.clear().renderAll();
                        addToSelect();
                        arrayOverlap.forEach(function (x) {
                            canvas.add(x);
                        })

                    }
                }

            });
            if (!seSolapa) {
                formWindow.remove();
                canvas.clear().renderAll();
                arrayOverlap.push(wind1);
                let Ventana1 = new Ventana(inputWindName.value, inputDistance.value, inputWidth.value * -1, inputSide.value);
                MyPlano.Ventanas.push(Ventana1);
                addToSelect();
                arrayOverlap.forEach(function (x) {
                    canvas.add(x);
                })

            }
        }
    }

    // CONDICIONES VENTANA ESTE


    if (inputSide.value.toLowerCase() === "e") {
        let topRoom = 100;
        let leftRoom = 100;
        topRoom;
        leftRoom = leftRoom + roomSize.width;

        wind1 = new fabric.Rect();
        wind1.set({
            name: inputWindName.value,
            type: "window",
            side: inputSide.value.toLowerCase(),
            distance: parseInt(inputDistance.value),
            left: (leftRoom - heightWind1 / 2),
            top: topRoom + parseInt(inputDistance.value),
            fill: 'transparent',
            stroke: 'blue',
            strokeWidth: 1,
            strokeUniform: true,
            width: heightWind1,
            height: parseInt(inputWidth.value),
            //angle: 10, //solo para paredes E y O
            selectable: false
        });

        let seSolapa = false;

        var dataName = inputWindName.value;
        var dataDistance = inputDistance.value;
        var dataWidth = inputWidth.value;

        // Expresiones regulares para validacion
        var exp = /[A-Za-z0-9]/;
        var exp1 = /[0-9]/;

        //Límites ancho: 
        if ((wind1.height + parseInt(inputDistance.value)) > rect.height) {

            swal("Width Error", "The width of the object is bigger than the width of the wall", "error");

        }

        else if ((inputWindName.value == "")) {
            swal("Name Validation", "You must enter a Name for the Window", "error");
        }

        // Name Validations
        else if (!exp.test(dataName)) {
            swal("Name Validation", "Special characters are not allowed in the name", "error");
        }


        // Width Validations


        else if (!exp1.test(dataWidth)) {
            swal("Width Validation", "The Special Caharcters/Letters are not allowed in the Width", "error");
        }

        else if ((inputWidth.value == "")) {
            swal("Width Validation", "You must enter a Width for the Window", "error");
        }

        else if ((inputWidth.value <= 0)) {
            swal("Width Validation", "Negative values and zero values are not allowed", "error");
        }

        // Distance Validations

        else if ((inputDistance.value == "")) {
            swal("Distance Validation", "You must enter a Distance for the Window", "error");
        }

        else if (!exp1.test(dataDistance)) {
            swal("Distance Validation", "The Special Caharcters/Letters are not allowed in the Distance", "error");
        }

        else if ((inputDistance.value <= 0)) {
            swal("Distance Validation", "Negative values and zero values are not allowed", "error");
        }

        else {

            //Condiciones Solapamiento:
            arrayOverlap.forEach(function (i) {

                if (i != rect) {

                    if (i.intersectsWithObject(wind1)) {

                        swal("Overlap Validation", "Objects Overlap", "error");
                        seSolapa = true;
                        canvas.clear().renderAll();
                        addToSelect();
                        arrayOverlap.forEach(function (x) {
                            canvas.add(x);
                        })

                    }
                }

            });
            if (!seSolapa) {
                formWindow.remove();
                canvas.clear().renderAll();
                arrayOverlap.push(wind1);
                let Ventana1 = new Ventana(inputWindName.value, inputDistance.value, inputWidth.value * -1, inputSide.value);
                MyPlano.Ventanas.push(Ventana1);
                addToSelect();
                arrayOverlap.forEach(function (x) {
                    canvas.add(x);
                })
            }
        }
    }

    // CONDICIONES VENTANA OESTE


    if (inputSide.value.toLowerCase() === "o") {
        let topRoom = 100;
        let leftRoom = 100;
        topRoom = topRoom + roomSize.height;
        leftRoom;

        wind1 = new fabric.Rect();
        wind1.set({
            name: inputWindName.value,
            type: "window",
            side: inputSide.value.toLowerCase(),
            left: (leftRoom - heightWind1 / 2),
            distance: parseInt(inputDistance.value),
            top: topRoom - parseInt(inputDistance.value),
            fill: 'transparent',
            stroke: 'blue',
            strokeWidth: 1,
            strokeUniform: true,
            width: heightWind1,
            height: parseInt(inputWidth.value * -1),
            //angle: 10, //solo para paredes E y O
            selectable: false
        });

        let seSolapa = false;


        var dataName = inputWindName.value;
        var dataDistance = inputDistance.value;
        var dataWidth = inputWidth.value;

        // Expresiones regulares para validacion
        var exp = /[A-Za-z0-9]/;
        var exp1 = /[0-9]/;

        //Límites ancho: 
        if ((wind1.height * (-1) + parseInt(inputDistance.value)) > rect.height) {

            swal("Width Error", "The width of the object is bigger than the width of the wall", "error");
        }
        else if ((inputWindName.value == "")) {
            swal("Name Validation", "You must enter a Name for the Window", "error");
        }

        // Name Validations
        else if (!exp.test(dataName)) {
            swal("Name Validation", "Special characters are not allowed in the name", "error");
        }


        // Width Validations


        else if (!exp1.test(dataWidth)) {
            swal("Width Validation", "The Special Caharcters/Letters are not allowed in the Width", "error");
        }

        else if ((inputWidth.value == "")) {
            swal("Width Validation", "You must enter a Width for the Window", "error");
        }

        else if ((inputWidth.value <= 0)) {
            swal("Width Validation", "Negative values and zero values are not allowed", "error");
        }


        // Distance Validations

        else if ((inputDistance.value == "")) {
            swal("Distance Validation", "You must enter a Distance for the Window", "error");
        }

        else if (!exp1.test(dataDistance)) {
            swal("Distance Validation", "The Special Caharcters/Letters are not allowed in the Distance", "error");
        }

        else if ((inputDistance.value <= 0)) {
            swal("Distance Validation", "Negative values and zero values are not allowed", "error");
        }

        else {

            //Condiciones Solapamiento:
            arrayOverlap.forEach(function (i) {

                if (i != rect) {

                    if (i.intersectsWithObject(wind1)) {

                        swal("Overlap Validation", "Objects Overlap", "error");
                        seSolapa = true;
                        canvas.clear().renderAll();
                        addToSelect();
                        arrayOverlap.forEach(function (x) {
                            canvas.add(x);
                        })

                    }
                }
            });
            if (!seSolapa) {
                formWindow.remove();
                canvas.clear().renderAll();
                arrayOverlap.push(wind1);
                let Ventana1 = new Ventana(inputWindName.value, inputDistance.value, inputWidth.value * -1, inputSide.value);
                MyPlano.Ventanas.push(Ventana1);
                addToSelect();
                arrayOverlap.forEach(function (x) {
                    canvas.add(x);
                })
            }
        }


    }
    return wind1;
}


// FORMULARIO PUERTAS

function createDoorForm(Object, myplanopuertas) {
    $('.workPlace').empty();
    let div1 = document.createElement('div');
    div1.setAttribute('class', 'row');
    let div2 = document.createElement('div');
    div1.setAttribute('class', 'col-sm');
    let div3 = document.createElement('div');
    div1.setAttribute('class', 'col-sm');
    div1.appendChild(div2);
    div1.appendChild(div3);
    let formDoor = document.createElement('form');
    formDoor.setAttribute("class", "formDoor");
    workplace.appendChild(formDoor);

    let headingDoor = document.createElement('h4');
    headingDoor.innerHTML = "Door";
    formDoor.appendChild(headingDoor);
    // Label Name Puerta

    let nameWindLabel = document.createElement('label');
    nameWindLabel.innerHTML = "Name :";
    nameWindLabel.setAttribute("class", "labelsforms");
    formDoor.appendChild(nameWindLabel);

    // Input Name Puerta

    let inputDoorName = document.createElement('input');
    inputDoorName.setAttribute("type", "text");
    inputDoorName.setAttribute("class", "form-control");
    if (Object == null) {

        inputDoorName.setAttribute("placeholder", "Enter Door name");

    }
    else {

        inputDoorName.setAttribute("value", Object.name);

    }

    formDoor.appendChild(inputDoorName);

    // Laber Orientacion Puerta
    let sideLabel = document.createElement('label'); // Create Label for E-mail Field
    sideLabel.setAttribute("class", "labelsforms");

    sideLabel.innerHTML = "Room Side :";
    formDoor.appendChild(sideLabel);

    // Select Side (Orientacion) Puerta

    let inputSide = document.createElement('select');
    inputSide.setAttribute("class", "form-control");
    formDoor.appendChild(inputSide);

    let optionN = document.createElement('option');
    optionN.setAttribute('label', 'North');
    optionN.setAttribute("value", "n");
    inputSide.appendChild(optionN);

    let optionE = document.createElement('option');
    optionE.setAttribute('label', 'East');
    optionE.setAttribute("value", "e");
    inputSide.appendChild(optionE);

    let optionS = document.createElement('option');
    optionS.setAttribute('label', 'South');
    optionS.setAttribute("value", "s");
    inputSide.appendChild(optionS);

    let optionO = document.createElement('option');
    optionO.setAttribute('label', 'West');
    optionO.setAttribute("value", "o");
    inputSide.appendChild(optionO);

    // Label Distance Puerta
    let distanceLabel = document.createElement('label'); // Create Label for E-mail Field
    distanceLabel.innerHTML = "Distance:";
    distanceLabel.setAttribute("class", "labelsforms");

    formDoor.appendChild(distanceLabel);

    // Input Distance Puerta

    let inputDistance = document.createElement('input'); // Create Input Field for E-mail
    inputDistance.setAttribute("type", "number");
    inputDistance.setAttribute("step", "0.01");
    inputDistance.required = true;
    inputDistance.setAttribute("class", "form-control");



    if (Object == null) {


        inputDistance.setAttribute("placeholder", "Enter the Distance");
    }
    else {


        inputDistance.setAttribute("value", Object.distance);

    }
    // inputHeight.setAttribute("name", "demail");
    formDoor.appendChild(inputDistance);

    // Label Width Puerta
    let widthlabel = document.createElement('label'); // Create Label for Name Field
    widthlabel.innerHTML = "Width :"; // Set Field Labels
    widthlabel.setAttribute("class", "labelsforms");
    formDoor.appendChild(widthlabel);

    // Input Width Puerta

    let inputWidth = document.createElement('input'); // Create Input Field for Name
    inputWidth.setAttribute("type", "number");
    inputWidth.setAttribute("step", "0.01");
    inputWidth.required = true;
    inputWidth.setAttribute("class", "form-control");

    if (Object == null) {


        inputWidth.setAttribute("placeholder", "Enter the Width");

    }
    else {

        inputWidth.setAttribute("value", Object.width);
    }


    // inputWidth.setAttribute("name", "dname");
    formDoor.appendChild(inputWidth);

    // Label Apertura Puerta

    let doorOpeningLabel = document.createElement('label'); // Create Label for Name Field
    doorOpeningLabel.innerHTML = "Door Opening :"; // Set Field Labels
    doorOpeningLabel.setAttribute("class", "labelsforms");
    formDoor.appendChild(doorOpeningLabel);

    // Select Apertura Puerta

    let doorOpeningInput = document.createElement('select'); // Create Input Field for Name
    doorOpeningInput.setAttribute("class", "form-control");
    formDoor.appendChild(doorOpeningInput);

    let optionOutside = document.createElement('option');
    optionOutside.setAttribute('value', true);
    optionOutside.setAttribute('label', 'Outside');
    doorOpeningInput.appendChild(optionOutside);

    let optionInside = document.createElement('option');
    optionInside.setAttribute('value', '');
    optionInside.setAttribute('label', 'Inside');
    doorOpeningInput.appendChild(optionInside);
    // Label Eje Puerta
    let doorAxisLabel = document.createElement('label'); // Create Label for Name Field
    doorAxisLabel.innerHTML = "Door Axis :"; // Set Field Labels
    doorAxisLabel.setAttribute("class", "labelsforms");
    formDoor.appendChild(doorAxisLabel);

    // Input Eje Puerta
    let doorAxisInput = document.createElement('select'); // Create Input Field for Name
    doorAxisInput.setAttribute("class", "form-control");
    formDoor.appendChild(doorAxisInput);

    let optionLeft = document.createElement('option');
    optionLeft.setAttribute('value', '');
    optionLeft.setAttribute('label', 'Left');
    doorAxisInput.appendChild(optionLeft);

    let optionRight = document.createElement('option');
    optionRight.setAttribute('value', true);
    optionRight.setAttribute('label', 'Right');
    doorAxisInput.appendChild(optionRight);


    let messagebreak = document.createElement('br');
    formDoor.appendChild(messagebreak);

    // Boton Crear Puerta
    let botonCreate = document.createElement('button'); // Append Button
    botonCreate.setAttribute("type", "button");
    botonCreate.setAttribute("class", "btn btn-outline-success");
    // submitelement.setAttribute("name", "dsubmit");
    botonCreate.innerHTML = "Create";
    formDoor.appendChild(botonCreate);

    // Boton Borrar Puerta
    let botonDelete = document.createElement('button'); // Append Button
    botonDelete.setAttribute("type", "button");
    botonDelete.setAttribute("class", "btn btn-outline-danger")
    // submitelement.setAttribute("name", "dsubmit");
    botonDelete.innerHTML = "Delete";
    formDoor.appendChild(botonDelete);
    let rect = Object;

    // FINAL FORMULARIO DE LAS PUERTAS


    // CREAR PUERTAS
    botonCreate.addEventListener("click", function () {

        door1 = createDoor(inputDoorName, inputDistance, inputSide, doorOpeningInput, doorAxisInput, inputWidth, formDoor);

    })

    // BORRAR PUERTAS

    botonDelete.addEventListener("click", function () {

        formDoor.remove();
        canvas.remove(door1);
        addToSelect();
      
    })
}


// ESPECIFICACION POR PAREDES.

function createDoor(inputDoorName, inputDistance, inputSide, doorOpeningInput, doorAxisInput, inputWidth, formDoor) {

    let heightDoor = 10;
    let ejeX = Boolean(doorOpeningInput.value);
    let ejeY = Boolean(doorAxisInput.value);
    let roomSize = canvas._objects.find(x => x.type == "room");
    let door1;

    // PARED NORTE:

    if (inputSide.value.toLowerCase() === "n") {

        let topRoom = 100;
        let leftRoom = 100;

        let x = parseInt(inputWidth.value);

        if (doorOpeningInput.value == false) {
            topRoom = topRoom - heightDoor / 2;
        } else {
            topRoom = topRoom - x - heightDoor / 2;
        }

        door1 = new fabric.Path('M 0 0 L 0 ' + x + ' Q ' + x + ',' + x + ',' + x + ',0,0,' + x + ' L ' + x + ' 0z + M 0 0 L 0 ' + x + ' L -10 ' + x + ' L -10 0Z');
        door1.set({
            name: inputDoorName.value,
            left: leftRoom + parseInt(inputDistance.value) + x + 1,
            top: topRoom,
            type: "door",
            distance: parseInt(inputDistance.value),
            side: inputSide.value.toLowerCase(),
            fill: 'transparent',
            stroke: 'brown',
            perPixelTargetFind: true,
            strokeWidth: 1,
            strokeUniform: true,
            angle: 90,
            flipX: ejeX, // apertura FUERA
            flipY: ejeY, // apertura DCHA
            selectable: false
        });

        let seSolapa = false;

        var dataName = inputDoorName.value;
        var dataDistance = inputDistance.value;
        var dataWidth = inputWidth.value;

        // Expresiones regulares para validacion
        var exp = /[A-Za-z0-9]/;
        var exp1 = /[0-9]/;


        //Límites ancho pared: 

        if ((parseInt(inputDistance.value) + parseInt(inputWidth.value)) > rect.width) {

            swal("Width Error", "The width of the object is bigger than the width of the wall", "error");
        }

        // Name Validations

        else if ((inputDoorName.value == "")) {
            swal("Name Validation", "You must enter a Name for the Door", "error");
        }


        else if (!exp.test(dataName)) {
            swal("Name Validation", "Special characters are not allowed in the name", "error");
        }


        // Width Validations

        else if ((inputWidth.value == "")) {
            swal("Width Validation", "You must enter a Width for the Door", "error");
        }

        else if (!exp1.test(dataWidth)) {
            swal("Width Validation", "The Special Caharcters/Letters are not allowed in the Width", "error");
        }

        else if ((inputWidth.value <= 0)) {
            swal("Width Validation", "Negative values and zero values are not allowed", "error");
        }



        // Distance Validations

        else if ((inputDistance.value == "")) {
            swal("Distance Validation", "You must enter a Distance for the Door", "error");
        }

        else if (!exp1.test(dataDistance)) {
            swal("Distance Validation", "The Special Caharcters/Letters are not allowed in the Distance", "error");
        }

        else if ((inputDistance.value <= 0)) {
            swal("Distance Validation", "Negative values and zero values are not allowed", "error");
        }


        else {

            //Condiciones Solapamiento:
            arrayOverlap.forEach(function (i) {

                if (i != rect) {

                    if (i.intersectsWithObject(door1)) {

                        swal("Overlap Validation", "Objects Overlap", "error");
                        seSolapa = true;
                        canvas.clear().renderAll();
                        addToSelect();
                        arrayOverlap.forEach(function (x) {
                            canvas.add(x);
                        })

                    }
                }

            });
            if (!seSolapa) {
                formDoor.remove();
                canvas.clear().renderAll();
                arrayOverlap.push(door1);
                let Puerta1 = new Puerta(inputDoorName.value, inputDistance.value, inputWidth.value * -1, inputSide.value, Boolean(doorAxisInput.value), Boolean(doorOpeningInput.value));
                MyPlano.Puertas.push(Puerta1);
                addToSelect();
                arrayOverlap.forEach(function (x) {
                    canvas.add(x);
                })
            }
        }
    }

    // ESPECIFICACION POR PAREDES. PARED ESTE

    if (inputSide.value.toLowerCase() === "e") {
        let topRoom = 100;
        let leftRoom = 100;
        topRoom;
        leftRoom = leftRoom + roomSize.width;

        let x = parseInt(inputWidth.value);

        if (doorOpeningInput.value == false) {
            leftRoom = leftRoom + heightDoor / 2 + 1;
        } else {
            leftRoom = leftRoom + x + heightDoor / 2 + 1;
        }

        door1 = new fabric.Path('M 0 0 L 0 ' + x + ' Q ' + x + ',' + x + ',' + x + ',0,0,' + x + ' L ' + x + ' 0z + M 0 0 L 0 ' + x + ' L -10 ' + x + ' L -10 0Z');
        door1.set({
            name: inputDoorName.value,
            left: leftRoom,
            distance: parseInt(inputDistance.value),
            top: topRoom + parseInt(inputDistance.value) + x + 1,
            type: "door",
            side: inputSide.value.toLowerCase(),
            fill: 'transparent',
            stroke: 'brown',
            perPixelTargetFind: true,
            strokeWidth: 1,
            strokeUniform: true,
            angle: 180,
            flipX: ejeX, // apertura FUERA
            flipY: ejeY, // apertura DCHA
            selectable: false
        });

        let seSolapa = false;
        var dataName = inputDoorName.value;
        var dataDistance = inputDistance.value;
        var dataWidth = inputWidth.value;

        // Expresiones regulares para validacion
        var exp = /[A-Za-z0-9]/;
        var exp1 = /[0-9]/;


        //Límites ancho pared: 

        if ((parseInt(inputDistance.value) + parseInt(inputWidth.value)) > rect.width) {

            swal("Width Error", "The width of the object is bigger than the width of the wall", "error");
        }

        // Name Validations

        else if ((inputDoorName.value == "")) {
            swal("Name Validation", "You must enter a Name for the Door", "error");
        }


        else if (!exp.test(dataName)) {
            swal("Name Validation", "Special characters are not allowed in the name", "error");
        }


        // Width Validations

        else if ((inputWidth.value == "")) {
            swal("Width Validation", "You must enter a Width for the Door", "error");
        }

        else if (!exp1.test(dataWidth)) {
            swal("Width Validation", "The Special Caharcters/Letters are not allowed in the Width", "error");
        }

        else if ((inputWidth.value <= 0)) {
            swal("Width Validation", "Negative values and zero values are not allowed", "error");
        }



        // Distance Validations

        else if ((inputDistance.value == "")) {
            swal("Distance Validation", "You must enter a Distance for the Door", "error");
        }

        else if (!exp1.test(dataDistance)) {
            swal("Distance Validation", "The Special Caharcters/Letters are not allowed in the Distance", "error");
        }

        else if ((inputDistance.value <= 0)) {
            swal("Distance Validation", "Negative values and zero values are not allowed", "error");
        }

        else {

            //Condiciones Solapamiento:
            arrayOverlap.forEach(function (i) {

                if (i != rect) {

                    if (i.intersectsWithObject(door1)) {

                        swal("Overlap Validation", "Objects Overlap", "error");
                        seSolapa = true;
                        canvas.clear().renderAll();
                        addToSelect();
                        arrayOverlap.forEach(function (x) {
                            canvas.add(x);
                        })

                    }
                }

            });
            if (!seSolapa) {
                formDoor.remove();
                canvas.clear().renderAll();
                arrayOverlap.push(door1);
                let Puerta1 = new Puerta(inputDoorName.value, inputDistance.value, inputWidth.value * -1, inputSide.value, Boolean(doorAxisInput.value), Boolean(doorOpeningInput.value));
                MyPlano.Puertas.push(Puerta1);
                addToSelect();
                arrayOverlap.forEach(function (x) {
                    canvas.add(x);
                })

            }
        }
    }

    // ESPECIFICACION POR PAREDES . PUERTAS PARED SUR

    if (inputSide.value.toLowerCase() === "s") {
        let topRoom = 100;
        let leftRoom = 100;
        topRoom = topRoom + roomSize.height;
        leftRoom = leftRoom + roomSize.width;

        let x = parseInt(inputWidth.value);

        if (doorOpeningInput.value == false) {
            topRoom = topRoom + heightDoor / 2 + 1;
        } else {
            topRoom = topRoom + x + heightDoor / 2 + 1;
        }

        door1 = new fabric.Path('M 0 0 L 0 ' + x + ' Q ' + x + ',' + x + ',' + x + ',0,0,' + x + ' L ' + x + ' 0z + M 0 0 L 0 ' + x + ' L -10 ' + x + ' L -10 0Z');
        door1.set({
            name: inputDoorName.value,
            left: leftRoom - parseInt(inputDistance.value) - x,
            top: topRoom,
            type: "door",
            side: inputSide.value.toLowerCase(),
            fill: 'transparent',
            stroke: 'brown',
            distance: parseInt(inputDistance.value),
            perPixelTargetFind: true,
            strokeWidth: 1,
            strokeUniform: true,
            angle: 270,
            flipX: ejeX, // apertura FUERA
            flipY: ejeY, // apertura DCHA
            selectable: false
        });

        let seSolapa = false;

        var dataName = inputDoorName.value;
        var dataDistance = inputDistance.value;
        var dataWidth = inputWidth.value;

        // Expresiones regulares para validacion
        var exp = /[A-Za-z0-9]/;
        var exp1 = /[0-9]/;


        //Límites ancho pared: 

        if ((parseInt(inputDistance.value) + parseInt(inputWidth.value)) > rect.width) {

            swal("Width Error", "The width of the object is bigger than the width of the wall", "error");
        }

        // Name Validations

        else if ((inputDoorName.value == "")) {
            swal("Name Validation", "You must enter a Name for the Door", "error");
        }


        else if (!exp.test(dataName)) {
            swal("Name Validation", "Special characters are not allowed in the name", "error");
        }


        // Width Validations

        else if ((inputWidth.value == "")) {
            swal("Width Validation", "You must enter a Width for the Door", "error");
        }

        else if (!exp1.test(dataWidth)) {
            swal("Width Validation", "The Special Caharcters/Letters are not allowed in the Width", "error");
        }

        else if ((inputWidth.value <= 0)) {
            swal("Width Validation", "Negative values and zero values are not allowed", "error");
        }



        // Distance Validations

        else if ((inputDistance.value == "")) {
            swal("Distance Validation", "You must enter a Distance for the Door", "error");
        }

        else if (!exp1.test(dataDistance)) {
            swal("Distance Validation", "The Special Caharcters/Letters are not allowed in the Distance", "error");
        }

        else if ((inputDistance.value <= 0)) {
            swal("Distance Validation", "Negative values and zero values are not allowed", "error");
        }
        else {

            //Condiciones Solapamiento:
            arrayOverlap.forEach(function (i) {

                if (i != rect) {

                    if (i.intersectsWithObject(door1)) {

                        swal("Overlap Validation", "Objects Overlap", "error");
                        seSolapa = true;
                        canvas.clear().renderAll();
                        addToSelect();
                        arrayOverlap.forEach(function (x) {
                            canvas.add(x);
                        })

                    }
                }

            });
            if (!seSolapa) {
                formDoor.remove();
                canvas.clear().renderAll();
                arrayOverlap.push(door1);
                let Puerta1 = new Puerta(inputDoorName.value, inputDistance.value, inputWidth.value * -1, inputSide.value, Boolean(doorAxisInput.value), Boolean(doorOpeningInput.value));
                MyPlano.Puertas.push(Puerta1);
                addToSelect();
                arrayOverlap.forEach(function (x) {
                    canvas.add(x);
                })
            }
        }

    }

    // ESPECIFICACION POR PAREDES . PUERTAS DEL LADO OESTE

    if (inputSide.value.toLowerCase() === "o") {
        let topRoom = 100;
        let leftRoom = 100;
        topRoom = topRoom + roomSize.height;
        leftRoom;

        let x = parseInt(inputWidth.value);

        if (doorOpeningInput.value == false) {
            leftRoom = leftRoom - heightDoor / 2;
        } else {
            leftRoom = leftRoom - x - heightDoor / 2;
        }

        door1 = new fabric.Path('M 0 0 L 0 ' + x + ' Q ' + x + ',' + x + ',' + x + ',0,0,' + x + ' L ' + x + ' 0z + M 0 0 L 0 ' + x + ' L -10 ' + x + ' L -10 0Z');
        door1.set({
            name: inputDoorName.value,
            left: leftRoom,
            top: topRoom - parseInt(inputDistance.value) - x,
            type: "door",
            side: inputSide.value.toLowerCase(),
            fill: 'transparent',
            distance: parseInt(inputDistance.value),
            stroke: 'brown',
            perPixelTargetFind: true,
            strokeWidth: 1,
            strokeUniform: true,
            // angle: 0,
            flipX: ejeX, // apertura FUERA
            flipY: ejeY, // apertura DCHA
            selectable: false
        });

        let seSolapa = false;

        var dataName = inputDoorName.value;
        var dataDistance = inputDistance.value;
        var dataWidth = inputWidth.value;

        // Expresiones regulares para validacion
        var exp = /[A-Za-z0-9]/;
        var exp1 = /[0-9]/;


        //Límites ancho pared: 

        if ((parseInt(inputDistance.value) + parseInt(inputWidth.value)) > rect.width) {

            swal("Width Error", "The width of the object is bigger than the width of the wall", "error");
        }

        // Name Validations

        else if ((inputDoorName.value == "")) {
            swal("Name Validation", "You must enter a Name for the Door", "error");
        }


        else if (!exp.test(dataName)) {
            swal("Name Validation", "Special characters are not allowed in the name", "error");
        }


        // Width Validations

        else if ((inputWidth.value == "")) {
            swal("Width Validation", "You must enter a Width for the Door", "error");
        }

        else if (!exp1.test(dataWidth)) {
            swal("Width Validation", "The Special Caharcters/Letters are not allowed in the Width", "error");
        }

        else if ((inputWidth.value <= 0)) {
            swal("Width Validation", "Negative values and zero values are not allowed", "error");
        }



        // Distance Validations

        else if ((inputDistance.value == "")) {
            swal("Distance Validation", "You must enter a Distance for the Door", "error");
        }

        else if (!exp1.test(dataDistance)) {
            swal("Distance Validation", "The Special Caharcters/Letters are not allowed in the Distance", "error");
        }

        else if ((inputDistance.value <= 0)) {
            swal("Distance Validation", "Negative values and zero values are not allowed", "error");
        }
        else {

            //Condiciones Solapamiento:
            arrayOverlap.forEach(function (i) {

                if (i != rect) {

                    if (i.intersectsWithObject(door1)) {

                        swal("Overlap Validation", "Objects Overlap", "error");
                        seSolapa = true;
                        canvas.clear().renderAll();
                        addToSelect();
                        arrayOverlap.forEach(function (x) {
                            canvas.add(x);
                        })

                    }
                }

            });
            if (!seSolapa) {
                formDoor.remove();
                canvas.clear().renderAll();
                arrayOverlap.push(door1);
                let Puerta1 = new Puerta(inputDoorName.value, inputDistance.value, inputWidth.value * -1, inputSide.value, Boolean(doorAxisInput.value), Boolean(doorOpeningInput.value));
                MyPlano.Puertas.push(Puerta1);
                addToSelect();
                arrayOverlap.forEach(function (x) {
                    canvas.add(x);
                })
            }
        }
    }
    return door1;
}

function Borrar(Object) {
    canvas.remove(Object);
}

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

// IMPORTANTE !!!!!
// Eliminacion de la primera posicion de las Ventanas y Puertas de MyPlano. Es necesitario eliminar
// dichas ventanas o puertas porque en dicha posicion siempre entran a NULL y provoca error

if (MyPlano.Ventanas[0] == null) {

    MyPlano.Ventanas.splice(0, 1);
}
if (MyPlano.Puertas[0] == null) {

    MyPlano.Puertas.splice(0, 1);
}

//----------------------------------------------------------------------------------------------

// Boton Guardar Plano

//  Procedemos a pasar los objetos que tenemos en la variable "Postplano" a una cadena de texto JSON
// esta parte la realizamos con la siguiente instruccion "var postPlano = JSON.stringify(MyPlano);"
// Una vez que tenemos los objetos en texto plano creamos mediante el metodo "CreateRootObjectPlano" 
// que se encuentra en el controlador de "Planos" los objetos con sus atributos que iran a parar a la
// base de datos del Visual Studio.
//Es decir una vez que nos vienen el texto plano en JSON de este se sacan los objetos recintos diferentes 
// que se han generado en el canvas y las ventanas y puertas que se han generado en el mismo.
// Generandose en el proceso 4 modelos diferentes "Plano, Puerta , Recinto y Ventana " (Modelos en carpeta
// "Models")
// Para poder pasar los datos en texto plano al metodo ,anteriormente citado, del controlador de Planos
// es necesario de un modelo raiz denominado "RootObject" . Dicho modelo tiene una clase "RootObject1" 
// la cual posee dentro las clases "Recinto, Ventanas y Puertas" y asu vez una clase "RootObject" definida
// por los atributos "userId" , "Nombre", Objeto Recinta , List<Ventana> Ventanas,  List<Puerta> Puertas


let boton = document.getElementById("GuardarPlano");
boton.setAttribute("boton", "btn btn-info");
boton.addEventListener('click', function () {
    var postPlano = JSON.stringify(MyPlano);
    $.ajax({
        url: '/Planos/CreateRootObjectPlano',
        dataType: 'json',
        type: 'POST',
        data: postPlano,
        async: false,
        contentType: 'application/json; charset=utf-8',
        traditional: true,
        success: function (response) {
            console.log('ok');
        },
        error: function (response) {
            console.log('error');
        }
    });
})
