import { render } from "@testing-library/react"
import { NewsVueGrid } from "../../src/components/NewsVueGrid"

describe('Test <NewsVueGrid/>', () => { 

    test('Match with snapshot', () => { 
        const { container } = render(<NewsVueGrid/>)
        expect( container ).toMatchSnapshot()
    })
})