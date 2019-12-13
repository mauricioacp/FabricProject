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


console.log(userId);
let MyPlano = new Plano();
MyPlano.userId = userId;
let MiArray_Ventanas = [];
let MiArrat_Puertas = [];
let canvas = new fabric.Canvas('canvas');
let ctx = canvas.getContext('2d');
let workplace = document.getElementsByClassName("workPlace")[0];
let room = document.getElementById("room");
let arrayOverlap = [];


room.addEventListener("click", function () {
    $('.workPlace').empty();

  
    let formRoom = document.createElement('form'); // Create New Element Form
    // createform.setAttribute("action", ""); // Setting Action Attribute on Form
    // createform.setAttribute("method", "post"); // Setting Method Attribute on Form
    workplace.appendChild(formRoom);
    let headingRoom = document.createElement('h3'); // Heading of Form
    headingRoom.innerHTML = "Room";
    headingRoom.setAttribute("class", "text-info");
    formRoom.appendChild(headingRoom);
    let line = document.createElement('hr'); // Giving Horizontal Row After Heading
    formRoom.appendChild(line);
    let linebreak = document.createElement('br');
    formRoom.appendChild(linebreak);


    let Recinto_name_label = document.createElement('label'); // Create Label for E-mail Field
    Recinto_name_label.innerHTML = "Name:";
    Recinto_name_label.setAttribute("class", "text-info");
    formRoom.appendChild(Recinto_name_label);
    let recinto_name = document.createElement('input'); // Create Input Field for E-mail
    recinto_name.setAttribute("type", "text");
    recinto_name.setAttribute("class", "form-control");
    recinto_name.setAttribute("placeholder", "Enter the Name");
    recinto_name.setAttribute("id", "recintoname");
    formRoom.appendChild(recinto_name);
    let namebreak = document.createElement('br');
    formRoom.appendChild(namebreak);

    let widthlabel = document.createElement('label'); // Create Label for Name Field
    widthlabel.innerHTML = "Width :"; // Set Field Labels
    formRoom.appendChild(widthlabel);
    let inputWidth = document.createElement('input'); // Create Input Field for Name
    inputWidth.setAttribute("type", "text");
    inputWidth.setAttribute("class", "form-control");
    inputWidth.setAttribute("placeholder", "Enter the Width")
    // inputWidth.setAttribute("name", "dname");
    formRoom.appendChild(inputWidth);
    let linebreak1 = document.createElement('br');
    formRoom.appendChild(linebreak1);
    let heightlabel = document.createElement('label'); // Create Label for E-mail Field
    heightlabel.innerHTML = "Height :";
    formRoom.appendChild(heightlabel);
    let inputHeight = document.createElement('input'); // Create Input Field for E-mail
    inputHeight.setAttribute("type", "text");
    inputHeight.setAttribute("class", "form-control");
    inputHeight.setAttribute("placeholder","Enter the Height");
    // inputHeight.setAttribute("name", "demail");
    formRoom.appendChild(inputHeight);
    let messagebreak = document.createElement('br');
    formRoom.appendChild(messagebreak);
    let botonCreate = document.createElement('button'); // Append Button
    botonCreate.setAttribute("class", "btn btn-outline-success");
    botonCreate.setAttribute("type", "button");
    botonCreate.setAttribute("id", "create");
    // submitelement.setAttribute("name", "dsubmit");
    botonCreate.innerHTML = "Create";
    formRoom.appendChild(botonCreate);
    let botonCancel = document.createElement('button'); // Append Button
    botonCancel.setAttribute("type", "button");
    botonCancel.setAttribute("class", "btn btn-outline-danger");
    // submitelement.setAttribute("name", "dsubmit");
    botonCancel.innerHTML = "Cancel";
    formRoom.appendChild(botonCancel);

    botonCreate.addEventListener("click", function () {
        let topRoom = 100;
        let leftRoom = 50;
        rect = new fabric.Rect({
            left: leftRoom,
            top: topRoom,
            fill: 'transparent',
            stroke: 'solid black',
            strokeWidth: 2,
            strokeUniform: true,
            width: parseInt(inputWidth.value),
            height: parseInt(inputHeight.value),
            selectable: false
            // hasControls: false,
            // lockMovementX: true,
            // lockScalingX: true
            // lockUniScaling: true,
            // lockRotation: true,
            // selectable: false
        });

        function literal() {
            var m = document.getElementById("recintoname").value;
            var expreg = /[A-Za-z0-9]/;

            if (expreg.test(m))
                return true;
            else
                return false;
        }
        //Límites ancho: 
        if (rect.width > 350 || rect.height > 300) {
            

            swal("Size Validation", "The size of the enclosure is bigger than the plane", "error");

        }

       
        else if (literal() == true) 
        {

            swal("Name Validation", "Los caracteres", "error");

        }
        else if (parseInt(recinto_name.value) || (recinto_name.value == ""))
        {
            swal("Name Validation", "You must enter a Name for the Room", "error");
        }

        else if (!parseInt(inputWidth.value) || (parseInt(inputWidth.value <=0)))
        {
            swal("Width Validation", "You must enter a Number for the Width", "error");
        }

        else if (!parseInt(inputHeight.value) || (parseInt(inputHeight.value <= 0)))
        {
            swal("Height Validation", "You must enter a Number for the Height ", "error");
        } 

            else {

                canvas.add(rect);

                let recinto1 = new Recinto(recinto_name.value, inputHeight.value, inputWidth.value);
                MyPlano.Recinto = recinto1;
            }

        })

    
    botonCancel.addEventListener("click", function () {
        formRoom.remove();
    })


    let wind = document.getElementById("window");

    wind.addEventListener("click", function () {
        $('.workPlace').empty();
        let formWindow = document.createElement('form'); // Create New Element Form
        // createform.setAttribute("action", ""); // Setting Action Attribute on Form
        // createform.setAttribute("method", "post"); // Setting Method Attribute on Form
        workplace.appendChild(formWindow);
        let headingWindow = document.createElement('h3'); // Heading of Form
        headingWindow.innerHTML = "Window";
        headingWindow.setAttribute("class", "text-info");
        formWindow.appendChild(headingWindow);
        let line = document.createElement('hr'); // Giving Horizontal Row After Heading
        formWindow.appendChild(line);
        let linebreak = document.createElement('br');
        formWindow.appendChild(linebreak);
        let window_name_label = document.createElement('label'); // Create Label for E-mail Field
        window_name_label.innerHTML = "Name:";
        formWindow.appendChild(window_name_label);
        let window_name = document.createElement('input'); // Create Input Field for E-mail
        window_name.setAttribute("type", "text");
        window_name.setAttribute("class", "form-control");
        window_name.setAttribute("placeholder", "Enter the name of the Window");
        formWindow.appendChild(window_name);
        let namebreakWindow = document.createElement('br');
        formWindow.appendChild(namebreakWindow);
        let sideLabel = document.createElement('label'); // Create Label for E-mail Field
        sideLabel.innerHTML = "Lado Pared (NSEO) :";
        formWindow.appendChild(sideLabel);
        let inputSide = document.createElement('select');
        inputSide.setAttribute("class", "form-control");
        formWindow.appendChild(inputSide);
        let optionN = document.createElement('option');
        optionN.setAttribute('label', 'Norte');
        optionN.setAttribute("value", "n");
        inputSide.appendChild(optionN);
        let optionE = document.createElement('option');
        optionE.setAttribute('label', 'Este');
        optionE.setAttribute("value", "e");
        inputSide.appendChild(optionE);
        let optionS = document.createElement('option');
        optionS.setAttribute('label', 'Sur');
        optionS.setAttribute("value", "s");
        inputSide.appendChild(optionS);
        let optionO = document.createElement('option');
        optionO.setAttribute('label', 'Oeste');
        optionO.setAttribute("value", "o");
        inputSide.appendChild(optionO);
        let messagebreak = document.createElement('br');
        formWindow.appendChild(messagebreak);
        let distanceLabel = document.createElement('label'); // Create Label for E-mail Field
        distanceLabel.innerHTML = "Distancia:";
        formWindow.appendChild(distanceLabel);
        let inputDistance = document.createElement('input'); // Create Input Field for E-mail
        inputDistance.setAttribute("type", "text");
        inputDistance.setAttribute("class", "form-control");
        inputDistance.setAttribute("placeholder", "Enter the Distance");
        // inputHeight.setAttribute("name", "demail");
        formWindow.appendChild(inputDistance);
        let messagebreak1 = document.createElement('br');
        formWindow.appendChild(messagebreak1);
        let widthlabel = document.createElement('label'); // Create Label for Name Field
        widthlabel.innerHTML = "Width :"; // Set Field Labels
        formWindow.appendChild(widthlabel);
        let inputWidth = document.createElement('input'); // Create Input Field for Name
        inputWidth.setAttribute("type", "text");
        inputWidth.setAttribute("class", "form-control");
        inputWidth.setAttribute("placeholder", "Enter the Width");
        // inputWidth.setAttribute("name", "dname");
        formWindow.appendChild(inputWidth);
        let linebreak1 = document.createElement('br');
        formWindow.appendChild(linebreak1);
        let botonCreate = document.createElement('button'); // Append Button
        botonCreate.setAttribute("type", "button");
        botonCreate.setAttribute("class", "btn btn-outline-success");
        // submitelement.setAttribute("name", "dsubmit");
        botonCreate.innerHTML = "Create";
        formWindow.appendChild(botonCreate);
        let botonCancel = document.createElement('button'); // Append Button
        botonCancel.setAttribute("type", "button");
        botonCancel.setAttribute("class", "btn btn-outline-danger");
        // submitelement.setAttribute("name", "dsubmit");
        botonCancel.innerHTML = "Cancel";
        formWindow.appendChild(botonCancel);


        //Creating select options from local storage

        //let Select_Windows_Label = document.createElement('label'); // Create Label for E-mail Field
        //Select_Windows_Label.innerHTML = "Windows in Storage:";
        //formWindow.appendChild(Select_Windows_Label);
        //let windows_in_storage = document.createElement('select');
        //formWindow.appendChild(windows_in_storage);


        //let window_from_LS = localStorage.getItem('Window');
        // var optNull = document.createElement('option');
        // optNull.setAttribute('label', '');
        // optNull.setAttribute("value", "");
        // windows_in_storage.appendChild(optNull);

        // let myDom_inStorage = JSON.parse(localStorage.getItem('Window '));

        // let myDom_inStorage = JSON.parse(localStorage.getItem());

        // for (let i = 0; i < localStorage.length; i++) {


        //     var opt = document.createElement('option');
        //     // opt.setAttribute('label', 'window');
        //     var x = localStorage.key(i);
        //     opt.setAttribute('label', x);
        //     opt.value = myDom_inStorage;

        //     opt.innerHTML += x;
        //     console.log(opt.value)
        //     windows_in_storage.appendChild(opt);
        // }

        // var found = array.find(function (element) {
        //     return element > 20;
        // });

        // End-Creating select options from local storage

        botonCreate.addEventListener("click", function () {
            let heightWind1 = 10;
            if (inputSide.value.toLowerCase() === "n") {
                topRoom = 100;
                leftRoom = 50;
                let wind1 = new fabric.Rect();
                wind1.set({

                    left: leftRoom + parseInt(inputDistance.value),
                    top: topRoom - heightWind1 / 2,
                    fill: 'transparent',
                    stroke: 'black',
                    strokeWidth: 2,
                    strokeUniform: true,
                    width: parseInt(inputWidth.value),
                    height: heightWind1,
                    //angle: 90, //solo para paredes E y O
                    selectable: false
                });
                let seSolapa = false;
                //Límites ancho: 
                if ((wind1.width + parseInt(inputDistance.value)) > rect.width) {
                    swal("Overlap Error", "The object entered overlaps with the previous", "error");
                }
                else if (parseInt(window_name.value) || (window_name.value == "")) {
                    swal("Name Validation", "You must enter a Name for the Window", "error");
                }
                else if (!parseInt(inputWidth.value))
                {
                    swal("Width Validation", "You must enter a number for the Width", "error");
                }
                else if (!parseInt(inputHeight.value))
                {
                    swal("Height Validation", "You must enter a number for the Height", "error");
                }
                else if (!parseInt(inputDistance.value))
                {
                    swal("Distance Validation", "You must enter a number for the Distance", "error");
                }

                else {
                    //Condiciones Solapamiento:
                    arrayOverlap.forEach(function (i) {
                        if (i.intersectsWithObject(wind1)) {
                            swal("Overlap Error", "The object entered overlaps with the previous", "error");
                            seSolapa = true;
                        }
                    });
                    if (!seSolapa) {


                                arrayOverlap.push(wind1);

                                
                                let Ventana1 = new Ventana(window_name.value, inputDistance.value, inputWidth.value * -1, inputSide.value);

                                MyPlano.Ventanas.push(Ventana1);
                                MiArray_Ventanas.push(Ventana1);
                                canvas.add(wind1);
                            
                    }
                }
            }

            if (inputSide.value.toLowerCase() === "s") {
                topRoom = 100 + rect.height;
                leftRoom = 50 + rect.width;
                let wind1 = new fabric.Rect();
                wind1.set({
                    left: (leftRoom - parseInt(inputDistance.value)),
                    top: topRoom - heightWind1 / 2,
                    fill: 'transparent',
                    stroke: 'black',
                    strokeWidth: 1,
                    strokeUniform: true,
                    width: parseInt(inputWidth.value * -1),
                    height: heightWind1,
                    //angle: 90, //solo para paredes E y O
                    selectable: false
                });
                let seSolapa = false;
                if ((wind1.width * (-1) + parseInt(inputDistance.value)) > rect.width)
                {
                    swal("Width Error", "The width of the object is bigger than the width of the wall", "error");

                }

                else if (parseInt(window_name.value) || (window_name.value == "")) {
                    swal("Name Validation", "You must enter a Name for the Window", "error");
                }

                else if (parseInt(input)) {
                    swal("Width Validation", "You must enter a number for the Width", "error");

                }
            
                else if (!parseInt(inputWidth.value))
                {
                    swal("Width Validation", "You must enter a number for the Width", "error");

                 }
                else if (!parseInt(inputHeight.value))
                {
                swal("Height Validation", "You must enter a number for the Height", "error");
                }
                else if (!parseInt(inputDistance.value))
                {
                swal("Distance Validation", "You must enter a number for the Distance", "error");
                }

                else {
                    //Condiciones Solapamiento:
                    arrayOverlap.forEach(function (i) {
                        if (i.intersectsWithObject(wind1)) {
                            swal("Overlap Error", "The object entered overlaps with the previous", "error");
                            seSolapa = true;
                        }
                    });
                    if (!seSolapa) {
                  
                        arrayOverlap.push(wind1);
                        let Ventana2 = new Ventana(window_name.value, inputDistance.value, inputWidth.value * -1, inputSide.value);

                        MyPlano.Ventanas.push(Ventana2);
                        MiArray_Ventanas.push(Ventana2);

                        canvas.add(wind1);
                    }
                }
            }

            if (inputSide.value.toLowerCase() === "e") {
                topRoom = 100;
                leftRoom = 50 + rect.width;
                let wind1 = new fabric.Rect();
                wind1.set({
                    left: (leftRoom - heightWind1 / 2),
                    top: topRoom + parseInt(inputDistance.value),
                    fill: 'transparent',
                    stroke: 'black',
                    strokeWidth: 2,
                    strokeUniform: true,
                    width: heightWind1,
                    height: parseInt(inputWidth.value),
                    //angle: 10, //solo para paredes E y O
                    selectable: false
                });
                let seSolapa = false;
                //Límites ancho: 
                if ((wind1.height + parseInt(inputDistance.value)) > rect.height)
                {
                    swal("Width Error", "The width of the object is bigger than the width of the wall", "error");
                }
                else if (parseInt(window_name.value) || (window_name.value == "")) {
                    swal("Name Validation", "You must enter a Name for the Window", "error");
                }
                else if (!parseInt(inputWidth.value))
                {
                    swal("Width Validation", "You must enter a number for the Width", "error");
                }
                else if (!parseInt(inputHeight.value))
                {
                    swal("Height Validation", "You must enter a number for the Height", "error");
                }
                else if (!parseInt(inputDistance.value))
                {
                    swal("Distance Validation", "You must enter a number for the Distance", "error");
                }
                else {
                    //Condiciones Solapamiento:
                    arrayOverlap.forEach(function (i) {
                        if (i.intersectsWithObject(wind1)) {
                            swal("Overlap Error", "The object entered overlaps with the previous", "error");
                            seSolapa = true;
                        }
                    });
                    if (!seSolapa) {
                
                        arrayOverlap.push(wind1);
                        let Ventana3 = new Ventana(window_name.value, inputDistance.value, inputWidth.value * -1, inputSide.value);

                        MyPlano.Ventanas.push(Ventana3);
                        MiArray_Ventanas.push(Ventana3);


                        canvas.add(wind1);
                    }
                }
            }


            if (inputSide.value.toLowerCase() === "o") {
                topRoom = 100 + rect.height;
                leftRoom = 50;
                let wind1 = new fabric.Rect();
                wind1.set({
                    left: (leftRoom - heightWind1 / 2),
                    top: topRoom - parseInt(inputDistance.value),
                    fill: 'transparent',
                    stroke: 'black',
                    strokeWidth: 2,
                    strokeUniform: true,
                    width: heightWind1,
                    height: parseInt(inputWidth.value * -1),
                    //angle: 10, //solo para paredes E y O
                    selectable: false
                });
                let seSolapa = false;

                //Límites ancho: 
                if ((wind1.height * (-1) + parseInt(inputDistance.value)) > rect.height)
                {

                    swal("Width Error", "The width of the object is bigger than the width of the wall", "error");

                }

                else if (parseInt(window_name.value) || (window_name.value == "")) {
                    swal("Name Validation", "You must enter a Name for the Window", "error");
                }
            
                else if (!parseInt(inputWidth.value))
                {
                swal("Width Validation", "You must enter a number for the Width", "error");
                 }
                else if (!parseInt(inputHeight.value))
                {
                swal("Height Validation", "You must enter a number for the Height", "error");
                }
                else if (!parseInt(inputDistance.value))
                {
                swal("Distance Validation", "You must enter a number for the Distance", "error");
                }


                else {

                    //Condiciones Solapamiento:
                    arrayOverlap.forEach(function (i) {

                        if (i.intersectsWithObject(wind1)) {
                            swal("Overlap Error", "The object entered overlaps with the previous", "error");
                            seSolapa = true;
                        }

                    });
                    if (!seSolapa) {
                        arrayOverlap.push(wind1);
                     
                        let Ventana4 = new Ventana(window_name.value, inputDistance.value, inputWidth.value * -1, inputSide.value);

                        MyPlano.Ventanas.push(Ventana4);
                        MiArray_Ventanas.push(Ventana4);
                        canvas.add(wind1);
                    }
                }
            }





        })
        botonCancel.addEventListener("click", function () {
            formWindow.remove();







        })
    })
    let door = document.getElementById("door");
    door.addEventListener("click", function () {
        $('.workPlace').empty();



        let formDoor = document.createElement('form'); // Create New Element Form
        // createform.setAttribute("action", ""); // Setting Action Attribute on Form
        // createform.setAttribute("method", "post"); // Setting Method Attribute on Form
        workplace.appendChild(formDoor);
        let headingDoor = document.createElement('h3'); // Heading of Form
        headingDoor.innerHTML = "Door";
        headingDoor.setAttribute("class", "text-info");
        formDoor.appendChild(headingDoor);
        let line = document.createElement('hr'); // Giving Horizontal Row After Heading
        formDoor.appendChild(line);
        let linebreak = document.createElement('br');
        formDoor.appendChild(linebreak);


        let Door_name_label = document.createElement('label'); // Create Label for E-mail Field
        Door_name_label.innerHTML = "Name:";
        formDoor.appendChild(Door_name_label);
        let door_name = document.createElement('input'); // Create Input Field for E-mail
        door_name.setAttribute("type", "text");
        door_name.setAttribute("class", "form-control");
        door_name.setAttribute("placeholder", "Enter the Name of the Door");
        formDoor.appendChild(door_name);
        let namebreakDoor = document.createElement('br');
        formDoor.appendChild(namebreakDoor);



        let sideLabel = document.createElement('label'); // Create Label for E-mail Field
        sideLabel.innerHTML = "Lado Pared (NSEO) :";
        formDoor.appendChild(sideLabel);
        let inputSide = document.createElement('select');
        inputSide.setAttribute("class", "form-control");
        formDoor.appendChild(inputSide);
        let optionN = document.createElement('option');
        optionN.setAttribute('label', 'Norte');
        optionN.setAttribute("value", "n");
        inputSide.appendChild(optionN);
        let optionE = document.createElement('option');
        optionE.setAttribute('label', 'Este');
        optionE.setAttribute("value", "e");
        inputSide.appendChild(optionE);
        let optionS = document.createElement('option');
        optionS.setAttribute('label', 'Sur');
        optionS.setAttribute("value", "s");
        inputSide.appendChild(optionS);
        let optionO = document.createElement('option');
        optionO.setAttribute('label', 'Oeste');
        optionO.setAttribute("value", "o");
        inputSide.appendChild(optionO);
        let messagebreak = document.createElement('br');
        formDoor.appendChild(messagebreak);
        let distanceLabel = document.createElement('label'); // Create Label for E-mail Field
        distanceLabel.innerHTML = "Distancia:";
        formDoor.appendChild(distanceLabel);
        let inputDistance = document.createElement('input'); // Create Input Field for E-mail
        inputDistance.setAttribute("type", "text");
        inputDistance.setAttribute("class", "form-control");
        inputDistance.setAttribute("placeholder", "Enter the Distance");
        // inputHeight.setAttribute("name", "demail");
        formDoor.appendChild(inputDistance);
        let messagebreak1 = document.createElement('br');
        formDoor.appendChild(messagebreak1);
        let widthlabel = document.createElement('label'); // Create Label for Name Field
        widthlabel.innerHTML = "Width :"; // Set Field Labels
        formDoor.appendChild(widthlabel);
        let inputWidth = document.createElement('input'); // Create Input Field for Name
        inputWidth.setAttribute("type", "text");
        inputWidth.setAttribute("class", "form-control");
        inputWidth.setAttribute("placeholder", "Enter the Width");
        // inputWidth.setAttribute("name", "dname");
        formDoor.appendChild(inputWidth);
        let linebreak1 = document.createElement('br');
        formDoor.appendChild(linebreak1);
        let doorOpeningLabel = document.createElement('label'); // Create Label for Name Field
        doorOpeningLabel.innerHTML = "Door Opening :"; // Set Field Labels
        formDoor.appendChild(doorOpeningLabel);
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
        let linebreak2 = document.createElement('br');
        formDoor.appendChild(linebreak2);
        let doorAxisLabel = document.createElement('label'); // Create Label for Name Field
        doorAxisLabel.innerHTML = "Door Axis :"; // Set Field Labels
        formDoor.appendChild(doorAxisLabel);
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
        let linebreak3 = document.createElement('br');
        formDoor.appendChild(linebreak3);
        let botonCreate = document.createElement('button'); // Append Button
        botonCreate.setAttribute("type", "button");
        botonCreate.setAttribute("class", "btn btn-outline-success");
        // submitelement.setAttribute("name", "dsubmit");
        botonCreate.innerHTML = "Create";
        formDoor.appendChild(botonCreate);
        let botonCancel = document.createElement('button'); // Append Button
        botonCancel.setAttribute("type", "button");
        botonCancel.setAttribute("class", "btn btn-outline-danger");
        // submitelement.setAttribute("name", "dsubmit");
        botonCancel.innerHTML = "Cancel";
        formDoor.appendChild(botonCancel);
        botonCreate.addEventListener("click", function () {

            let heightDoor = 10;
            let ejeX = Boolean(doorOpeningInput.value);
            let ejeY = Boolean(doorAxisInput.value);


            if (inputSide.value.toLowerCase() === "n") {
                topRoom = 100;
                leftRoom = 50;
                let x = parseInt(inputWidth.value);
                if (doorOpeningInput.value == false) {
                    topRoom = topRoom + x - 5;
                }
                else {
                    topRoom = topRoom - 5;
                }
                let door1 = new fabric.Path('M 0 0 L 0 ' + x + ' Q ' + x + ',' + x + ',' + x + ',0,0,' + x + ' L ' + x + ' 0z + M 0 0 L 0 ' + x + ' L -10 ' + x + ' L -10 0Z');
                door1.set({
                    left: leftRoom + parseInt(inputDistance.value),
                    top: topRoom - x,
                    fill: 'transparent',
                    stroke: 'black',
                    perPixelTargetFind: true,
                    strokeWidth: 2,
                    strokeUniform: true,
                    angle: 90,
                    flipX: ejeX, // apertura FUERA
                    flipY: ejeY, // apertura DCHA
                    selectable: false
                });

                let seSolapa = false;
                //Límites ancho: 
                if ((parseInt(inputDistance.value) + parseInt(inputWidth.value)) > rect.width) {

                    swal("Width Error", "The width of the object is bigger than the width of the wall", "error");
                }

                else if (parseInt(door_name.value) || (door_name.value == "")) {
                    swal("Name Validation", "You must enter a Name for the Door", "error");
                }

                else if (!parseInt(inputWidth.value)) {
                    swal("Width Validation", "You must enter a number for the Width", "error");
                }
               
                else if (!parseInt(inputDistance.value)) {
                    swal("Distance Validation", "You must enter a number for the Distance", "error");
                }
                else

                {

                    //Condiciones Solapamiento:
                    arrayOverlap.forEach(function (i) {

                        if (i.intersectsWithObject(door1)) {
                            swal("Overlap Error", "The object entered overlaps with the previous", "error");
                            seSolapa = true;
                        }

                    });
                    if (!seSolapa) {
                 
                        arrayOverlap.push(door1);

                        let Puerta1 = new Puerta(door_name.value, inputDistance.value, inputWidth.value * -1, inputSide.value, Boolean(doorAxisInput.value), Boolean(doorOpeningInput.value));

                        MyPlano.Puertas.push(Puerta1);
                        MiArrat_Puertas.push(Puerta1);


                        canvas.add(door1);
                    }
                }
            }
            if (inputSide.value.toLowerCase() === "e") {

                topRoom = 100;
                leftRoom = 50 + rect.width;

                let x = parseInt(inputWidth.value);

                if (doorOpeningInput.value == false) {
                    leftRoom = leftRoom + heightDoor / 2 + 1;
                } else {
                    leftRoom = leftRoom + x + heightDoor / 2 + 1;
                }

                let door1 = new fabric.Path('M 0 0 L 0 ' + x + ' Q ' + x + ',' + x + ',' + x + ',0,0,' + x + ' L ' + x + ' 0z + M 0 0 L 0 ' + x + ' L -10 ' + x + ' L -10 0Z');
                door1.set({
                    left: leftRoom,
                    top: topRoom + parseInt(inputDistance.value) + x + 1,
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
                //Límites ancho: 
                if ((parseInt(inputDistance.value) + parseInt(inputWidth.value)) > rect.height)
                {

                    swal("Width Error", "The width of the object is bigger than the width of the wall", "error");

                }
                else if (parseInt(door_name.value) || (door_name.value == ""))
                {
                        swal("Name Validation", "You must enter a Name for the Door", "error");
                    }

                else if (!parseInt(inputWidth.value))
                {
                        swal("Width Validation", "You must enter a number for the Width", "error");
                    }

                else if (!parseInt(inputDistance.value))
                     {
                        swal("Distance Validation", "You must enter a number for the Distance", "error");
                    }
                 else {

                    //Condiciones Solapamiento:
                    arrayOverlap.forEach(function (i) {

                        if (i.intersectsWithObject(door1)) {
                            swal("Overlap Error", "The object entered overlaps with the previous", "error");
                            seSolapa = true;
                        }

                    });
                    if (!seSolapa) {
                   
                        arrayOverlap.push(door1);

                        let Puerta2 = new Puerta(door_name.value, inputDistance.value, inputWidth.value * -1, inputSide.value, Boolean(doorAxisInput.value), Boolean(doorOpeningInput.value));

                        MyPlano.Puertas.push(Puerta2);
                        MiArrat_Puertas.push(Puerta2);
                        canvas.add(door1);
                    }
                }
            }

            if (inputSide.value.toLowerCase() === "s") {

                topRoom = 100 + rect.height;
                leftRoom = 50 + rect.width;

                let x = parseInt(inputWidth.value);

                if (doorOpeningInput.value == false) {
                    topRoom = topRoom + heightDoor / 2 + 1;
                } else {
                    topRoom = topRoom + x + heightDoor / 2 + 1;
                }

                let door1 = new fabric.Path('M 0 0 L 0 ' + x + ' Q ' + x + ',' + x + ',' + x + ',0,0,' + x + ' L ' + x + ' 0z + M 0 0 L 0 ' + x + ' L -10 ' + x + ' L -10 0Z');
                door1.set({
                    left: leftRoom - parseInt(inputDistance.value) - x,
                    top: topRoom,
                    fill: 'transparent',
                    stroke: 'brown',
                    perPixelTargetFind: true,
                    strokeWidth: 1,
                    strokeUniform: true,
                    angle: 270,
                    flipX: ejeX, // apertura FUERA
                    flipY: ejeY, // apertura DCHA
                    selectable: false
                });

                let seSolapa = false;
                if ((parseInt(inputDistance.value) + parseInt(inputWidth.value)) > rect.width) {

                    swal("Width Error", "The width of the object is bigger than the width of the wall", "error");

                }

                else if (parseInt(door_name.value) || (door_name.value == "")) {
                    swal("Name Validation", "You must enter a Name for the Door", "error");
                }

                else if (!parseInt(inputWidth.value)) {
                    swal("Width Validation", "You must enter a number for the Width", "error");
                }

                else if (!parseInt(inputDistance.value)) {
                    swal("Distance Validation", "You must enter a number for the Distance", "error");
                }
                else {

                    //Condiciones Solapamiento:
                    arrayOverlap.forEach(function (i) {

                        if (i.intersectsWithObject(door1)) {
                            swal("Overlap Error", "The object entered overlaps with the previous", "error");
                            seSolapa = true;
                        }

                    });
                    if (!seSolapa) {
               
                        arrayOverlap.push(door1);


                        let Puerta3 = new Puerta(door_name.value, inputDistance.value, inputWidth.value * -1, inputSide.value, Boolean(doorAxisInput.value), Boolean(doorOpeningInput.value));

                        MyPlano.Puertas.push(Puerta3);
                        MiArrat_Puertas.push(Puerta3);
                        canvas.add(door1);
                    }
                }

            }

            if (inputSide.value.toLowerCase() === "o") {

                topRoom = 100 + rect.height;
                leftRoom = 50;

                let x = parseInt(inputWidth.value);

                if (doorOpeningInput.value == false) {
                    leftRoom = leftRoom - heightDoor / 2;
                } else {
                    leftRoom = leftRoom - x - heightDoor / 2;
                }

                let door1 = new fabric.Path('M 0 0 L 0 ' + x + ' Q ' + x + ',' + x + ',' + x + ',0,0,' + x + ' L ' + x + ' 0z + M 0 0 L 0 ' + x + ' L -10 ' + x + ' L -10 0Z');
                door1.set({
                    left: leftRoom,
                    top: topRoom - parseInt(inputDistance.value) - x,
                    fill: 'transparent',
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
                if ((parseInt(inputDistance.value) + parseInt(inputWidth.value)) > rect.height) {

                    swal("Width Error", "The width of the object is bigger than the width of the wall", "error");


                }

                else if (parseInt(door_name.value) || (door_name.value == "")) {
                    swal("Name Validation", "You must enter a Name for the Door", "error");
                }

                else if (!parseInt(inputWidth.value)) {
                    swal("Width Validation", "You must enter a number for the Width", "error");
                }

                else if (!parseInt(inputDistance.value)) {
                    swal("Distance Validation", "You must enter a number for the Distance", "error");
                }
                else
                {

                    //Condiciones Solapamiento:
                    arrayOverlap.forEach(function (i) {

                        if (i.intersectsWithObject(door1)) {
                            swal("Overlap Error", "The object entered overlaps with the previous", "error");
                            seSolapa = true;
                        }

                    });
                    if (!seSolapa) {
                        swal("Validated Door", "The door is stored correctly", "success")
                        arrayOverlap.push(door1);


                        let Puerta4 = new Puerta(door_name.value, inputDistance.value, inputWidth.value * -1, inputSide.value, Boolean(doorAxisInput.value), Boolean(doorOpeningInput.value));

                        MyPlano.Puertas.push(Puerta4);
                        MiArrat_Puertas.push(Puerta4);
                        canvas.add(door1);
                    }
                }
            }





        })
        botonCancel.addEventListener("click", function () {
            formDoor.remove();
        })



        MyPlano.Puertas.splice(0, 1);
        MyPlano.Ventanas.splice(0, 1);

        MyPlano.Nombre = "Plano1";
        console.log(MyPlano)




           

        });
    })

        let boton = document.getElementById("GuardarPlano");
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

                    //window.location.reload();
                },
                error: function (response) {
                    console.log(response);
                    alert(response);
                    //window.location.reload();
                }
            });
})




