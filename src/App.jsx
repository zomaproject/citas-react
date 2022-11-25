import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListaPacientes from "./components/ListaPacientes"
import { useState } from "react"
import { useEffect } from "react"
function App() {

const INITIAL = JSON.parse(localStorage.getItem('pacientes')) ?? [];
const [pacientes, setPacientes] = useState(INITIAL)
const [paciente,setPaciente] = useState({})

// useEffect(()=> {
//   const obtenerLs = ()=> {
//     const pacientesLs = JSON.parse(localStorage.getItem('pacientes')) ?? [];
//     setPaciente(pacientesLs)
//   }
//   obtenerLs()
// },[])

useEffect(()=> {
  localStorage.setItem('pacientes',JSON.stringify(pacientes))
},[pacientes])



const eliminarPaciente = (id)=>{
  const pacientesActualizados = pacientes.filter(el => el.id !== id)
  setPacientes(pacientesActualizados)
}


  return (
    <div className="container mx-auto mt-20">
     <Header/> 
     <div className="mt-12 md:flex ">
       <Formulario
       pacientes={pacientes}
       setPacientes={setPacientes}
       paciente={paciente}
      />

       <ListaPacientes pacientes={pacientes}
       setPaciente={setPaciente}
       eliminarPaciente={eliminarPaciente}
       />
     </div>
    </div>
  )
}

export default App
