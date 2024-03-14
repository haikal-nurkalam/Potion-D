import {React, useState} from "react";
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai";
import { Outlet, Link } from "react-router-dom";


const HeaderRegister = ()=>{
    const [nav,setNav] = useState(true);
    const handleNav = () =>{
        setNav(!nav);
    }
    return (
        <div>
            {/* header */}
            <div className="w-full lg:px-16 px-4 my-8">
                <div className="flex gap-8 items-center justify-between">
                    <div className="flex gap-8 items-center">
                        <h1 className="font-bold font-logoFont text-3xl uppercase"><Link to="/">Potion D</Link></h1>
                    
                        <p className=" font-light lg:flex hidden">Discover</p>
                        <p className=" font-light lg:flex hidden">Features</p>
                    </div>
                    <div className="flex gap-4 items-center">
                    <p className=" text-primary lg:flex hidden">Already have an account?</p>
                    <a href="/login"><button className=" border lg:flex hidden border-[#EB5E28] px-4 py-2 text-[#EB5E28] rounded-md">Sign In</button></a>
                    </div>
                    <div onClick={handleNav} className="lg:hidden block">
                        {/* Anything above ukuran medium icon ini di hide, dibawah medium, icon ini di munculin sebagai display block  */}
                        {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
                    
                    </div>
                </div>
                <div className={!nav ? 'fixed left-0 top-0 w-[70%] h-full border-r px-4 pt-4 border-r-gray-300 bg-white ease-in-out duration-500' : 'fixed left-[-100%]'}>
                <h1 className=" text-3xl font-bold font-logoFont">Potion-D</h1>
                <ul className="my-4 uppercase">
                    <li className="py-4 border-b border-gray-300">Discover</li>
                    <li className=" py-4 border-b border-gray-300">Features</li>
                </ul>
                <p className="text-primary mb-2 text-center">Already have an account</p>
                <a href="/login"><button className="border w-full border-[#EB5E28] px-4 py-2 text-[#EB5E28] rounded-md">Sign In</button></a>
            </div>
            </div>
            <Outlet />
        </div>
    )
}

export default HeaderRegister;