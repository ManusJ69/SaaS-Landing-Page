"use client";
import React, { useState, useEffect } from 'react';

// กำหนดประเภทของข้อมูลจาก API
interface UserData {
    id: number;
    name: string;
    username: string;
    email: string;
}

function BasicHook() {
    const [count, setCount] = useState<number>(0);
    const [data, setData] = useState<UserData | null>(null); // ใช้ null ถ้าไม่มีข้อมูลเริ่มต้น

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${count}`)
            .then(res => res.json())
            .then((data: UserData) => setData(data))
            .catch((error) => console.error("Error fetching data:", error));
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
                            onClick={() => setCount((prevCount) => prevCount + 1)}
                        >
                            Click me
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default BasicHook;
