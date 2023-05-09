import { render, screen } from "@testing-library/react";
import { GifCard } from "../../src/components";

describe('Tests on <GifCard />', () => {

    const GifCardsProps = {
        title: 'Saitama GIF',
        url: 'https://media1.giphy.com/media/yo3TC0yeHd53G/200w.gif?cid=261d21f9kx4b2tr4hhxofjbyco998kgrq6b7jt28m6igzklf&rid=200w.gif&ct=g'
    }

    test('Should match the snapshot', () => {


        const { container } = render(<GifCard {...GifCardsProps} />);

        expect(container).toMatchSnapshot();
    })

    test('It should show the image and the indicated ALT', () => {

        render(<GifCard {...GifCardsProps} />)

        const { alt, src } = screen.getByRole("img");

        expect(src).toBe(GifCardsProps.url)
        expect(alt).toBe(GifCardsProps.title)

    })

    test('It should display the title in the component', () => {

        render(<GifCard {...GifCardsProps} />)

        expect(screen.getByText(GifCardsProps.title)).toBeTruthy();

    })
})