import React from "react";
import style from "./Botao.module.scss";

interface BotaoProps {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

const Botao: React.FC<BotaoProps> = ({ children, type = "button", onClick }) => {
  return (
    <button onClick={onClick} type={type} className={style.botao}>
      {children}
    </button>
  );
};

export default Botao;
