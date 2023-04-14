import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import Detail from './components/Detail';
import { useEffect, useState } from 'react';
import { Route, Routes, useLocation, useNavigate} from "react-router-dom";
import About from './components/About';
import Form from './components/Form';


function App() {
  const [characters, setCharacters] = useState([]);
  const {pathname} = useLocation();
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();

  //!CREDENCIALES FALSAS
  const EMAIL = "solbenevent@gmail.com";
  const PASSWORD = "toyenelm2";

  const login = (userData) =>{
    if(userData.email === EMAIL && userData.password === PASSWORD){
      setAccess(true);
      navigate("/home")
    } else{
      alert("Credenciales incorrectas")
    }
  }

  useEffect(() =>{
   !access && navigate("/");
  }, [access])
  

  const onSearch = (id) => {
   const URL_BASE = "https://be-a-rym.up.railway.app/api"
   const KEY = "be8639d64f59.a46c9d8652407781dbe3"

   if(characters.find((char) => char.id === id)){
      return alert("El personaje ya existe")
   }
   fetch(`${URL_BASE}/character/${id}?key=${KEY}`)
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
   setCharacters(characters.filter((char) => char.id !== id))
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
         </Routes>
      </div>
   );
}

export default App;
