import React from "react";
import "../CSS/BarraAux.css";

export default function BarraAuxi() {
    return (
        <div id="caixaBarra">
            <nav>
                <ul>
                    <li className="itensUrls">Todos</li>
                    <li className="itensUrls">Populares</li>
                    <li className="itensUrls">Tendências</li>
                </ul>
            </nav>
        </div>
    )
}

/* 
    Url tendencias: /trending/{media_type}/{time_window}
    Url filmes alternativos: /movie/changes
*/