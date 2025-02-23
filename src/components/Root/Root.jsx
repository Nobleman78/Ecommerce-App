import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import MainPart from "../MainPart/MainPart";





const Root = () => {
    return (
        <div className="container-fluid w-100">
            <Header></Header>
            <MainPart></MainPart>
            
            <Outlet></Outlet>
            
        </div>
    );
};

export default Root;