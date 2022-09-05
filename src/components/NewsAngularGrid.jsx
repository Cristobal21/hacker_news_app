import { useFetchDataAngular } from "../hooks/useFetchDataAngular"
import { NewsAngularItem } from "./NewsAngularItem"

export const NewsAngularGrid = () => {

    const { newsAngular } = useFetchDataAngular()
    
    return (
        <div className="container-box-news">
            {
                newsAngular.map( data => (
                    <NewsAngularItem
                        key={data.id}
                        { ...data }
                    />
                ))
            }
        </div>
    )
}
