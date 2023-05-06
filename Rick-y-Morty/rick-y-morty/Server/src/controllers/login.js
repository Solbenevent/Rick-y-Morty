const { User } = require("../DB_connection");
require("dotenv").config(); //process.env

const DB_EMAIL = process.env.EMAIL;
const DB_PASSWORD = process.env.PASSWORD;

const login = async (req, res) => {
  const { email, password } = req.query;
  if(!email || !password) {
    res.status(500).json({message: "Faltan datos"});
  }
  try {
    const user = await  User.findOne({ email });
    if(!user) {
        res.status(404).json({ message: "Usuario no encontrado"});
    }
    if(user.password !== password){
        res.status(403).json({ message: "Contraseña incorrecta"});
    }
    res.json({ access: true })
  } catch (error) {
    res.status(500).json({ message: error.message})
  }
};

module.exports = {
    login
}