import { Tarefas } from "../../../types/tarefas";
import style from "./Item.module.scss";

function Item({ tarefa, tempo, selecionado, completado, id }: Tarefas) {
  return (
    console.log('item atual: ', {tarefa,tempo,selecionado,completado,id}),
    <li className={style.item}>
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
    </li>
  );
}

export default Item;
