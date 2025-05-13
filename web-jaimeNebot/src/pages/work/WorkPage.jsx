
import { useState } from "react";
import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import './WorkPage.css'

export const WorkPage = () => {
    const [tabActiva, setTabActiva] = useState("PageWeb");

    return (
        <>
            <Header />

            <main className="Main">
                <div className="Main-Tabs">
                    <ul className="Tabs-buttons">
                        <li
                            data-tab="PageWeb"
                            className={`Tabs-button ${tabActiva === "PageWeb" ? "u-active" : ""}`}
                            onClick={() => setTabActiva("PageWeb")}
                        >
                            Web
                        </li>
                        <li
                            data-tab="PageGames"
                            className={`Tabs-button ${tabActiva === "PageGames" ? "u-active" : ""}`}
                            onClick={() => setTabActiva("PageGames")}
                        >
                            Games
                        </li>
                        <li
                            data-tab="PageDeIl"
                            className={`Tabs-button ${tabActiva === "PageDeIl" ? "u-active" : ""}`}
                            onClick={() => setTabActiva("PageDeIl")}
                        >
                            Designs & Ilustrations
                        </li>
                    </ul>

                    <div className="Tabs-container">
                        <div id="PageWeb" className={`Tabs-contenido ${tabActiva === "PageWeb" ? "u-visible" : ""}`}>
                            <div className="Cards">
                                <div className="Card">
                                    <img className="Card-web" src="../img/projects-web/portada-emergencias.jpg" alt="Imagen ONPIK" />
                                    <div className="Card-text">
                                        <h3 className="Card-h3"><a className="Card-title" title="Ir a Web de ONPIK" href="https://frontend-proyecto-fs-jaime-nebot.vercel.app/">ONPIK</a></h3>
                                    </div>
                                </div>

                                <div className="Card">
                                    <img className="Card-web" src="../img/projects-web/portada-music-player.jpg" alt="Imagen Music Player" />
                                    <div className="Card-text">
                                        <h3 className="Card-h3"><a className="Card-title" title="Ir a Music Player" href="project-single.html?id=2">MUSIC PLAYER</a></h3>
                                    </div>
                                </div>

                                <div className="Card">
                                    <img className="Card-web" src="../img/projects-web/portada-chef.png" alt="Imagen Chef Connect" />
                                    <div className="Card-text">
                                        <h3 className="Card-h3"><a className="Card-title" title="Ir a Chef Connect" href="project-single.html?id=3">CHEF CONNECT</a></h3>
                                    </div>
                                </div>

                                <div className="Card">
                                    <img className="Card-web" src="../img/projects-web/portada-emergencias.jpg" alt="Imagen Emergencias" />
                                    <div className="Card-text">
                                        <h3 className="Card-h3"><a className="Card-title" title="Ir a Web de Emergencias" href="project-single.html?id=1">WEB DE EMERGENCIAS</a></h3>
                                    </div>
                                </div>

                                <div className="Card">
                                    <img className="Card-web" src="../img/projects-web/portada-music-player.jpg" alt="Imagen Music Player" />
                                    <div className="Card-text">
                                        <h3 className="Card-h3"><a className="Card-title" title="Ir a Music Player" href="project-single.html?id=2">MUSIC PLAYER</a></h3>
                                    </div>
                                </div>

                                <div className="Card">
                                    <img className="Card-web" src="../img/projects-web/portada-chef.png" alt="Imagen Chef Connect" />
                                    <div className="Card-text">
                                        <h3 className="Card-h3"><a className="Card-title" title="Ir a Chef Connect" href="project-single.html?id=3">CHEF CONNECT</a></h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                            <div id="PageGames" className={`Tabs-contenido ${tabActiva === "PageGames" ? "u-visible" : ""}`}>
                                <div className="Cards">
                                    <div className="Card">
                                        <img className="Card-game" src="../img/projects-games/piepaptij-nenes.png" alt="Piedra-Papel-Tijera" />
                                        <div className="Card-text">
                                            <h3 className="Card-h3"><a className="Card-title" title="Ir a Piedra, papel o tijera" href="project-single.html?id=4"> Piedra, papel o tijera</a></h3>
                                        </div>
                                    </div>

                                    <div className="Card">
                                        <img className="Card-game" src="../img/projects-games/dia-vs-noche.png" alt="Día-vs-noche" />
                                        <div className="Card-text">
                                            <h3 className="Card-h3"><a className="Card-title" title="Ir a Noche vs Día" href="project-single.html?id=5"> Día VS Noche</a></h3>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div id="PageDeIl" className={`Tabs-contenido ${tabActiva === "PageDeIl" ? "u-visible" : ""}`}>
                                <div className="Cards">
                                    <div className="Card">
                                        <img className="Card-ilustration" src="../img/projects-ilustration/ilus-adidas/adidas-fairfax.jpg" alt="Fairfax Adidas" loading="lazy" />
                                        <h3 className="Card-h3">Print 21cm x 30cm | 20€</h3>
                                        <a className="material-symbols-outlined" title="Comprar" href="./shop.html">¡Comprar!</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </main >

            <Footer />
        </>
    );
};

export default WorkPage;