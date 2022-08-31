import { Dropdown } from "../components/Dropdown"
import { NewsReactGrid } from "../components/NewsReactGrid"

export const ReactNews = () => {
    return (
        <>
            <Dropdown />
            <div className="container-grid-news">
                <NewsReactGrid />
            </div>
        </>
    )
}
