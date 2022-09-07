import { render } from "@testing-library/react"
import { NewsAngularGrid } from "../../src/components/NewsAngularGrid"

describe('Test <NewsAngularGrid/>', () => { 

    test('Match with snapshot', () => { 
        const { container } = render(<NewsAngularGrid/>)
        expect( container ).toMatchSnapshot()
    })

})