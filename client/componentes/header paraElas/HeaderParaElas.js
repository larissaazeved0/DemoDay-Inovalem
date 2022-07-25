import './header.css'
import logo from '../../paginas/paraElas/img-workshop/logo-para elas.svg'

export function HeaderParaElas() {
    return (
        <header className='header-landing'>
            <img className='logoHeaderLanding' src={logo} />
        </header>
    )
};