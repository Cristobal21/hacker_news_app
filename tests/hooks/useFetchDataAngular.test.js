import { renderHook, waitFor } from "@testing-library/react"
import { useFetchDataAngular } from "../../src/hooks/useFetchDataAngular"

describe('Test useFetchDataAngular.js', () => { 

    test('Should return the initial state ', () => { 

        const { result } = renderHook(() => useFetchDataAngular())
        const { newsAngular } = result.current
        expect( newsAngular.length ).toBe(0)

    })

    test('should return an array of news', async () => { 

        const { result } = renderHook(() => useFetchDataAngular())

        await waitFor(
            () => expect( result.current.newsAngular.length ).toBeGreaterThan(0)
        )

        const { newsAngular } = result.current

        expect( newsAngular.length ).toBeGreaterThan(0)

    })
})