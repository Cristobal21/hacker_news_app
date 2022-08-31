import { Route, Routes } from "react-router-dom"
import { All, Faves, ReactNews } from "../pages"

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<All />} />
                <Route path="faves" element={<Faves />} />
                <Route path="react" element={<ReactNews />} />
            </Routes>
        </>
    )
}