// Condiciones Solapamiento:

// let A = leftRecinto + distanceWind1;
// let B = leftRecinto + distanceWind1 + widthWind1; 

// let C = leftRecinto + distanceWind2;
// let D = leftRecinto + distanceWind2 + widthWind2; 

// if( A>C && A<D) {
//     alert('los elementos se solapan');
// }
// if(A<C && B>C){
//     alert('los elementos se solapan')
// }

    //let json = {
    //    Plano: {
    //       X:MyPlano
    //        Recinto: MyPlano.Recinto,
    //        Ventanas: [MyPlano.Ventanas],
    //        Puertas: [MyPlano.Puertas]
    //    }
    //};


    //let json = {
    //    Plano: {

    //        Recinto: {
    //            Nombre: MyPlano.Recinto.nombre,
    //            Alto: MyPlano.Recinto.Altura,
    //            Ancho: MyPlano.Recinto.Anchura,
    //            Ventanas:[
    //                {
    //                    Nombre: MyPlano.Ventanas.Nombre,
    //                    WallSide: MyPlano.Ventanas.orientacion,
    //                    Distance: MyPlano.Ventanas.Distance,
    //                    Width:MyPlano.Ventanas.Anchura
    //                }],
    //            Puertas: [
    //                {
    //                    Nombre: MyPlano.Puertas.Nombre,
    //                    WallSide: MyPlano.Puertas.Orientacion,
    //                    Distance: MyPlano.Puertas.Altura,
    //                    Width: MyPlano.Puertas.Anchura,
    //                    DoorOpening: MyPlano.Puertas.DoorOpening,
    //                    DoorAxis:MyPlano.Puertas.DoorAxis
    //                }]

    //            }

    //    }

    //};    
