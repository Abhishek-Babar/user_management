import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
export default function EditForm() {
    const [data, setData] = useState({});
    const [fullAddress, setAddress] = useState(data.address)
    const [contactNum, setContact] = useState(data.contact)
    const address = useRef("");
    const contact = useRef("");
    const showAddressForm = () => {
        const form = document.getElementById("edit-address");
        form.style.display = "inline"
    }
    const showContactForm = () => {
        const form = document.getElementById("edit-contact");
        form.style.display = "inline"
    }
    const hideAddressForm = () => {
        const form = document.getElementById("edit-address");
        form.style.display = "none"
    }
    const hideContactForm = () => {
        const form = document.getElementById("edit-contact");
        form.style.display = "none"
    }
    const setContactFunc = () => {
        setData({ ...data, contact: contact.current.value })
        const form = document.getElementById("edit-contact");
        form.style.display = "none"
    }
    const setAddressFunc = () => {
        setData({ ...data, address: address.current.value })
        const form = document.getElementById("edit-address");
        form.style.display = "none"
    }
    useEffect(() => {
        const data = {
            name: "heelo",
            age: 16,
            class: "10",
            id: 12343,
            school: "Tiranga English School Panchwad",
            parents: "dad",
            schoolID: 3324,
            contact: 23423425,
            address: "sdafaffaf"
        }
        setData(data);
        setAddress(data.address);
        setContact(data.contact)
    }, [])
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className={"text-4xl mb-8"}>Student Dasdboard</h1>
            <article className="h-2/5 w-3/5 border-2 border-black box-border p-4">
                <p className={"flex items-center justify-between"}><span className={"text-xl font-bold"}>Name</span>
                    <span className={"text-xl inline w-4/6"}>{data.name}</span></p>
                <p className={"flex items-center justify-between"}><span className={"text-xl font-bold"}>Age</span>
                    <span className={"text-xl inline w-4/6"}>{data.age}</span></p>
                <p className={"flex items-center justify-between"}><span className={"text-xl font-bold"}>Class</span>
                    <span className={"text-xl inline w-4/6"}>{data.class}</span></p>
                <div className={"relative flex items-center justify-between"}><span className={"text-xl font-bold"}>Address</span>
                    <span className={"text-xl inline w-4/6"}>{data.address}<button onClick={showAddressForm} className={"bg-red-400 text-xs text-white py-2 px-4 rounded ml-6"}>Edit</button></span>
                    <div id={"edit-address"} className={"absolute left-72 bg-white hidden"}>
                        <input ref={address} value={fullAddress} className="border-2 border-black" type="text" onChange={(e) => setAddress(e.target.value)} required></input>
                        <button onClick={setAddressFunc} className={"bg-red-400 text-xs text-white py-2 px-4 rounded ml-6"}>Save</button>
                        <span onClick={hideAddressForm} className={"ml-4 text-lg font-bold cursor-pointer"}>&#10005;</span>
                    </div>
                </div>
                <p className={"flex items-center justify-between"}><span className={"text-xl font-bold"}>Student ID</span>
                    <span className={"text-xl inline w-4/6"}>{data.id}</span></p>
                <p className={"flex items-center justify-between"}><span className={"text-xl font-bold"}>Parents Name</span>
                    <span className={"text-xl inline w-4/6"}>{data.parents}</span></p>
                <p className={"flex items-center justify-between"}><span className={"text-xl font-bold"}>School ID</span>
                    <span className={"text-xl inline w-4/6"}>{data.schoolID}</span></p>
                <div className={"relative flex items-center justify-between"}><span className={"text-xl font-bold"}>Contact Number</span>
                    <span className={"text-xl inline w-4/6"}>{data.contact}<button onClick={showContactForm} className={"bg-red-400 text-xs text-white py-2 px-4 rounded ml-6"}>Edit</button></span>
                    <div id={"edit-contact"} className={"absolute left-72 bg-white hidden"}>
                        <input ref={contact} value={contactNum} className="border-2 border-black" type="number" onChange={(e) => setContact(e.target.value)} required></input>
                        <button onClick={setContactFunc} className={"bg-red-400 text-xs text-white py-2 px-4 rounded ml-6"}>Save</button>
                        <span onClick={hideContactForm} className={"ml-4 text-lg font-bold cursor-pointer"}>&#10005;</span>
                    </div>
                </div>
            </article>
    
                <button className="bg-yellow-500 px-6 py-3 text-white rounded-xl mt-5">
                    Save Changes</button>
        </div>
    )
}