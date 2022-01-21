import React, { useState, useEffect } from "react";
import Api from "../Data/Api";
import typeResq from "../Data/TMDB";
import "../CSS/Movie.css"
import Skeleton from '@mui/material/Skeleton';

export default function Movie(props) {

    const [request, setApi_img] = useState()

    useEffect(() => {
        Api
            .get(typeResq(props.type, props.genero))
            .then((resposta) => {
                setApi_img(resposta.data)
            })
            .catch((erro) => {
                console.log("Deu ruim brother" + erro)
            })
    }, []);


    return (
        <>
            {
                request?.results.map((img, id) => {
                    return (
                            <div className="caixaItem">   
                                <img src={`https://image.tmdb.org/t/p/w200${img?.poster_path}`} key={id} />
                                {/* <h3>
                                    { request?.results[id].title}
                                </h3> */}
                            </div>
                    )
                })  

            }
        </>
    );
};