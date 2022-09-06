import { useEffect, useState } from "react"
import { useFetchDataReact } from "../hooks/useFetchDataReact"
import { NewsReactItem } from "./NewsReactItem"

export const NewsReactGrid = () => {

    const [newsFilterR, setNewsFilterR] = useState([])
    const { newsReact } = useFetchDataReact()


    useEffect(() => {
        localStorage.setItem('newsR', JSON.stringify(newsReact))
        const news = JSON.parse(localStorage.getItem('newsR'))

        if ( news ) {
            setNewsFilterR(news)
        }

    }, [newsReact])
    

    return (
        <div className="container-box-news">
            {
                newsFilterR.map(data => (
                    <NewsReactItem
                        key={data.id}
                        {...data}
                    />
                ))
            }
        </div>
    )

}
