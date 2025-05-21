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
                <p className="Main-aboutText">¡Muy buenas! Soy Jaime, desarrollador Full Stack con una sólida base en creatividad y diseño. Especialmente interesado en el desarrollo Frontend, me gusta crear y desarrollar experiencias digitales atractivas y funcionales.
                Mi formación y mis experiencias laborales me permiten interpretar las necesidades del cliente, entender y desarrollar los puntos claves en un briefing y generar propuestas creativas alineadas con los objetivos. Todo esto, junto con los conocimientos técnicos adquiridos en el Máster en Full Stack Development, hacen que pueda desarrollar y presentar proyectos digitales de principio a fin, desde la idea inicial hasta su implementación final.
                Además, me encantaría trabajar en un entorno en el que seguir fortaleciendo mis habilidades en Backend para convertirme en un desarrollador más completo.</p><br/>
                <div>
                    <p className="Main-aboutTitle">De las ideas al código...</p>
                    <p className="Main-aboutText">Mi camino profesional comenzó en el ámbito de la creatividad y la comunicación. Tras graduarme en Publicidad y Relaciones Públicas, trabajé en un proyecto de agencia de comunicación, donde descubrí el poder de convertir ideas en marcas. Más tarde, en el CEEI de Castellón, me acerqué al ecosistema startup, entendiendo cómo la tecnología y la estrategia digital pueden transformar negocios desde su base.</p><br/>
                    <p className="Main-aboutText">Mi paso por Declarando Asesores fue clave para desarrollar una visión más analítica y orientada al cliente. Como SDR y Account Executive, aprendí a detectar necesidades reales, ofrecer soluciones y entender el valor de una experiencia digital funcional y bien diseñada. Fue allí donde nació mi interés por crear herramientas y no solo comercializarlas.</p><br/>
                    <p className="Main-aboutText">Ese impulso me llevó a formarme como Full Stack Developer, combinando mi perfil creativo con habilidades técnicas. En el CEI Valencia aprendí a desarrollar aplicaciones completas, desde la idea y el diseño en Figma hasta el desarrollo en React, NextJS, Express o MongoDB. Hoy busco seguir creciendo en proyectos donde diseño, tecnología y experiencia de usuario se unan con propósito.</p>
                </div>
                <p className="Main-aboutAction">Si has llegado hasta aquí, <a className="Link-action" href="mailto:jaime.nebot.colom@gmail.com" title="Enviar correo">¿por qué no hablamos? </a>🚀</p>
                
            </main>
            <Footer />
        </>
    );
}
export default AboutPage;