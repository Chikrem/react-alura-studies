import React, { useState } from "react";
import Botao from "../Botao";
import style from "./Form.module.scss";
import { Tarefas } from "../../types/tarefas";

interface FormularioProps {
  tarefas: Tarefas[];
  setTarefas: React.Dispatch<React.SetStateAction<Tarefas[]>>;
}

function Formulario({ tarefas, setTarefas }: FormularioProps) {
  const [tarefa, setTarefa] = useState("");
  const [tempo, setTempo] = useState("00:00:00");

  const adicionarTarefa = (evento: React.FormEvent) => {
    evento.preventDefault();
    setTarefas([...tarefas, { tarefa, tempo }]);
    setTarefa("");
    setTempo("00:00:00");
  };

  return (
    <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
      <div className={style.inputContainer}>
        <label htmlFor="tarefa">Adicione uma nova tarefa</label>
        <input
          type="text"
          name="tarefa"
          id="tarefa"
          value={tarefa}
          onChange={(event) => setTarefa(event.target.value)}
          placeholder="Digite a tarefa"
          required
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="tempo">Tempo</label>
        <input
          type="time"
          step="1"
          name="tempo"
          id="tempo"
          value={tempo}
          onChange={(event) => setTempo(event.target.value)}
          min="00:00:00"
          max="01:30:00"
          required
        />
      </div>
      <Botao type="submit">Adicionar</Botao>
    </form>
  );
}

export default Formulario;
