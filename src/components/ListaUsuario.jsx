import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const ListaUsuario = () => {
  const [lista, setLista] = useState([]);

  useEffect(() => {
    const getUsuarios = async () => {
      const res = await axios.get("http://localhost:4000/api/usuarios");
      setLista(res.data);
    };
    getUsuarios();
  }, [lista]);

  return (
    <div className="row">
      {lista.map(listItem => (
        <div className="col-md-4 p-2" key={listItem._id}>
          <div className="card">
            <div className="card-header">
              <h5>Nombre: {listItem.nombre}</h5>
            </div>
            <div className="card-body">
              <p>Apellido: {listItem.apellido}</p>
              <p>Edad: {listItem.edad}</p>
              <p>Telefono: {listItem.telefono}</p>
              <p>Correo: {listItem.correo}</p>
            </div>
            <div className="card-footer">
              <button className="btn btn-danger">
                Eliminar
              </button>
            </div>
          </div>
        </div>
))}
    </div>
  );
};

export default ListaUsuario;
