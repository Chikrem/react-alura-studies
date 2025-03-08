import Botao from "../Botao";
import Relogio from "./Relogio";
import style from "./Cronometro.module.scss";
import { Tarefas } from "../../types/tarefas";

interface CronometroProps {
  selecionado: Tarefas | null;
}

const Cronometro: React.FC<CronometroProps> = ({ selecionado }) => {
  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o Cronômetro</p>
      <section className={style.item}>
        <h3>{selecionado ? selecionado.tarefa : "Nenhuma tarefa selecionada"}</h3>
        <h3>{selecionado ? selecionado.tempo : "00:00:00"}</h3>
      </section>
      <div className={style.relogioWrapper}>
        <Relogio />
      </div>
      <Botao>Começar!</Botao>
    </div>
  );
};

export default Cronometro;
