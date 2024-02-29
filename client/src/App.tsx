import Header from "./components/Header.tsx";
import {Route, Routes} from "react-router-dom";
import LoginPage from "./pages/LoginPage.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";
import HomePage from "./pages/HomePage.tsx";
import RegisterPage from "./pages/RegisterPage.tsx";

const App = () => {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/home" element={<HomePage/>} errorElement={<NotFoundPage/>}/>
                <Route path="/login" element={<LoginPage/>} errorElement={<NotFoundPage/>}/>
                <Route path="/register" element={<RegisterPage />} errorElement={<NotFoundPage/>} />
            </Routes>
        </>
    )
}

export default App
