import { renderHook, waitFor } from "@testing-library/react"
import { useFetchDataVuejs } from "../../src/hooks/useFetchDataVuejs"

describe('Test useFetchDataVuejs.js', () => { 

    test('Should return the initial state ', () => { 

        const { result } = renderHook(() => useFetchDataVuejs())
        const { newsVuejs } = result.current
        expect( newsVuejs.length ).toBe(0)

    })

    test('should return an array of news', async () => { 

        const { result } = renderHook(() => useFetchDataVuejs())

        await waitFor(
            () => expect( result.current.newsVuejs.length ).toBeGreaterThan(0)
        )

        const { newsVuejs } = result.current

        expect( newsVuejs.length ).toBeGreaterThan(0)

    })
})