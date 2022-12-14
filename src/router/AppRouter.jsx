import { Navigate, Route, Routes } from "react-router-dom"
import { AngularNews, Faves, ReactNews, VuejsNews } from "../pages"

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<AngularNews />} />
                <Route path="faves" element={<Faves />} />
                <Route path="react" element={<ReactNews />} />
                <Route path="angular" element={<AngularNews />} />
                <Route path="vuejs" element={<VuejsNews />} />

                <Route path="/*" element={<Navigate to="/" />} />
            </Routes>
        </>
    )
}
