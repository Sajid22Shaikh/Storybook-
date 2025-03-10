import React from "react";
import './NammaKumta.css'
import { Kmain } from "./components/kmain";

export const NammaKumta=()=>{
    return(
        <>
        <div className="kcontainer">
            <div className="kheading">
                <input type="text" placeholder="Search Here" />
            </div>
            <div className="kmain"><Kmain/></div>
            <div className="kfooter">footer</div>
        </div>
        </>
    )
}