import React from 'react';
import { useEffect, useState } from "react"

export default function ViewLearners(){

    const [name, setName] = useState("")
    const [posts, setPosts] =useState([])

    // syntax of use effect
     // useEffect(function, dependency)
     useEffect (()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then( res=>res.json() )
        .then( (data)=>{

            setPosts(data)
            console.log(data)
        } )
     }, [])

     console.log("post", "posts")

    return (
        <div>
            <h2 className="font-bold text-2xl rounded-lg">SUDENTS: {name}</h2>
            <input onChange={(e)=>setName(e.target.value)} className="border" type="text" />
            {
                posts.map((post, index)=>(
                    <div key={index}>
                        <h1>{post.title}</h1>
                        <p>{post.body}</p>
                    </div>
                ))
            }
        </div>
    );
}

