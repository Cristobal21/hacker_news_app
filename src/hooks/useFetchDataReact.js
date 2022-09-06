import { useEffect, useState } from "react"
import { getDataReact } from "../helpers/getDataReact"



export const useFetchDataReact = () => {

    const [newsReact, setNewsReact] = useState([])

    const getNews = async () => {
        const theNews = await getDataReact()
        setNewsReact(theNews)
    }

    useEffect(() => {
        getNews()
    }, [])

    return {
        newsReact
    }
}