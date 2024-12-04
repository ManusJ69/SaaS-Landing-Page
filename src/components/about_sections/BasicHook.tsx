"use client"
import React, { useState, useEffect } from 'react'

function BasicHook() {
    const [count, setCount] = useState(0)
    const [data, setData] = useState([])

    useEffect( () => {
        fetch(`https://jsonplaceholder.typicode.com/users/${count}`)
            .then(res => res.json())
            .then(data => setData(data));
    }, [count]);

    console.log(data);
    
    return (
        <>
        <section className="pt-8 pb-20 md:pt-5 md:pb-10 overflow-x-clip">
            <div className="container">

                <div className="flex justify-center mt-5">
                    <div className="tag">
                        BasicHook
                    </div>
                </div>

                <div className="flex justify-center mt-5">
                    <div className="tag">
                        {count}
                    </div>
                </div>

                <div className="flex justify-center mt-5">
                    <button
                        className="border rounded bg-black text-white"
                        onClick={() => setCount((count) => count + 1)}
                    >
                        Click me
                    </button>
                </div>

            </div>
        </section>
        </>
    )
}

export default BasicHook