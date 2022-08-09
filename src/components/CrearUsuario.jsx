import React from "react";
import { useState } from "react";
import axios from 'axios'
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const CrearUsuario = () => {

  const valorInicial = {
    nombre: '',
    apellido: '',
    edad: 18,
    telefono: 0,
    correo: ''
  }

  const [usuario, setUsuario] = useState(valorInicial)

  let {id} = useParams();
  const [subId, setSubId] = useState(id)

  const capturarDatos = (e) => {
    const {name, value} = e.target
    setUsuario({...usuario, [name]: value})//...usuario, trae una copia de todo lo que hay en la variable de estado
  }

  const guardarDatos = async (e) => {
    e.preventDefault();
    
    //logica para la peticion post

    const nuevoUsuario = {
      nombre: usuario.nombre,
      apellido: usuario.apellido,
      edad: usuario.edad,
      telefono: usuario.telefono,
      correo: usuario.correo
    }

    await axios.post('http://localhost:4000/api/usuarios', nuevoUsuario)

    setUsuario({...valorInicial})
  }

  //funcion para actualizar el usuario

  const actualizarUsuario = async (e) =>{
    e.preventDefault();
    const nuevoUsuario = {
      nombre: usuario.nombre,
      apellido: usuario.apellido,
      edad: usuario.edad,
      telefono: usuario.telefono,
      correo: usuario.correo
    }
    await axios.put('http://localhost:4000/api/usuarios/' + subId, nuevoUsuario)
    setUsuario({...valorInicial})
    setSubId('')
  }

  //logica para realizar una peticios a la api

  const obtenerUno = async(valorId)=>{
    const res = await axios.get('http://localhost:4000/api/usuarios/' + valorId)
    setUsuario({
      nombre: res.data.nombre,
      apellido: res.data.apellido,
      telefono: res.data.telefono,
      edad: res.data.edad,
      correo: res.data.correo
  })
  }

  useEffect(()=>{
    if(subId !== ''){
      obtenerUno(subId)
    }
  },[subId])

  return (
    <div className="col-md-6 offset-md-3">
      <div className="card card-body">
        <form onSubmit={guardarDatos}>
          <h1 className="text-center mb-3">Crear Usuario</h1>
          <div className="mb-3">
            <label>Nombre:</label>

            <input
              type="text"
              className="form-control"
              placeholder="Ingrese el nombre del usuario"
              required
              name='nombre'
              value = {usuario.nombre}
              onChange={capturarDatos}
            />
          </div>

          <div className="mb-3">
            <label>Apellido:</label>

            <input
              type="text"
              className="form-control"
              placeholder="Ingrese el apellido del usuario"
              required
              name='apellido'
              value = {usuario.apellido}
              onChange={capturarDatos}
            />
          </div>

          <div className="mb-3">
            <label>Edad:</label>

            <input
              type="number"
              className="form-control"
              placeholder="Ingrese la edad del usuario"
              required
              name='edad'
              value = {usuario.edad}
              onChange={capturarDatos}
            />
          </div>

          <div className="mb-3">
            <label>Teléfono:</label>

            <input
              type="number"
              className="form-control"
              placeholder="Ingrese el teléfono del usuario"
              required
              name='telefono'
              value = {usuario.telefono}
              onChange={capturarDatos}
            />
          </div>

          <div className="mb-3">
            <label>Correo:</label>

            <input
              type="text"
              className="form-control"
              placeholder="Ingrese el correo del usuario"
              required
              name='correo'
              value = {usuario.correo}
              onChange={capturarDatos}
            />
          </div>

          <button className="btn btn-primary form-control">Guardar Usuario</button>
        </form>

        <form onSubmit={actualizarUsuario}>
          <button className="btn btn-danger from-control mt-2">
          Actualizar Información 
          </button>
        </form>
      </div>
    </div>
  );
};

export default CrearUsuario;
