import { HashRouter, Route, Routes } from "react-router";
import { ThemeProvider } from "./contexts/ThemeContext";
import HomePage from "./pages/home"
import Navbar from "./components/navbar/Navbar"
import Workouts from "./pages/workouts/Workouts"
import About from "./pages/about/About"
import NoMatch from "./pages/failsafe/NoMatch"
import "./App.css"
import QuizHome from "./pages/quiz";

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
                            <Route path="/about" element={<About />} />
                            <Route path="/quiz" element={<QuizHome />} />
                            <Route path="*" element={<NoMatch />} />
                        </Routes>
                    </div>
                </>
            </HashRouter>
        </ThemeProvider>
    )
}

export default App;
