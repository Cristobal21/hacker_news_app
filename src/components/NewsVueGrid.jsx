import { useFetchDataVuejs } from "../hooks/useFetchDataVuejs"
import { NewsVueItem } from "./NewsVueItem"

export const NewsVueGrid = () => {

    const { newsVuejs } = useFetchDataVuejs()
    
    return (
        <div className="container-box-news">
            {
                newsVuejs.map( data => (
                    <NewsVueItem
                        key={data.id}
                        { ...data }
                    />
                ))
            }
        </div>
    )
}
