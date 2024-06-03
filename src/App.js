import React from "react";
import ReactDom from "react-dom/client";
import Front from "./components/Front";
import Feature from "./components/Feature";
import Footer from "./components/Footer";

const AppLayout =()=> {
    return(
        <div>
         
            <Front/>
            <Feature/>
            <Footer/>
        </div>
    )
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)