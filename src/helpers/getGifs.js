import { columnizeGifs } from "./columnizeGifs";
import { getEnvironments } from "./getEnvironments";

export const getGifs = async (category) => {

    try {
        const { VITE_API_KEY } = getEnvironments();
        const limit = 16;

        const url = `https://api.giphy.com/v1/gifs/search?api_key=${VITE_API_KEY}&q=${category}&limit=${limit}`

        const response = await fetch(url);

        const { data } = await response.json();

        const gifs = data.map(img => ({
            id: img.id,
            title: img.title,
            url: img.images.fixed_width.url
        }));

        return columnizeGifs(gifs, 4)
    } catch (error) {
        throw new Error(error.message)
    }

}