import { useState } from "react";
import Cronometro from "../componentes/Cronometro";
import Formulario from "../componentes/Form";
import Lista from "../componentes/Lista";
import style from './App.module.scss';
import { v4 as uuidv4 } from 'uuid';
import { Tarefas } from "../types/tarefas";

function App() {
  const [tarefas, setTarefas] = useState<Tarefas[]>([
    {
      tarefa: "React",
      tempo: "02:00:00",
      selecionado: false,
      completado: false,
      id: uuidv4(),
    },
    {
      tarefa: "Javascript",
      tempo: "01:00:00",
      selecionado: false,
      completado: false,
      id: uuidv4(),
    },
    {
      tarefa: "React",
      tempo: "02:00:00",
      selecionado: false,
      completado: false,
      id: uuidv4(),
    },
    {
      tarefa: "Javascript",
      tempo: "01:00:00",
      selecionado: false,
      completado: false,
      id: uuidv4(),
    },
  ]);

  const [selecionado, setSelecionado] = useState<Tarefas>();

  function selecionaTarefa(tarefaSelecionada: Tarefas) {
    setSelecionado(tarefaSelecionada);
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false
    })))
  }

  return (
    <div className={style.AppStyle}>
      <h1>React App</h1>
      <Formulario tarefas={tarefas} setTarefas={setTarefas} />
      <Lista tarefas={tarefas} selecionarTarefa={selecionaTarefa} />
      <Cronometro selecionado={selecionado} />
    </div>
  );
}

export default App;
