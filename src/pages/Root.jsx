import { Outlet } from "react-router-dom";

import Header from "../components/UI/Header";
import Footer from "../components/UI/Footer";

const Root = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};

export default Root;
