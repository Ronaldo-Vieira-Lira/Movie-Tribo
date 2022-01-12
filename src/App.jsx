import React from "react";
import Header from "./Components/Header";
import DateImg from "./Components/DateImg";
import BarraAuxi from "./Components/BarraAuxi";

import "./CSS/App.css"

export default function App() {
    return (
        <div id="caixa">
            <Header />
            <BarraAuxi />
            {/* <DateImg /> */}
        </div>
    );
}