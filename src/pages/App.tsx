import { useState } from "react";
import Cronometro from "../componentes/Cronometro";
import Formulario from "../componentes/Form";
import Lista from "../componentes/Lista";
import style from './App.module.scss';

function App() {

  const [tarefas, setTarefas] = useState ( [
    {
      tarefa: "React",
      tempo: "02:00:00",
    },
    {
      tarefa: "Javascript",
      tempo: "01:00:00",
    },
  ]
)

  return (
    <div className={style.AppStyle}>
      <h1>React App</h1>
      <Formulario tarefas={tarefas}  setTarefas={setTarefas}/>
      <Lista tarefas={tarefas}/>
      <Cronometro />
    </div>
  );
}

export default App;
