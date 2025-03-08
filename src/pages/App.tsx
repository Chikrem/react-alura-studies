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
      tempo: "01:30:00",
      selecionado: false,
      completado: false,
      id: uuidv4(),
    },
    {
      tarefa: "Javascript",
      tempo: "01:30:00",
      selecionado: false,
      completado: false,
      id: uuidv4(),
    },
    {
      tarefa: "React",
      tempo: "01:00:10",
      selecionado: false,
      completado: false,
      id: uuidv4(),
    },
    {
      tarefa: "Javascript",
      tempo: "00:00:10",
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
    })));
  }

  function setCompletado() {
    if (selecionado) {
      setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => {
        if (tarefa.id === selecionado.id) {
          return { ...tarefa, completado: true };
        }
        return tarefa;
      }));
    }
  }

  return (
    <div className={style.AppStyle}>
      <h1>React App</h1>
      <Formulario tarefas={tarefas} setTarefas={setTarefas} />
      <Lista tarefas={tarefas} selecionarTarefa={selecionaTarefa} />
      <Cronometro selecionado={selecionado} setCompletado={setCompletado} />
    </div>
  );
}

export default App;
