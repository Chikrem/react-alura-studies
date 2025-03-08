import Item from './Item';
import style from './Lista.module.scss';
import { Tarefas } from '../../types/tarefas';

interface Props {
  tarefas: Tarefas[],
  selecionarTarefa: (tarefaSelecionada: Tarefas) => void 
}


function Lista({ tarefas, selecionarTarefa }: Props) {
  return (
    <aside className={style.listaTarefas}>
      <h2> Estudos do dia </h2>
      <ul>
        {tarefas.map(item => (
          <Item
            selecionaTarefa={selecionarTarefa}
            key={item.id}
            {...item}
          />
        ))}
      </ul>
    </aside>
  )
}

export default Lista;