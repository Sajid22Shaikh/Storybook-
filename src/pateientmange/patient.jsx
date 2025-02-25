import React from "react";
import { Search } from 'lucide-react';

import './patient.css'
export const Patient=()=>{
    return(
        <>
        <div className="pcontainer">
            <div className="pheader"></div> 
            <div className="pcontent">
                <div className="psidebar"></div>
                <div className="pmain">
                    <div className="pque">
                        <div className="psearch">
                            <h2>Patient Queue</h2>
                            <Search/>
                        </div>
                        <div className="pcatogories"></div>
                        <div className="plist"></div>
                    </div>
                    <div className="pdetail"></div>
                </div>
            </div>
        </div>
        </>
    )
}