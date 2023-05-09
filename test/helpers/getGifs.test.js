import { getGifs } from "../../src/helpers/getGifs"

describe('Tests on getGifs()', () => {

    test('It should return an array of 4 arrays ', async () => {

        const table = await getGifs('One punch');
        const firstColumn = table[0]

        expect(table).toEqual(expect.any(Array));

        expect(table.length).toBe(4);

        expect(firstColumn[0]).toEqual({
            title: expect.any(String),
            url: expect.any(String),
            id: expect.any(String)
        })

    })
})