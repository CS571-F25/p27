import { HashRouter, Route, Routes } from "react-router";
import { ThemeProvider } from "./contexts/ThemeContext";
import HomePage from "./pages/HomePage"
import Navbar from "./components/Navbar"
import Workouts from "./pages/Workouts"
import Profile from "./pages/Profile"
import About from "./pages/About"
import NoMatch from "./pages/NoMatch"
import "./App.css"

function App() {
    return (
        <ThemeProvider>
            <HashRouter>
                <>
                    <Navbar />
                    <div className="main-content">
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/workouts" element={<Workouts />} />
                            <Route path="/profile" element={<Profile />} />
                            <Route path="/about" element={<About />} />
                            <Route path="*" element={<NoMatch />} />
                        </Routes>
                    </div>
                </>
            </HashRouter>
        </ThemeProvider>
    )
}

export default App;
