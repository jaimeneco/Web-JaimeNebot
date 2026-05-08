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
                <p className="Main-aboutText">
                ¡Hola! Soy Jaime, perfil con experiencia en <strong>tecnología y negocio</strong>, combinando <strong>desarrollo web (stack MERN) y soluciones digitales</strong>.<br />
                Me caracterizo por un enfoque analítico y orientado a la resolución de problemas. He trabajado directamente con clientes B2B y B2C, entendiendo sus necesidades y proponiendo soluciones digitales adaptadas, lo que me ha dado una visión práctica de cómo la tecnología impacta en procesos y resultados.<br />
                Interesado en la consultoría digital, aporto una visión técnica combinada con una buena comprensión de las necesidades del cliente y del negocio.</p><br />
                <div>
                    <p className="Main-aboutTitle">De las ideas al código...</p>
                    <p className="Main-aboutText">Mi camino profesional comenzó en el ámbito de la creatividad y la comunicación. Tras graduarme en Publicidad y Relaciones Públicas, trabajé en un proyecto de agencia de comunicación, donde descubrí el poder de convertir ideas en marcas. Más tarde, en el CEEI de Castellón, me acerqué al ecosistema startup, entendiendo cómo la tecnología y la estrategia digital pueden transformar negocios desde su base.</p><br />
                    <p className="Main-aboutText">Mi paso por Declarando Asesores fue clave para desarrollar una visión más analítica y orientada al cliente. Como SDR y Account Executive, aprendí a detectar necesidades reales, ofrecer soluciones y entender el valor de una experiencia digital funcional y bien diseñada. Fue allí donde nació mi interés por crear herramientas y no solo comercializarlas.</p><br />
                    <p className="Main-aboutText">Ese impulso me llevó a formarme como desarrollador web, combinando mi perfil creativo con habilidades técnicas. En el CEI Valencia aprendí a construir aplicaciones completas, desde la idea y el diseño en Figma hasta el desarrollo en React, NextJS, Express o MongoDB.</p>
                    <p className="Main-aboutText">Posteriormente, pasé al lado más técnico con mi experiencia en Producción Digital en la agencia WPP Production, donde trabajé en proyectos reales orientados a cliente, consolidando mi perfil entre negocio y tecnología.</p>
                    <p className="Main-aboutText">En la actualidad, trabajo como Salesforce Marketing Cloud Developer en NATEEVO (grupo VASS) desarrollando soluciones digitales escalables, bien integradas y alineadas con objetivos de cliente en entornos exigentes.</p>
                </div>
                <p className="Main-aboutAction">Si has llegado hasta aquí y tienes alguna propuesta, <a className="Link-action" href="mailto:jaime.nebot.colom@gmail.com" title="Enviar correo">¿por qué no hablamos? </a>🚀</p>

            </main>
            <Footer />
        </>
    );
}
export default AboutPage;