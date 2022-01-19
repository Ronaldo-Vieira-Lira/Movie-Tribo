import React, { useState, useEffect } from "react";
import Api from "../Data/Api";
import typeResq from "../Data/TMDB";


export default function Movie(props) {
    
    const [api_Img, setApi_img] = useState()

    useEffect(() => {
        Api
            .get(typeResq("popular",props.num_Page))
            .then((resposta) => {
                setApi_img(resposta.data)
            })
            .catch((erro) => {
                console.log("Deu ruim brother")
            })
    }, []); 

    return (
        <>
            {
                api_Img?.results.map((img, id) => {
                    return (
                        <div className="caixaItem">
                            <img src={`https://image.tmdb.org/t/p/w200${img?.poster_path}`}  key={id}/>
                        </div>
                    )
                })
            }
        </>
    );
};