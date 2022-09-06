import { useEffect, useState } from "react"
import { useFetchDataVuejs } from "../hooks/useFetchDataVuejs"
import { NewsVueItem } from "./NewsVueItem"

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
                    <NewsVueItem
                        key={data.id}
                        { ...data }
                    />
                ))
            }
        </div>
    )
    
}
