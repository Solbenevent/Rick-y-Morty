import "../hojas-de-estilo/About.css"
import gif from "../imagenes/ReYG.gif"

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">¡Bienvenidos!</h1>
      <p className="about-text">Mi nombre es María Sol Benevent. Formo parte de la cohorte 37A en <strong>soyHenry</strong> y desarrollé mi primer aplicación con <strong>React!</strong></p>
      <img className="gif" src = {gif} alt = "Loading" />
    </div>
  )
}

export default About;