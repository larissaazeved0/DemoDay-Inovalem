import './botaoInscrever.css'
import { Link } from 'react-router-dom';

export function BotaoInscrever() {
    return (
        <>
            <Link to="/cadastro"> <button className="botao-inscrever"> Inscreva-se </button> </Link>
        </>
    )
}


export function BotaoInscreverElas() {
    return (
        <>
            <Link to="/cadastro"> <button className="botao-inscrever-elas"> Inscreva-se </button> </Link>
        </>
    )
} 