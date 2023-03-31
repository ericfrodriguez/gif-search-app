export const columnizeGifs = (items, columns) => {

    return items.reduce((table, item, index) => {
        let column = index % columns;
        table[column] = table[column] || [];
        table[column].push(item);

        return table;
    }, [])

}