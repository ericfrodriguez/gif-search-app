import { useState } from "react"
import { AddCategory, GifGrid} from "./components";


const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch']);

    const categoryExists = (newCategory) => {
        const matchCategory = new RegExp(newCategory, 'i');

        return categories.some(cat => matchCategory.test(cat))
    }

    /**
     * @param {String} newCategory New category to render
     */
    const handleAddCategory = (newCategory) => {


        if (categoryExists(newCategory)) return;

        setCategories([newCategory, ...categories])
    }

    return (
        <>
            <h1>Gif Expert</h1>
            <AddCategory
                onNewCategory={handleAddCategory}
            />
            {
                categories.map((category) => (
                    <GifGrid
                        key={category}
                        category={category}
                    />
                ))
            }
        </>
    )
}

export default GifExpertApp