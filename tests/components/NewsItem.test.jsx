import { render, screen } from "@testing-library/react"
import { NewsItem } from "../../src/components/NewsItem"

describe('Test in <NewsItem/>', () => {

    const author = 'Cristobal'
    const created = '2022-09-06'
    const title = 'Hello world'
    const url = 'https://beta.crunchyroll.com/es/series/GRMG8ZQZR/one-piece'

    test('Match with snapshot', () => {
        const { container } = render(<NewsItem title={title} url={url} created={created} author={author}/>)
        expect( container ).toMatchSnapshot()
    })

    test('Should display the title', () => {
        render(<NewsItem title={title} url={url} created={created} author={author}/>)
        expect( screen.getByText( title ) ).toBeTruthy()
    })
})