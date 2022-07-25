import './header.css'
import logo from '../../images/logo.svg'
import { Link } from 'react-router-dom';

export function HeaderLanding() {
    return (
        <header className='header-landing'>
            <img className='logoHeaderLanding' src={logo} />

            <ul className='menu'>
                <Link to="/home"> <li>Home</li> </Link>
                <Link to="/educacao"> <li>Educação</li> </Link>
                <Link to="/produtos"> <li>Precifição</li> </Link>
                <Link to="/workshop"> <li>Para elas</li> </Link>
            </ul>


            <div className='botoes-header-cta'>
                <Link to="/login"> <button className='button-header1'> Login </button> </Link>
                <Link to="/cadastro"> <button className='button-header2'> Cadastre-se </button> </Link>
            </div>

        </header>
    )
};
