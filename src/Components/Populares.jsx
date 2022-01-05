import React, { useEffect, useState } from "react";
import Api from "../Data/Api";

export default function Populares() {
    const [abcd, setAb] = useState()
    useEffect(()=> {
        Api
            .get("movie/popular?api_key=e0c140d7c6f45e30c9b139e115958993&language=pt-BR")
            .then((resposta)=> {
                setAb(resposta.data)
            })
            .catch((erro) => {
                console.log("Deu ruim brother")
            })
    },[]);
    const size = 300
    return(
        <>
            <img src={`https://image.tmdb.org/t/p/w${size}${abcd?.results[0].poster_path}`} />
            <h1>{abcd?.results[0].title}</h1>
        </>
    )
}