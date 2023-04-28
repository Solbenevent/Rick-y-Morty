import Card from './Card';
import "../hojas-de-estilo/Cards.css";

const Cards = ({characters, onClose}) => {
   return <div className='contenedor-cards'>
    {
     characters.map(({id, name, species, gender, origin, status, image}) =>{
      return (
         <Card 
         key={id}
         id={id}
         name={name}
         species={species}
         gender={gender}
         origin={origin.name}
         status= {status}
         image={image}
         onClose={onClose}
         />
      )
     })
    }

   </div>;
}

export default Cards;