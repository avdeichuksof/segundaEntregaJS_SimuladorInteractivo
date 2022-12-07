/* SIMULADOR DE PLANILLA DE EMPLEADOS */


class Empleado{
    constructor(apellido, nombre, dni, sexo, sueldo){
        this.apellido = apellido;
        this.nombre = nombre;
        this.dni = dni;
        this.sexo = sexo;
        this.sueldo = sueldo;
    }
}

const empleadoPedro = new Empleado("Pérez", "Pedro", 29004321, "m", 90500);
const empleadoJuan = new Empleado("Juan", "Reynoso", 35239123, "m", 100000);
const empleadoSara = new Empleado("Sara", "Smith", 40239433, "f",95000);
const empleadoLuciana = new Empleado("Luciana", "Correa", 29943215, "f", 120000);
const empleadoMartin = new Empleado("Martín", "Martínez", 38774236, "m", 95000);

const arrayEmpleados = [empleadoPedro, empleadoJuan, empleadoSara, empleadoLuciana, empleadoMartin];

// Menú de opciones:
function menu() {
    let opcion = parseInt(prompt("Bienvenido. Ingrese una opción: \n 1) Alta de empleado \n 2) Baja de empleado \n 3) Modificación de empleado \n 4) Consulta de empleado \n 5) Ordenar por sueldo de menor a mayor \n 6) Mostrar empleados \n 7) Salir"));
    return opcion;
}

// Alta de empleados:
function altaEmpleado() {
    let apellido = prompt("Ingrese el apellido del empleado: ");
    let nombre = prompt("Ingrese el nombre del empleado: ");
    let dni = parseInt(prompt("Ingrese el DNI del empleado: "));
    let sexo = prompt("Ingrese el sexo del empleado: ");
    let sueldo = parseInt(prompt("Ingrese el sueldo del empleado: "));
    let empleado = new Empleado(apellido, nombre, dni, sexo, sueldo);
    arrayEmpleados.push(empleado);
    console.log(arrayEmpleados);
}

// Baja de empleados:
function bajaEmpleado() {
    let dni = parseInt(prompt("Ingrese el DNI del empleado: "));
    let empleado = arrayEmpleados.find(empleado => empleado.dni === dni);
    let indice = arrayEmpleados.indexOf(empleado);
    arrayEmpleados.splice(indice, 1);
    console.log(arrayEmpleados);
}

// Modificación de empleados:
function modificacionEmpleado() {
    let dni = parseInt(prompt("Ingrese el DNI del empleado: "));
    let empleado = arrayEmpleados.find(empleado => empleado.dni === dni);
    let indice = arrayEmpleados.indexOf(empleado);
    let apellido = prompt("Ingrese el apellido del empleado: ");
    let nombre = prompt("Ingrese el nombre del empleado: ");
    let sexo = prompt("Ingrese el sexo del empleado: ");
    let sueldo = parseInt(prompt("Ingrese el sueldo del empleado: "));
    let empleadoModificado = new Empleado(apellido, nombre, dni, sexo, sueldo);
    arrayEmpleados.splice(indice, 1, empleadoModificado);
    console.log(arrayEmpleados);
}

// Consultar empleados:
function consultarEmpleado() {
    let dni = parseInt(prompt("Ingrese el DNI del empleado: "));
    let empleado = arrayEmpleados.find(empleado => empleado.dni === dni);
    console.log(empleado);
}

// Ordenar sueldo de menor a mayor:
function ordenarSueldoMenorMayor() {
    let arraySueldosOrdeandos = arrayEmpleados.sort((a, b) => a.sueldo - b.sueldo);
    console.log(arraySueldosOrdeandos);
}

// Salir:
function salir() {
    alert("Adiós. Tenga un bonito día :)");
}


// EJECUCIÓN:
let opcion = menu();
switch (opcion) {
    case 1:
        altaEmpleado();
        break;
    case 2:
        bajaEmpleado();
        break;
    case 3:
        modificacionEmpleado();
        break;
    case 4:
        consultarEmpleado();
        break;
    case 5:
        ordenarSueldoMenorMayor();
        break;
    case 6:
        console.log(arrayEmpleados);
        break;
    case 7:
        salir();
        break;
    default:
        alert("Opción incorrecta.");
        break;
}