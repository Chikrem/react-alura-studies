import Botao from "../Botao";
import Relogio from "./Relogio";
import style from "./Cronometro.module.scss";
import { Tarefas } from "../../types/tarefas";
import { useState } from "react";
import { tempoParaSegundos } from "../../common/utils/date";

interface Props {
  selecionado: Tarefas | undefined
}

export default function Cronometro({ selecionado }: Props) {
  const [tempo, setTempo] = useState<number>();
  if(selecionado?.tempo) {
    setTempo(tempoParaSegundos(selecionado?.tempo));
  }
  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o Cronômetro</p>
      Tempo: {tempo}
      <div className={style.relogioWrapper}>
        <Relogio />
      </div>
      <Botao>
        Começar!
      </Botao>
    </div>
  )
}
