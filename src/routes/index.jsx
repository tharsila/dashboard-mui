import { Navigate, Route, Routes } from "react-router-dom"

export const AppRoutes  = () => {
    return (
        <Routes>
            <Route path="/pagina-inicial" element={<h1>Pagina Inicial</h1>} />
            <Route path="*" element={<Navigate to="/pagina-inicial"/>} />
        </Routes>
    )
}