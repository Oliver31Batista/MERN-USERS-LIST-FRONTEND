import React from "react";

const CrearUsuario = () => {
  return (
    <div className="col-md-6 offset-md-3">
      <div className="card card-body">
        <form>
          <h1 className="text-center mb-3">Crear Usuario</h1>
          <div className="mb-3">
            <label>Nombre:</label>

            <input
              type="text"
              className="form-control"
              placeholder="Ingrese el nombre del usuario"
              required
            />
          </div>

          <div className="mb-3">
            <label>Apellido:</label>

            <input
              type="text"
              className="form-control"
              placeholder="Ingrese el apellido del usuario"
              required
            />
          </div>

          <div className="mb-3">
            <label>Edad:</label>

            <input
              type="number"
              className="form-control"
              placeholder="Ingrese la edad del usuario"
              required
            />
          </div>

          <div className="mb-3">
            <label>Teléfono:</label>

            <input
              type="number"
              className="form-control"
              placeholder="Ingrese el teléfono del usuario"
              required
            />
          </div>

          <div className="mb-3">
            <label>Correo:</label>

            <input
              type="text"
              className="form-control"
              placeholder="Ingrese el correo del usuario"
              required
            />
          </div>

          <button className="btn btn-primary form-control">Guardar Usuario</button>
        </form>
      </div>
    </div>
  );
};

export default CrearUsuario;
