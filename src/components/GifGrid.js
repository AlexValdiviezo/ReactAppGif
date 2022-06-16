import React, { Fragment, useEffect, useState } from 'react'
import { useFetchGif } from '../hooks/useFetchGif';


export const GifGrid = ({category}) => {
    
    const [images, setImages] = useState([])

    useFetchGif(category, setImages);

    return (
        <Fragment>
            <h2>{category}</h2>
            <ol key={category} className="card-grid">
                {
                images.map((e, i)=> {
                    let animaciones = ["animate__bounce", "animate__flash", "animate__pulse", "animate__rubberBand", "animate__shakeX", "animate__shakeY", "animate__headShake", "animate__swing", "animate__tada", "animate__wobble", "animate__jello", "animate__heartBeat"];
                    let indice = Math.floor(Math.random() * animaciones.length);
                    let clase = "card animate__animated " + animaciones[indice];
                    return <div className={clase} key={e.id}><center><img src={e.url}/><h3>{e.title}</h3></center></div>
                })
                }
            </ol>
        </Fragment>
    )
}
