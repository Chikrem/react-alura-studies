import React from "react";
import { Tarefas } from "../../types/tarefas";
import style from './Lista.module.scss'


interface ListaProps {
  tarefas: Tarefas[];
  selecionarTarefa: (id: string) => void;
}

const Lista: React.FC<ListaProps> = ({ tarefas, selecionarTarefa }) => {
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa.id} onClick={() => selecionarTarefa(tarefa.id)} className={style.item}>
            {tarefa.tarefa} - {tarefa.tempo}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Lista;
