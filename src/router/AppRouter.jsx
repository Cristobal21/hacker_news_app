import { Route, Routes } from "react-router-dom"
import { All, Faves } from "../pages"

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<All />} />
                <Route path="faves" element={<Faves />} />
            </Routes>
        </>
    )
}
