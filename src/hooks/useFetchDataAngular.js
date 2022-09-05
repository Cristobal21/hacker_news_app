import { useEffect, useState } from "react"
import { getDataAngular } from "../helpers/getDataAngular"



export const useFetchDataAngular = () => {

    const [newsAngular, setNewsAngular] = useState([])

    const getNews = async () => {
        const theNews = await getDataAngular()
        setNewsAngular(theNews)
    }

    useEffect(() => {
        getNews()
    }, [])


    return {
        newsAngular
    }
}