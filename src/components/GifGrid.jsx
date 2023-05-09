import { GifColumn } from "./index";
import { useFetchGifs } from "../hooks/useFetchGifs";
import PropTypes from "prop-types";

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

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}

export default GifGrid