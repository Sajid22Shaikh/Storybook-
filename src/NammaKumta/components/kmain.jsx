import React from "react";

export const Kmain=()=>{
    contents=[{
        title:"title1",},
    {
        title:"title2",
    },
    {
        title:"title3",
    }]
    return(
        <>
            <div className="kmain">
                (contents.map(([item])=>(
                    <div key={item.title}>
                )))
            </div>
        </>
    )
}