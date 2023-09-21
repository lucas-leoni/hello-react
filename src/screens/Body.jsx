import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";


export default function Body() {
    return (
        <div>
            <NavBar />
            <div className="container"><Outlet />  </div>
            <div className="container"><Footer /></div>
        </div>
    )
}