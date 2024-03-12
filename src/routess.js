import { Routes, Route } from "react-router-dom"
import Gbshse from "./Pages/Projects/Gbshse"
import GbshseAp from "./Pages/Projects/GbshseAP"
import Spotify from "./Pages/Projects/spotify"
import Gamestop from "./Pages/Projects/gamestop"
import { Home } from "./Pages/Home"
import Login from "./Pages/Login"
import Animated from "./Pages/Animated"
import GbhsheStudentReg from "./Pages/Projects/gbshseStudentReg"
export const Routess = () => {
    return (
        <>
            <Routes>
            <Route path="/" element={<Animated />}>
                    <Route index element={<Home />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="projects/gbshse" element={<Gbshse />}></Route>
                    <Route path="projects/gbshseAp" element={<GbshseAp />}></Route>
                    <Route path="projects/spotify" element={<Spotify />}></Route>
                    <Route path="projects/gamestop" element={<Gamestop />}></Route>
                    <Route path="projects/gbshse-student-registration" element={<GbhsheStudentReg />}></Route>
                </Route>
            </Routes>

        </>
    )
} 