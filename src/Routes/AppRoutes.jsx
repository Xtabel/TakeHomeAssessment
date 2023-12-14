import { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "../Pages/LandingPage";
import Login from "../Pages/Login";
import SingleItem from "../Components/SingleItem";
import HomeLayout from "../Pages/HomeLayout";

const Preloader = () => {
    return "Loading..."
}

const PageNotFound = () => {
    return "Page not found"
}
function AppRoutes() {
    return (
        <Suspense fallback={<Preloader />}>
            <Router>
                <Routes>
                    <Route path="/" element={<HomeLayout/>}>
                        <Route index element={<LandingPage />} />
                        <Route path="products/:id" element={<SingleItem />} />
                    </Route>
                    <Route path="/login" element={<Login />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </Router>
        </Suspense>
    );
}

export default AppRoutes;
