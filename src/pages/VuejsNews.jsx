import { Dropdown } from "../components/Dropdown"
import { NewsVueGrid } from "../components/NewsVueGrid"

export const VuejsNews = () => {
    return (
        <>
            <Dropdown />
            <div className="container-grid-news">
                <NewsVueGrid />
            </div>
        </>
    )
}
