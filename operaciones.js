import { readFile, writeFile } from 'fs/promises';
import { nanoid } from 'nanoid';

const registerAppointment = async (nombre, edad, animal, color, enfermedad) => {
  try {
    const agenda = JSON.parse(await readFile("citas.json"))
    const appointment = {
      id: nanoid(5),
      nombre,
      edad,
      animal,
      color,
      enfermedad,
    }
    agenda.push(appointment)
    await writeFile("citas.json", JSON.stringify(agenda))
    console.log("La cita se ha registrado correctamente")
  } catch (error) {
    console.log(error)
  }
}

const listAppointments = async () => {
  try {
    const agenda = JSON.parse(await readFile("citas.json"))
    if(agenda.length === 0){
      console.log("No hay citas agendadas")
      return
    }
    console.log("Las citas agendadas son las siguientes:")
    console.log(agenda)
  } catch (error) {
    console.log(error)
  }
}

const searchAppointment = async (id) => {
  try {
    const agenda = JSON.parse(await readFile("citas.json"))
    const appointmentFilter = agenda.find(item => item.id === id)
    if(!appointmentFilter){                                         //si es falso es undefined, si find no encuentra el id la variable queda undefined
      console.log("Cita no encontrada")
      return
    }
    console.log("Cita encontrada:")
    console.log(appointmentFilter)
  } catch (error) {
    console.log(error)
  }
}

const eraseAppointment = async (id) => {
  try {
    const agenda = JSON.parse(await readFile("citas.json"))
    const appointmentFilter = agenda.filter(item => item.id !== id)
    if(agenda.length == appointmentFilter.length){                        
      console.log("La cita no pudo ser borrada o no existe")
      return
    }
    await writeFile("citas.json", JSON.stringify(appointmentFilter))
    console.log("La cita ha sido borrada con éxito")
  } catch (error) {
    console.log(error)
  }
}


export {registerAppointment, listAppointments, searchAppointment, eraseAppointment}