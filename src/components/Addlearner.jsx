import React from 'react';
import { useState } from "react"

export default function Addlearner(){

    const [name, setName] = useState("")
    const [age, setAge] = useState("0")
    const [gender, setGender] = useState()

    console.log(gender)

    function handleSubmit(){
        if (age<18 || age>30){
            alert("Age should be between 18 and 30")
        }
    }

    



    return (
        <div className="h-[85vh]">
            <h3 className="font-bold text-2xl">Add Learner</h3>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Gender: {gender}</p>
            <input type='text' onChange={(e)=>setName(e.target.value)} placeholder='Name' className="p-2 rounded-2xl border-green-600 border-2"/> <br />
            <input type='number' onChange={(e)=>setAge(e.target.value)} placeholder='age' className="p-2 rounded-2xl border-green-600 border-2"/> <br/>
            <select onChange ={(e)=> setGender(e.target.value)} className="p-2 rounded-2xl border-green-600 border-2">
                <option value="">Select Gender</option>
                <option value="M">M</option>
                <option value="F">F</option>
            </select> <br/>

            <button onClick={handleSubmit} className="font-semibold px-5 py-3 bg-green-500 rounded-xl text-white">Submit</button>
        </div>
    );
}