import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import './AboutPage.css'
import { Link } from "react-router-dom";

export const AboutPage = () => {
    return (
        <>
            <Header />
            <main className="Main-aboutContent">
                <img className="Main-aboutImg" src="/imgs/img-about-me.png" alt="" />
                <p className="Main-aboutText">¡Hola! Soy Jaime y soy Desarrollador Front-end Junior especializado en el stack MERN y en Next.js. Con dominio de JavaScript, HTML5 y CSS3, cuento con experiencia en la creación y desarrollo de páginas web, banners y mails, logrando así productos digitales responsive optimizados en distintos dispositivos que cuentan con código y componentes limpios y escalables.<br/><br/> Especialmente interesado en la creación de experiencias digitales atractivas, funcionales y orientadas al usuario, mi perfil integra una fuerte sensibilidad por el diseño gráfico y web, permitiéndome transformar prototipos en experiencias reales.<br/><br/>
                Aspiro a integrarme en un entorno profesional donde seguir fortaleciendo mis conocimientos y contribuir al desarrollo de soluciones tecnológicas innovadoras.</p><br />
                <div>
                    <p className="Main-aboutTitle">De las ideas al código...</p>
                    <p className="Main-aboutText">Mi camino profesional comenzó en el ámbito de la creatividad y la comunicación. Tras graduarme en Publicidad y Relaciones Públicas, trabajé en un proyecto de agencia de comunicación, donde descubrí el poder de convertir ideas en marcas. Más tarde, en el CEEI de Castellón, me acerqué al ecosistema startup, entendiendo cómo la tecnología y la estrategia digital pueden transformar negocios desde su base.</p><br />
                    <p className="Main-aboutText">Mi paso por Declarando Asesores fue clave para desarrollar una visión más analítica y orientada al cliente. Como SDR y Account Executive, aprendí a detectar necesidades reales, ofrecer soluciones y entender el valor de una experiencia digital funcional y bien diseñada. Fue allí donde nació mi interés por crear herramientas y no solo comercializarlas.</p><br />
                    <p className="Main-aboutText">Ese impulso me llevó a formarme como desarrollador web, combinando mi perfil creativo con habilidades técnicas. En el CEI Valencia aprendí a construir aplicaciones completas, desde la idea y el diseño en Figma hasta el desarrollo en React, NextJS, Express o MongoDB. Hoy busco seguir creciendo en proyectos donde diseño, tecnología y experiencia de usuario se unan con propósito.</p>
                </div>
                <p className="Main-aboutAction">Si has llegado hasta aquí, <a className="Link-action" href="mailto:jaime.nebot.colom@gmail.com" title="Enviar correo">¿por qué no hablamos? </a>🚀</p>

            </main>
            <Footer />
        </>
    );
}
export default AboutPage;