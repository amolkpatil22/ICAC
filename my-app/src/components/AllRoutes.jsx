import { Route, Routes } from "react-router-dom"
import LandingPage from "../pages/landingPage"
import Treatment from "../pages/treatment"


function AllRoutes() {

    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/treatment" element={<Treatment />} />
        </Routes>
    )
}

export default AllRoutes