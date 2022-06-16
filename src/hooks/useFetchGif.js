import { useEffect, useState } from "react"
import { getGif } from "../helpers/getGif"



export const useFetchGif = (category, setImages) =>{
    useEffect( () => {
        let isMount = true;
        const setImageAsync = async() =>{
            const images = await getGif(category);
            if(isMount){
                setImages(images);
            }
        }
        setImageAsync();
        return () => { isMount = false}
    },[category]);
}