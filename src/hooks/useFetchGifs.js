import { useEffect, useState } from "react"
import { getGifs } from '../helpers/getGifs'

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getGifs(category)
            .then(gifs => {
                setImages(gifs)
                setIsLoading(false)
            })
    }, [])


    return {
        images,
        isLoading
    }
}