import React, { useState } from "react";
import "../CSS/Imagens.css";

import Movie from "./Imagens";


export default function Capas(props) {
    return (
        <div id="containerImg">

            <div className="caixa_Genero">
                <h1>{props.typeDate}</h1>
                <div className="caixa_Img">
                    <Movie type={props.tipo} />
                </div>
            </div>
        </div>
    );
};