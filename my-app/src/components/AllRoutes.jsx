import { Route, Routes } from "react-router-dom"
import LandingPage from "../pages/landingPage"
import Treatment from "../pages/treatment"
import Technique from "../pages/technique"
import Blog from "../pages/blog"
import Contacts from "../pages/contacts"
import Appointment from "../pages/appoinment"
import AppointmentForm from "../pages/appoinment"


function AllRoutes() {

    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/treatment" element={<Treatment />} />
            <Route path="/technique" element={<Technique />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/appointment" element={<AppointmentForm />} />
        </Routes>
    )
}

export default AllRoutes