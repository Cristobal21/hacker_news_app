import { useEffect, useState } from "react"
import { useFetchDataAngular } from "../hooks/useFetchDataAngular"
import { NewsAngularItem } from "./NewsAngularItem"


export const NewsAngularGrid = () => {

    const [newsFilterA, setNewsFilterA] = useState([])
    const { newsAngular } = useFetchDataAngular()

    useEffect(() => {
        localStorage.setItem('newsA', JSON.stringify(newsAngular))
        const news = JSON.parse(localStorage.getItem('newsA'))

        if ( news ) {
            setNewsFilterA(news)
        }
    }, [newsAngular])
    
    return (
        <div className="container-box-news">
            {
                newsFilterA.map(data => (
                    <NewsAngularItem
                        key={data.id}
                        {...data}
                    />
                ))
            }
        </div>
    )
}
