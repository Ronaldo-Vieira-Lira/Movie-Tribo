import React, { useEffect, useState } from "react";
import Api from "../Data/Api";

export default function Populares() {
    const[resp, setResp] = useState()

    const[urlResq, setUrlresq] = useState() /* Url de requisição */


    const size = 300
    const urlImg = "https://image.tmdb.org/t/p/w${TAMANHO}${POR?.POR[0].poster_path"    
    const list_Genres_Id = [
            28 /* Ação */ ,
            12 /* Aventura */ ,
            16 /* Animação */ ,
            35 /* Comédia */ ,
            80 /* Crime */ ,
            99 /* Documentário */ ,
            18 /*  Drama */ ,
            10751 /* Família  */ ,
            14 /*  Fantasia  */ ,
            36 /*  História  */ ,
            27 /*  Terror  */ ,
            10402 /* Música */ ,
            9648 /* Mistério */ ,
            10749 /* Romance */ ,
            878 /* Ficção científica */ ,
            10770 /* Cinema TV */ , 
            10752 /* Guerra */ ,
            37 /* Faroeste */ ,
        ]
    const api_Key = "e0c140d7c6f45e30c9b139e115958993"

    function typeDados(resq) {
        switch(resq){
            case "popular":
                setUrlresq(`movie/popular?api_key=${api_Key}&language=pt-BR`)
                break
            case "trending_all_week":
                setUrlresq(`/trending/all/week?api_key=${api_Key}&language=pt-BR`)
                break
            case "trending_movie_week":
                setUrlresq(`/trending/movie/week?api_key=${api_Key}&language=pt-BR`)
                break
            case "trending_tv_week":
                setUrlresq(`/trending/tv/week?api_key=${api_Key}&language=pt-BR`)
                break
            case "discover":
                setUrlresq(`discover/movie?with_genres=28?api_key=${api_Key}&language=pt-BR`)
                break
            
        }
    } 

    useEffect(()=> {
        Api
            .get(urlResq)
            .then((resposta)=> {
                setResp(resposta.data)
            })
            .catch((erro) => {
                console.log("Deu ruim brother")
            })
    },[]);

    return(
        {/* <>
            <img src={`https://image.tmdb.org/t/p/w${size}${abcd?.results[0].poster_path}`} />
            <h1>{abcd?.results[0].title}</h1>
        </> */}
    )
}

/* 
    Url tendencias: /trending/{media_type}/{time_window}
    Url filmes alternativos: /movie/changes
    Url barra de pesquisa: https://api.themoviedb.org/3/search/movie?api_key=e0c140d7c6f45e30c9b139e115958993&language=pt-BR&query= OQ DESEJA!

*/