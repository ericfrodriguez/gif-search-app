import { GifColumn } from "./index";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            <div className="row">
                {
                    isLoading && <h2>Cargando...</h2>
                }
                {
                    images.map((column, index) => (
                        <GifColumn
                            key={index}
                            images={column}
                        />
                    ))
                }
            </div>
        </>
    )
}

export default GifGrid