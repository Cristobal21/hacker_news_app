import { render } from "@testing-library/react"
import { NewsReactGrid } from "../../src/components/NewsReactGrid"

describe('Test <NewsReactGrid/>', () => { 

    test('Match with snapshot', () => { 
        const { container } = render(<NewsReactGrid/>)
        expect( container ).toMatchSnapshot()
    })
})