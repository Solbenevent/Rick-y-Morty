import "../hojas-de-estilo/Form.css";
import { useEffect, useState } from "react";
import validation from "./validation";

const Form = ({login}) =>{
  const [userData, setUserData] = useState({
    email: "",
    password: ""
  })

  const [errors, setErrors] = useState({
    email: "",
    password: ""
  });

  const handleChange = (event) => {
    setUserData({...userData, [event.target.name]: event.target.value})
   validation({...userData, [event.target.name]: event.target.value}, errors, setErrors);
  }



  const submitHandler = (event) =>{
    event.preventDefault();
    login(userData);
  }

  return (
     <div className="form-contenedor">
      <form className="form"
      onSubmit={submitHandler}>
        <label htmlFor="email" className="label1">Email:</label>
            
            <input
            className="input-email"
            placeholder="Introduce tu Email"
            type ="text"
            name = "email"
            value ={userData.email}
            onChange={handleChange} />
          <p>{errors.email}</p>
        <label htmlFor="password" className="label2">Password:</label>
           
            <input
            className="input-contraseña"
            placeholder="Introduce tu contraseña"
            type= "password"
            name = "password" 
            value={userData.password}
            onChange={handleChange}/>
        <button className="btn-submit">Submit</button> 
          {errors.length > 0 && <p>{errors}</p>} 

      </form>
    </div>
  )
}

export default Form; 