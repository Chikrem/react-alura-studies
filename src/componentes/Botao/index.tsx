import React, { Children } from "react";
import style from './Botao.module.scss'

// interface BotaoProps {
//     texto : string;
// }

// const Botao = (props : BotaoProps) => {

//         return (
//             <button className={style.botao}>
//                 {props.texto}
//             </button>
//         )
// }




class Botao extends React.Component <{children: React.ReactNode}> {
    render() {
        return (
            <button className={style.botao}>
                {this.props.children}
            </button>
        )
    }
}

export default Botao;