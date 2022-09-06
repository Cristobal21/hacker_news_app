import { useEffect, useState } from "react"
import { useFetchDataVuejs } from "../hooks/useFetchDataVuejs"
import { NewsItem } from "./NewsItem"

export const NewsVueGrid = () => {

    const [newsFilterV, setNewsFilterV] = useState([])
    const { newsVuejs } = useFetchDataVuejs()

    useEffect(() => {
        localStorage.setItem('newsV', JSON.stringify(newsVuejs))
        const news = JSON.parse(localStorage.getItem('newsV'))

        if ( news ) {
            setNewsFilterV(news)
        }
    }, [newsVuejs])
    
    
    
    
    return (
        <div className="container-box-news">
            {
                newsFilterV.map( data => (
                    <NewsItem
                        key={data.id}
                        { ...data }
                    />
                ))
            }
        </div>
    )
    
}
