import { registerAppointment, listAppointments, searchAppointment, eraseAppointment } from "./operaciones.js";
import { argv } from "process";

const [command, ...args] = argv.slice(2);

if (command === "register") {
    if (args.length !== 5) {
        console.log("Debes ingresar todos los datos para registrar la cita: nombre, edad, animal, color, enfermedad")
    } else {
        registerAppointment(...args);
    }
} else if (command === "read") {
    listAppointments();
} else if (command === "search") {
    searchAppointment(...args)
} else if (command === "delete") {
    eraseAppointment(...args)
} else {
    console.log("El comando ingresado no es válido")
}

