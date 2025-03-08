
import { Tarefas } from '../../types/tarefas';
import Item from './Item';
import style from './Lista.module.scss'



function Lista({ tarefas }: { tarefas: Tarefas[] }) {
  return (
    <aside className={style.listaTarefas}>
      <h2 >
        Estudos do dia
      </h2>
      <ul>
        {tarefas.map((tarefa, index) => (
          <Item 
            key={index}
            {...tarefa}
          />
        ))}
      </ul>
    </aside>
  );
}

export default Lista;
