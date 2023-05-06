const users = require("../DB_connection");

const postUser = async (req, res) => {
  const { email, password } = req.body;
   if(!email || !password || email.trim() === "" || password.trim("")) {
    return res.status(400).json({message: "Faltan datos"});
   }
   try {
    const [user, created] = await users.findOrCreate({ where: {email}, defaults: {password}});
    return res.status(200).json( { user });
   } catch (error) {
     res.status(500).json({ message: error.message });
   }
};

module.exports = {
    postUser
}