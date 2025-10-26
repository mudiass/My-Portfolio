import { Matrix } from "./componentes/Matrix/matrix";
import "./styles/inicio.scss";


export default function Home() {
  return (
   <main className="container">
    <Matrix/>
    <div className="experience">
      <h3>Experiencia</h3>
      <p>Texto</p>
      <div className="experience-time">

      </div>
      <div className="infos">
        <h3>Linguagem</h3>
        <div className="language-infos">
          <span> EN - intremediate </span>
          <span>PT-BR - Native Speaker</span>
          <h3>Education</h3>
          <div className="educational-info">
          <span> Bachelors Degree in Information Systems - University of Praia Grande: Faculdade do Litoral Sul Paulista (FALS)</span>
          </div>
        </div>
       
      </div>
       <div className="buttons">
          <div className="social">

          </div>
          <button>contact me!</button>
        </div>
    </div>
    
    </main>
  );
}
