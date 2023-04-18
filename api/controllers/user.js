import { db } from "../db.js";

export const getUsers = (_, res) => {
  const q = "SELECT * FROM usuarios";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const addUser = (req, res) => {
  const q =
    "INSERT INTO usuarios(`Familia`, `Genero`, `Especie`, `NoInvArea`,`NombreComun`,`Ubicacion`,`Condicion`,`FechaIngreso`,`FechaDeAltaMontaje`,`FechaDeBaja`,`Observaciones`, `NoInvNuevo`) VALUES(?)";

  const values = [
    req.body.Familia,
    req.body.Genero,
    req.body.Especie,
    req.body.NoInvArea,
    req.body.NombreComun,
    req.body.Ubicacion,
    req.body.Condicion,
    req.body.FechaIngreso,
    req.body.FechaDeAltaMontaje,
    req.body.FechaDeBaja,
    req.body.Observaciones,
    req.body.NoInvNuevo,
  ];

  db.query(q, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Usuario creado con exito.");
  });
};

export const updateUser = (req, res) => {
  const q =
    "UPDATE usuarios SET `Familia` = ?, `Genero` = ?, `Especie` = ?,`NoInvArea` = ?,`NombreComun` = ?,`Ubicacion` = ?,`Condicion` = ?,`FechaIngreso` = ?, `FechaDeAltaMontaje` = ?,`FechaDeBaja` = ?, `Observaciones` = ?, `NoInvNuevo` = ? WHERE `IdInvMuZool` = ?";

  const values = [
    req.body.Familia,
    req.body.Genero,
    req.body.Especie,
    req.body.NoInvArea,
    req.body.NombreComun,
    req.body.Ubicacion,
    req.body.Condicion,
    req.body.FechaIngreso,
    req.body.FechaDeAltaMontaje,
    req.body.FechaDeBaja,
    req.body.Observaciones,
    req.body.NoInvNuevo,
  ];

  db.query(q, [...values, req.params.IdInvMuZool], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Usuario actualizado con exito.");
  });
};

export const deleteUser = (req, res) => {
  const q = "DELETE FROM usuarios WHERE `IdInvMuZool` = ?";

  db.query(q, [req.params.IdInvMuZool], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Usuario eliminado con exito.");
  });
};
