import { getDataReact } from "../../src/helpers/getDataReact"

describe('Test getDataReact.js', () => { 

    test('Should return an array', async () => {

        const newsReact = await getDataReact()
        expect( newsReact.length ).toBeGreaterThan( 0 )
        expect( newsReact[0] ).toEqual({
            id: expect.any( String ),
            author: expect.any( String ),
            title: expect.any( String ),
            url: expect.any( String ),
            created: expect.any( String ),
        })
        
    })
})