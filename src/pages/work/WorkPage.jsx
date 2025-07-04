
import { useState } from "react";
import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import './WorkPage.css'

export const WorkPage = () => {
    const [tabActiva, setTabActiva] = useState("PageWeb");

    return (
        <>
            <Header />

            <main className="Main-workContent">
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
                            Ilustrations
                        </li>
                    </ul>

                    <div className="Tabs-container">
                        <div id="PageWeb" className={`Tabs-contenido ${tabActiva === "PageWeb" ? "u-visible" : ""}`}>
                            <div className="Cards">
                                <a className="Card" title="Ir a Web de ONPIK" href="https://frontend-proyecto-fs-jaime-nebot.vercel.app/">
                                    <img className="Card-web" src="/imgs/imgs-web/img-onpik.png" alt="Imagen ONPIK" />
                                    <p className="Card-p">ONPIK</p>
                                </a>

                                <a className="Card" title="Ir a Web de Chef Connect" href="https://web-chef-connect-git-main-jaimes-projects-7e668735.vercel.app">
                                    <img className="Card-web" src="/imgs/imgs-web/img-chefConnect.png" alt="Imagen Chef Connect" />
                                    <p className="Card-p">CHEF CONNECT</p>
                                </a>

                                <a className="Card" title="Ir a Web de Rick and Morty" href="https://actividad5-fs-rick-and-morty-git-main-jaimes-projects-7e668735.vercel.app">
                                    <img className="Card-web" src="/imgs/imgs-web/img-rickMorty.png" alt="Imagen Rick and Morty" />
                                    <p className="Card-p">API Rick and Morty</p>
                                </a>
                            </div>
                        </div>

                        <div id="PageGames" className={`Tabs-contenido ${tabActiva === "PageGames" ? "u-visible" : ""}`}>
                            <div className="Cards">
                                <a className="Card" title="Ir a juego Piedra, Papel o Tijera" href="https://game-ppt-git-main-jaimes-projects-7e668735.vercel.app">
                                    <img className="Card-web" src="/imgs/imgs-web/img-ppt.png" alt="Imagen Piedra, papel o tijera" />
                                    <p className="Card-p">Piedra, papel o tijera</p>
                                </a>

                                <a className="Card" title="Ir a Juego de contador" href="https://game-contador-git-main-jaimes-projects-7e668735.vercel.app/">
                                    <img className="Card-web" src="/imgs/imgs-web/img-cont.png" alt="Imagen Sol VS Luna" />
                                    <p className="Card-p">Sol VS Luna</p>
                                </a>

                                <a className="Card" title="Ir a The Blooming Game" href="https://game-flor-git-main-jaimes-projects-7e668735.vercel.app">
                                    <img className="Card-web" src="/imgs/imgs-web/img-bloom.png" alt="Imagen Blooming Game" />
                                    <p className="Card-p">The Blooming Game</p>
                                </a>

                            </div>
                        </div>

                        <div id="PageDeIl" className={`Tabs-contenido ${tabActiva === "PageDeIl" ? "u-visible" : ""}`}>
                            <div className="Cards">
                                <div className="Card">
                                    <img className="Card-ilustration" src="/imgs/imgs-ilustrations/adidas/FAIRFAX.jpg" alt="Imagen Fairfax" loading="lazy" />
                                    <p className="Card-p">Adidas project: Benny Fairfax</p>
                                </div>
                                <div className="Card">
                                    <img className="Card-ilustration" src="/imgs/imgs-ilustrations/adidas/MCCOY.jpg" alt="Imagen Mccoy" loading="lazy" />
                                    <p className="Card-p">Adidas project: Blondey Mccoy</p>
                                </div>
                                <div className="Card">
                                    <img className="Card-ilustration" src="/imgs/imgs-ilustrations/adidas/GONZALES.jpg" alt="Imagen Gonzales" loading="lazy" />
                                    <p className="Card-p">Adidas project: Mark Gonzales</p>
                                </div>
                                <div className="Card">
                                    <img className="Card-ilustration" src="/imgs/imgs-ilustrations/adidas/DILAST3.jpg" alt="Imagen Adidas" loading="lazy" />
                                    <p className="Card-p">Adidas project: YOU</p>
                                </div>
                                <div className="Card">
                                    <img className="Card-ilustration" src="/imgs/imgs-ilustrations/black/BLACK1.jpg" alt="Imagen Black1" loading="lazy" />
                                    <p className="Card-p">B&W project: sketch 1</p>
                                </div>
                                <div className="Card">
                                    <img className="Card-ilustration" src="/imgs/imgs-ilustrations/black/BLACK2.jpg" alt="Imagen Black2" loading="lazy" />
                                    <p className="Card-p">B&W project: sketch 2</p>
                                </div>
                                <div className="Card">
                                    <img className="Card-ilustration" src="/imgs/imgs-ilustrations/black/BLACK3.jpg" alt="Imagen Black3" loading="lazy" />
                                    <p className="Card-p">B&W project: sketch 3</p>
                                </div>
                                <div className="Card">
                                    <img className="Card-ilustration" src="/imgs/imgs-ilustrations/black/BLACK4.jpg" alt="Imagen Black4" loading="lazy" />
                                    <p className="Card-p">B&W project: sketch 4</p>
                                </div>
                                <div className="Card">
                                    <img className="Card-ilustration" src="/imgs/imgs-ilustrations/cs/CS1.jpg" alt="Imagen CS1" loading="lazy" />
                                    <p className="Card-p">Draw your city project: sketch 1</p>
                                </div>
                                <div className="Card">
                                    <img className="Card-ilustration" src="/imgs/imgs-ilustrations/cs/CS2.jpg" alt="Imagen CS2" loading="lazy" />
                                    <p className="Card-p">Draw your city project: sketch 2</p>
                                </div>
                                <div className="Card">
                                    <img className="Card-ilustration" src="/imgs/imgs-ilustrations/cs/CS3.jpg" alt="Imagen CS3" loading="lazy" />
                                    <p className="Card-p">Draw your city project: sketch 3</p>
                                </div>
                                <div className="Card">
                                    <img className="Card-ilustration" src="/imgs/imgs-ilustrations/cs/CS4.jpg" alt="Imagen CS4" loading="lazy" />
                                    <p className="Card-p">Draw your city project: sketch 4</p>
                                </div>
                                <div className="Card">
                                    <img className="Card-ilustration" src="/imgs/imgs-ilustrations/varios/GALLO.jpg" alt="Imagen Gallo" loading="lazy" />
                                    <p className="Card-p">Rooster</p>
                                </div>
                                <div className="Card">
                                    <img className="Card-ilustration" src="/imgs/imgs-ilustrations/varios/ROSSI.jpg" alt="Imagen Rossi" loading="lazy" />
                                    <p className="Card-p">Valentino Rossi</p>
                                </div>
                                <div className="Card">
                                    <img className="Card-ilustration" src="/imgs/imgs-ilustrations/varios/SABINA.jpg" alt="Imagen Sabina" loading="lazy" />
                                    <p className="Card-p">Joaquín Sabina</p>
                                </div>
                                <div className="Card">
                                    <img className="Card-ilustration" src="/imgs/imgs-ilustrations/varios/SKULL.jpg" alt="Imagen Skull" loading="lazy" />
                                    <p className="Card-p">Zombie boy</p>
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