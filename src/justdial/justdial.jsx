import React, { useState } from "react";
import './justdial.css'
import ServicesSection from "./comps/services";
import CategoryGrid from "./comps/catogory";
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
                    <CategoryGrid/>
                </div>
                <div className="details">
                <ServicesSection/>
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