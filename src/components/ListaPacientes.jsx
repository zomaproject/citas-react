import Paciente from "./Pacientes";
const ListaPacientes = ({ eliminarPaciente, pacientes,setPaciente, paciente }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-scroll ">
      {pacientes && pacientes.length ? (
        <>
          {" "}
          <h2 className="font-black text-3xl  text-center">
            Listado de Pacientes
          </h2>
          <p className="text-xl mt-5 mb-10">
            Administra tus Pacientes y {""}
            <span className="text-indigo-600 font-bold">Pacientes Y Citas</span>
          </p>
          {pacientes.map(
            (
              el //paciente es = {name,propietario,fecha,sintomas,email}
            ) => (
              <Paciente key={el.id} paciente={el}
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}
               />
            )
          )}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No Hay Pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Comienza agregando pacientes y {""}
            <span className="text-indigo-600 font-bold">Aparecerean aquí</span>
          </p>
        </>
      )}
    </div>
  );
};

export default ListaPacientes;
