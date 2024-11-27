import { Outlet } from "react-router-dom";
import { Header } from "../Component/Header";
import {Footer} from "../Component/Footer";
export const AppLayout=()=>{
    return<>
        <Header/>
        <Outlet/>
        <Footer/>
    </>;
}