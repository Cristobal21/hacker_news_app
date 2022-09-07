import { getDataAngular } from "../../src/helpers/getDataAngular"

describe('Test getDataAngular.js', () => { 

    test('Should return an array', async () => {

        const newsAngular = await getDataAngular()
        expect( newsAngular.length ).toBeGreaterThan( 0 )
        expect( newsAngular[0] ).toEqual({
            id: expect.any( String ),
            author: expect.any( String ),
            title: expect.any( String ),
            url: expect.any( String ),
            created: expect.any( String ),
        })
        
    })
})