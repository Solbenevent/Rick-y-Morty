import axios from "axios";
 import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import Detail from './components/Detail';
import { useEffect, useState } from 'react';
import { Route, Routes, useLocation, useNavigate} from "react-router-dom";
import About from './components/About';
import Form from './components/Form';
import Favorites from './components/Favorites';

function App() {
  const [characters, setCharacters] = useState([]);
  const {pathname} = useLocation();
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();

  //!CREDENCIALES FALSAS
  const EMAIL = "solbenevent@gmail.com";
  const PASSWORD = "toyenelm2";
  
  const login = (userData) => {
     //con esta funcion le estamos mandando info a nuestro back (localhost:3001)
   const { email, password } = userData;
   console.log(userData);

   const URL = "http://localhost:3001/rickandmorty/login/";
   axios(URL + `?email=${email}&password=${password}`) //le concatenamos la query 
   .then(({ data }) => {
      const { access } = data; //hace destructuring de data y se queda con la prop access
      setAccess(access);
      access && navigate("/home");
   });
  }

  useEffect(() =>{
   !access && navigate("/");
  }, [access])
  

  const onSearch = (id) => {

   if(characters.find((char) => char.id === id)){
      return alert("El personaje ya existe")
   }
   fetch(`http://localhost:3001/rickandmorty/character/${id}`)
   .then((response) => response.json())
   .then((data) =>{
      if(data.name){
         setCharacters((oldChars) => [...oldChars, data]);

      } else{
         window.alert("No hay personajes con ese ID")
      }
   })
   }

const onClose = (id) => {
   setCharacters(characters.filter(char => char.id !== id))
}

   return (
      <div className='App'>
       {pathname !== "/" && <Nav onSearch={onSearch} setAccess ={setAccess} /> }    
        <Routes>
         <Route path = "/" element={<Form login= {login} />} />
        <Route path="/home"
        element = { <Cards characters={characters} onClose={onClose} /> } />
        <Route path ="/about" element = {<About />} />
        <Route path = "/detail/:detailId" element ={<Detail />} />
        <Route path = "/favorites" element={<Favorites />} />
         </Routes>
      </div>
   );
}

export default App;
