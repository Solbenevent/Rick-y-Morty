const { login } = require("../controllers/login");
const { getCharById } = require("../controllers/getCharById");
const { postFav, deleteFav } = require("../controllers/handleFavorites");

const router = require("express").Router();

//!CADA RUTA ES MANEJADA POR SU CONTROLADOR

router.get("/character/:id", (req, res) => {
   getCharById(req, res);
})

router.get("/login", (req, res) => {
  login(req, res); //los parámetros pueden obviarse ya q las funciones ya lo recibían anteriormente
})

router.post("/fav", (req, res) => {
  postFav(req, res);
})
 
router.delete("/fav/:id", (req, res) => {
  deleteFav(req, res);
})

module.exports = router; 