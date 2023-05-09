import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

jest.mock('../../src/hooks/useFetchGifs');

describe('Tests on <GifGrid />', () => {

    const category = 'One Punch'

    test('It should initially display the loading', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })

        render(<GifGrid category={category} />)

        expect(screen.getByText(category)).toBeTruthy();
        expect(screen.getByText('Cargando...')).toBeTruthy();
    })

    test('It should display items when loading images', () => {

        const gifs = [
            [{
                id: 'ABC',
                title: 'Saitama',
                url: 'https://localhost/saitama.jpg'
            },
            {
                id: '123',
                title: 'Demon Slayer',
                url: 'https://localhost/tanjiro.jpg'
            }]
        ];

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        })


        render(<GifGrid category={category} />)
        // screen.debug();
        expect(screen.getAllByRole('img').length).toBe(2);

    })

})