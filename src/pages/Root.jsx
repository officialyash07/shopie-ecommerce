import { Outlet } from "react-router-dom";

import Header from "../components/UI/Header";

const Root = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
};

export default Root;
