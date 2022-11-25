import React from "react";
import { useState } from "react";
import Error from "./Error";
function Formulario({ pacientes, setPacientes }) {
  const [input, setInput] = useState({
    nombre: "",
    propietario: "",
    email: "",
    fecha: "",
    sintomas: "",
  });

  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const valores = Object.values(input);
    if (valores.includes("")) {
      setError(true);
      return;
    } else {
      setError(false);
    }

    const generarId = () => {
      return  Date.now().toString(36) + Math.random().toString(36).slice(2);
    };
    input.id = generarId()
    setPacientes([...pacientes, input]);
    // limpiar el formulario

    setInput({
      nombre: "",
      propietario: "",
      email: "",
      fecha: "",
      sintomas: "",
    });
  };

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento pacientes</h2>
      <p className="text-lg mt-5 mb-10">
        Añade Pacientes y {""}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>
      <form
        onSubmit={handleSubmit}
        className="bg-white mb-10 shadow-md rounded-lg py-10 px-5"
      >
        {/* Error */}
        {error && <Error><p>Todos los campos son obligatorios</p></Error>}

        {/* Nombre */}
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold "
            htmlFor="nombre"
          >
            Nombre mascota
          </label>
          <input
            id="nombre"
            value={input.nombre}
            name="nombre"
            onChange={(e) => handleChange(e)}
            className="border-2 w-full p-2 mt-2 placeholder-gray-400"
            placeholder="Nombre de la mascota"
            type="text"
          />
        </div>

        {/* Propietario */}
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold "
            htmlFor="propietario"
          >
            Nombre del Propietario
          </label>
          <input
            name="propietario"
            value={input.propietario}
            onChange={handleChange}
            id="propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400"
            placeholder="Nombre de la mascota"
            type="text"
          />
        </div>

        {/* Email */}
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold "
            htmlFor="email"
          >
            Email
          </label>
          <input
            name="email"
            value={input.email}
            onChange={handleChange}
            id="email"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400"
            placeholder="Nombre de la mascota"
            type="email"
          />
        </div>

        {/* date */}
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold "
            htmlFor="date"
          >
            Fecha de alta
          </label>
          <input
            name="fecha"
            value={input.fecha}
            onChange={handleChange}
            id="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400"
            type="date"
          />
        </div>

        {/* Sintomas */}
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold "
            htmlFor="sintomas"
          >
            Sintomas
          </label>
          <textarea
            name="sintomas"
            value={input.sintomas}
            onChange={handleChange}
            id="sntomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Describre los sintomas "
          />
        </div>

        {/* Enviar */}
        <input
          type="submit"
          value="Agregar Paciente"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700    transition-all  cursor-pointer"
        />
      </form>
    </div>
  );
}

export default Formulario;
