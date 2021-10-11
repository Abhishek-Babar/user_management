import Link from 'next/link'
import { useEffect, useState } from 'react';
import 'tailwindcss/tailwind.css'
export default function UserPane() {
    const [data, setData] = useState([])
    useEffect(() => {
        const data = {
            name: "heelo",
            age: 16,
            class: "10",
            id: 12343,
            school: "Tiranga English School Panchwad",
        }
        setData(data);
    }, [])
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className={"text-4xl mb-8"}>Student Dasdboard</h1>
            <article className="h-1/3 w-3/5 border-2 border-black box-border p-4">
                <p><span className={"text-xl font-bold underline text-green-400"}>User profile</span></p>
                <p className={"flex items-center justify-between"}><span className={"text-xl font-bold"}>Name</span>
                    <span className={"w-4/6 text-xl inline"}>{data.name}</span></p>
                <p className={"flex items-center justify-between"}><span className={"text-xl font-bold"}>Class</span>
                    <span className={"w-4/6 text-xl inline"}>{data.class}</span></p>
                <p className={"flex items-center justify-between"}><span className={"text-xl font-bold"}>ID</span>
                    <span className={"w-4/6 text-xl inline"}>{data.id}</span></p>
                <p className={"flex items-center justify-between"}><span className={"text-xl font-bold"}>School</span>
                    <span className={"w-4/6 text-xl inline"}>{data.school}</span></p>
                <p className={"flex items-center justify-between"}><span className={"text-xl font-bold"}>Age</span>
                    <span className={"w-4/6 text-xl inline"}>{data.age}</span></p>
            </article>
            <Link href={"/edit"}>
                <button className="bg-yellow-500 px-6 py-3 text-white rounded-xl mt-5">
                    Edit User Profile</button>
            </Link>
        </div>

    )
}
