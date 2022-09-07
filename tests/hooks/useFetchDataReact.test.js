import { renderHook, waitFor } from "@testing-library/react"
import { useFetchDataReact } from "../../src/hooks/useFetchDataReact"

describe('Test useFetchDataReact.js', () => { 

    test('Should return the initial state ', () => { 

        const { result } = renderHook(() => useFetchDataReact())
        const { newsReact } = result.current
        expect( newsReact.length ).toBe(0)

    })

    test('should return an array of news', async () => { 

        const { result } = renderHook(() => useFetchDataReact())

        await waitFor(
            () => expect( result.current.newsReact.length ).toBeGreaterThan(0)
        )

        const { newsReact } = result.current

        expect( newsReact.length ).toBeGreaterThan(0)

    })
})