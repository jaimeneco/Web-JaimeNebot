import './Header.css';
import { NavLink } from 'react-router-dom'

export const Header = () => {
    return (
        <>
            <header className="Header">
                <nav className="Header-nav">
                    <ul className="Header-navList">
                        <li className="Header-navLink">
                            <NavLink className="Header-navLink" to="/work" title='Ir a Work'>Work</NavLink>
                        </li>
                        <li className="Header-navLink">
                            <NavLink className="Header-navLink" to="/about" title='Ir a About'>About</NavLink>
                        </li>
                    </ul>
                    <div>
                        <NavLink to="/">
                            <img src="/imgs/img-logoB.png" alt="Logotipo" title='Ir a Work' className="Header-logoImage" loading='lazy' />
                        </NavLink>
                    </div>
                    <ul className="Header-navList">
                        <li className="Header-navLink">
                            <NavLink className="Header-navLink" to='https://www.instagram.com/jaimenebot/?hl=es' title='Ir a Instagram'><img src="/imgs/img-instagramB.png" alt="Ir a Instagram" /></NavLink>
                        </li>
                        <li className="Header-navLink">
                            <NavLink className="Header-navLink" to='https://www.linkedin.com/in/jaime-nebot-54132419b/' title='Ir a Linkedin'><img src="/imgs/img-lkdin.png" alt="Ir a Linkedin" /></NavLink>
                        </li>
                        <li className="Header-navLink">
                            <a href="mailto:jaime.nebot.colom@gmail.com" title="Enviar un correo">
                                <img
                                    src="/imgs/img-sobreB.png"
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