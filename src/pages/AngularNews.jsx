import { Dropdown } from "../components/Dropdown"
import { NewsAngularGrid } from "../components/NewsAngularGrid"

export const AngularNews = () => {
    return (
        <>
            <Dropdown />
            <div className="container-grid-news">
                <NewsAngularGrid />
            </div>
        </>
    )
}
