import './Header.css';
import { NavLink } from 'react-router-dom'

export const Header = () => {
    return (
        <>
            <header className="Header">
                <div>
                    <NavLink to="/">
                        <img src="/imgs/logoJaimeNebotOscuro.png" alt="Logotipo" title='Ir a Home' className="Header-logoImage" loading='lazy' />
                    </NavLink>
                </div>
                <nav className="Header-nav">
                    <ul className="Header-navList">
                        <li className="Header-navLink">
                            <NavLink className="Header-navLink" to='https://www.instagram.com/jaimenebot/?hl=es' title='Ir a Instagram'><img src="/imgs/img-instagram.png" alt="Ir a Instagram" /></NavLink>
                        </li>
                        <li className="Header-navLink">
                            <NavLink className="Header-navLink" to="/work" title='Ir a Work'>Work</NavLink>
                        </li>
                        <li className="Header-navLink">
                            <NavLink className="Header-navLink" to="/about" title='Ir a About'>About</NavLink>
                        </li>

                        <li className="Header-navLink">
                            <a href="mailto:jaime.nebot.colom@gmail.com" title="Enviar un correo">
                                <img
                                    src="/imgs/img-sobre.png"
                                    alt="Icono de email"
                                    style={{ width: "24px", height: "24px", verticalAlign: "middle" }}
                                />
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}