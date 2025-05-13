import './Footer.css'
import { NavLink } from 'react-router-dom'

export const Footer = () => {
    return (
        <>
            <footer className="Footer">
                <div className="Footer-content">
                    <NavLink to="/">
                        <img src="/imgs/logoJaimeNebotOscuro.png" alt="Logotipo" title='Ir a Home' className="Footer-logoImage" loading='lazy' />
                    </NavLink>
                    <p className='Footer-text'>© 2025 - Jaime Nebot - Todos los derechos reservados</p>
                </div>
            </footer>
        </>
    );
}