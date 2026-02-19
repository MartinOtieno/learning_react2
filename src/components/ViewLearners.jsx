import React from 'react';
import { useEffect, useState } from "react"

export default function ViewLearners(){

    const [name, setName] = useState("")

    // syntax of use effect
     // useEffect(function, dependency)
     useEffect (()=>
        console.log("Kelvin"), [name]
    )


    return (
        <div>
            <h2 className="font-bold text-2xl rounded-lg">SUDENTS{name}</h2>
            <input onChange={(e)=>setName(e.target.value)} className="border" type="text" />
        </div>
    );
}

