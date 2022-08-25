import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ListaUsuario = () => {
  const [lista, setLista] = useState([]);

  useEffect(() => {
    const getUsuarios = async () => {
      const res = await axios.get('http://localhost:4000/api/usuarios/');
      setLista(res.data);
    };
    getUsuarios();
  }, [lista]);

  const eliminarUsuario = async (id) => {
    await axios.delete('http://localhost:4000/api/usuarios/' + id);
  };

  return (
    <div className="row">
      {lista.map((listItem) => (
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
              <button
                className="btn btn-danger"
                onClick={() => eliminarUsuario(listItem._id)}
              >
                Eliminar
              </button>
              <Link
                className="btn btn-primary m-1"
                to={'/edit/' + listItem._id}
              >
                Editar
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListaUsuario;
