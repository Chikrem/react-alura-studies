import Botao from "../Botao";
import Relogio from "./Relogio";
import style from "./Cronometro.module.scss";
import { Tarefas } from "../../types/tarefas";
import { useState, useEffect } from "react";
import { tempoParaSegundos } from "../../common/utils/time";

interface Props {
  selecionado: Tarefas | undefined;
  setCompletado: () => void;
}

export default function Cronometro({ selecionado, setCompletado }: Props) {
  const [tempo, setTempo] = useState<number>();

  useEffect(() => {
    if (selecionado?.tempo) {
      setTempo(tempoParaSegundos(selecionado.tempo));
    }
  }, [selecionado]);

  function iniciarContagemRegressiva() {
    if (tempo && tempo > 0) {
      const timer = setInterval(() => {
        setTempo((tempoAnterior) => {
          if (tempoAnterior && tempoAnterior > 0) {
            return tempoAnterior - 1;
          } else {
            clearInterval(timer);
            setCompletado();
            return 0;
          }
        });
      }, 1000);
    }
  }

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o Cronômetro</p>
      <div className={style.relogioWrapper}>
        <Relogio tempo={tempo} />
      </div>
      <Botao onClick={iniciarContagemRegressiva}>
        Começar!
      </Botao>
    </div>
  );
}
