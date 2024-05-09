import Header from "../components/commons/Header";
import Navbar from "../components/commons/Navbar";
import {Outlet} from "react-router-dom";
import {editableInputTypes} from "@testing-library/user-event/dist/utils";

function Layout() {
    return(
        <div>
            <Header/>
            <Navbar/>
            <Outlet/>
        </div>
    );
}
export default Layout;