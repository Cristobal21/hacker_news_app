import { useEffect, useState } from "react"
import { getDataVuejs } from "../helpers/getDataVuejs"



export const useFetchDataVuejs = () => {

    const [newsVuejs, setNewsVuejs] = useState([])

    const getNews = async () => {
        const theNews = await getDataVuejs()
        setNewsVuejs(theNews)
    }

    useEffect(() => {
        getNews()
    }, [])

    return {
        newsVuejs
    }
}