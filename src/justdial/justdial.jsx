import React, { useState } from "react";
import './justdial.css'
export const Justdial=()=>{
    const [details,setdetails]=useState([
        {
            name:'sajid'
        },
        {
            name:'sajid'
        },
        {
            name:'sajid'
        },
        {
            // name:'sajid'
        },
    ])

    const[features,setfeatures]=useState([
        {},{},{},{},{},{},{},{},{},{},{},{},{},{}
    ])

    const [services,setservices]=useState([
        {},{}
    ])
    return(
        <>
        <div className="container1">
            <div className="head"></div>
            <div className="main">
                <div className="features">
                    {features.map(item=>(
                        <div className="feat"></div>
                    ))}
                </div>
                <div className="details">
                {details.map(item=>(
                    <div className="cards">
                        {/* <p>{item.name}</p> */}
                    </div>
                ))}
                </div>
                <div className="services">
                    {services.map(item=>(
                        <div className="service-cards"></div>
                    ))}
                </div>

            </div>
            
        </div>
        </>
    )
}