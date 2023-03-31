import { GifCard } from "./index";

export const GifColumn = ({ images }) => {

    return (
        <div className='column'>
            {
                images.map(image => (
                    <GifCard 
                        key={image.id}
                        {...image}
                    />
                ))
            }
        </div>
    )
}