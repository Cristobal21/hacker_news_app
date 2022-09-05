import { useFetchDataReact } from "../hooks/useFetchDataReact"
import { NewsReactItem } from "./NewsReactItem"

export const NewsReactGrid = () => {

    const { newsReact } = useFetchDataReact()
    
    return (
        <div className="container-box-news">
            {
                newsReact.map( data => (
                    <NewsReactItem
                        key={data.id}
                        { ...data }
                    />
                ))
            }
        </div>
    )
}
