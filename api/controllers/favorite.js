import { db } from "../db.js";
export const getFavorites = (_, res) => {
  const q = "SELECT * FROM favoritos INNER JOIN usuarios ON usuarios.id = favoritos.id_usuario";

  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.status(200).json(data);
  });
}

export const addFavorite = (req, res) => {
  const q = "INSERT INTO favoritos(`id_usuario`) VALUES(?)";

  const values = [req.body.id_usuario];

  db.query(q, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Favorito creado con exito.");
  })
}

export const deleteFavorite = (req, res) => {
  const q = "DELETE FROM favoritos WHERE `id_usuario` = ?";
  db.query(q, [req.params.IdInvMuZool], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Favorito eliminado con exito.");
  })
}