import React from "react";
import "./Header.css";

import Icone from "../Imagens/icone.svg"
import Search from "../Imagens/search.svg"

export default function Header() {
    return (
        <header>
            <nav>
                <h1 id="titulo"> MVTB <img src={Icone} id="icone" /> </h1>
                <form id="pesquisa">
                    <input type="search" placeholder="Buscar por um Filme, Série ou Pessoa..." /> 
                    <button type="submit" id="btnSearch">
                        <img src={Search} />
                    </button>
                </form>
                <ul>
                    <li>
                        <button className="menuHeader"> Filmes </button>
                    </li>
                    <li>
                        <button className="menuHeader"> Séries </button>
                    </li>
                    <li>
                        <button className="menuHeader"> Tv </button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}