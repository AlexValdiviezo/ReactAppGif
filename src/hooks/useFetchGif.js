import { useEffect, useState } from "react"
import { getGif } from "../helpers/getGif"



export const useFetchGif = (category, setImages) =>{
    useEffect( () => {
        const setImageAsync = async() =>{
            setImages(await getGif(category));
        }
        setImageAsync();
    },[category]);
}