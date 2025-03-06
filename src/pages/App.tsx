import Formulario from "../componentes/Form";
import Lista from "../componentes/Lista";
import style from './App.module.scss';

function App() {
  return (
    <div className={style.AppStyle}>
      <h1>React App</h1>
      <Formulario />
      <Lista />
    </div>
  );
}

export default App;
