import React, { useState } from "react";
import "../CSS/BarraAux.css";

import seta_Down from "../Imagens/seta_Down.svg"

export default function BarraAuxi() {
    const [visible, setVisible] = useState(!false)
    return (
        <div id="caixaBarra">
            <nav>
                <ul>
                    <li className="itensUrls"> Em cartaz </li>
                    <li className="itensUrls"> Populares </li>
                    <li className="itensUrls"> Tendências </li>
                    <div id="area_Escolha" onClick={(e) => {
                        e.preventDefault();
                        if (visible === true) {
                            document.getElementById("list_Generos").style.display = "flex";
                            setVisible(!visible)
                        } else {
                            document.getElementById("list_Generos").style.display = "none";
                            setVisible(!visible)
                        };
                    } }>
                        <li className="itensUrls">
                            Gêneros <img src={seta_Down} alt="" />
                            <ul id="list_Generos">
                                <li>Ação</li>
                                <li>Aventura</li>
                                <li>Animação</li>
                                <li>Comédia</li>
                                <li>Cinema TV</li>
                                <li>Crime</li>
                                <li>Documentário</li>
                                <li>Drama</li>
                                <li>Família</li>
                                <li>Fantasia</li>
                                <li>Faroeste</li>
                                <li>Ficção científica</li>
                                <li>História</li>
                                <li>Terror</li>
                                <li>Música</li>
                                <li>Mistério</li>
                                <li>Romance</li>
                            </ul>
                        </li>
                    </div>

                </ul>
            </nav>
        </div>
    )
}

