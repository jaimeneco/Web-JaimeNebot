import './Footer.css'
import { NavLink } from 'react-router-dom'

export const Footer = () => {
    return (
        <>
            <footer className="Footer">
                <div className="Footer-content">
                    <NavLink to="/">
                        <img src="/imgs/img-logoB.png" alt="Logotipo" title='Ir a Home' className="Footer-logoImage" loading='lazy' />
                    </NavLink>
                    <p className='Footer-text'>© {new Date().getFullYear()} - Jaime Nebot - Todos los derechos reservados</p>
                </div>
            </footer>
        </>
    );
}