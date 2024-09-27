/* Implementa tú código JS */

let paisesPIB = [
    { nombre: "Alemania", pib: 3860 },
    { nombre: "Japón", pib: 4870 },
    { nombre: "Brasil", pib: 2050 },
    { nombre: "Canadá", pib: 1800 },
    { nombre: "México", pib: 1220 },
    { nombre: "China", pib: 14140 },
    { nombre: "India", pib: 2870 },
    { nombre: "Francia", pib: 2770 },
    { nombre: "Reino Unido", pib: 2820 },
    { nombre: "Estados Unidos", pib: 21440 }
];

const divElement = document.getElementById("contenedorPaises");
const contenedorGrande = document.getElementById("cont");

let tableElement = document.createElement("table");
divElement.append(tableElement);

let listaPaises = [];


function seleccionarPais() {

    // seleccionar un pais de manera aleatoria

    let id = Math.floor(Math.random() * paisesPIB.length);

    let rowElement = document.createElement("tr");
    let nombrePais = document.createElement("th"); // para meter el nombre del país
    let pibPais = document.createElement("th"); // para meter el PIB del país
    nombrePais.textContent = paisesPIB[id].nombre;
    pibPais.textContent = paisesPIB[id].pib;
    tableElement.append(rowElement, nombrePais, pibPais);
    listaPaises.push(paisesPIB[id]);
    delete paisesPIB[id];
    //quitar del array y poner en el nuevo

    /*
    for (let i = 1; i < listaPaises.length; i++) {

        let rowElement = document.createElement("tr");
        let nombrePais = document.createElement("th"); // para meter el nombre del país
        let pibPais = document.createElement("th"); // para meter el PIB del país
        nombrePais.textContent=paisesPIB[i].nombre;
        pibPais.textContent=paisesPIB[i].pib;
        tableElement.append(rowElement, nombrePais, pibPais);
    
    }
        */

}







let boton = document.createElement("button");
boton.addEventListener("click", seleccionarPais);
boton.textContent = "Añadir";
contenedorGrande.append(boton);








