import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"


describe('Tests on <AddCategory />', () => {

    test('It should change the value in the <input type="text" />', () => {

        render(<AddCategory onNewCategory={() => { }} />)

        const input = screen.getByRole('textbox')

        const eventOptions = {
            target: {
                value: 'Demon slayer'
            }
        }

        fireEvent.input(input, eventOptions);

        expect(input.value).toBe('Demon slayer')


    })

    test('It should call onNewCategory if the input has a value of', () => {

        const inputValue = 'Saitama';

        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory} />)

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        const inputEventOptions = {
            target: {
                value: inputValue
            }
        }
        fireEvent.input(input, inputEventOptions);
        fireEvent.submit(form);

        expect(input.value).toBe('');

        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);
    })

    test('It should not call onNewCategory if the input is empty', () => {

        const inputValue = '';

        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory} />)

        const form = screen.getByRole('form');

        fireEvent.submit(form);

        expect(onNewCategory).toHaveBeenCalledTimes(0);
        expect(onNewCategory).not.toHaveBeenCalled();
    })
})