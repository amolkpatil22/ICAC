import { Route, Routes } from "react-router-dom"
import LandingPage from "../pages/landingPage"
import Treatment from "../pages/treatment"
import Technique from "../pages/technique"


function AllRoutes() {

    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/treatment" element={<Treatment />} />
            <Route path="/technique" element={<Technique />} />
        </Routes>
    )
}

export default AllRoutes