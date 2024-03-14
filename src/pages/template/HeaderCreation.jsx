import {React, useState} from "react";
import Hill from "../../assets/Hill.png";
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai";
import { IoIosArrowRoundBack } from "react-icons/io";


const HeaderCreation = ()=>{
    const [nav,setNav] = useState(true);
    const handleNav = () =>{
        setNav(!nav);
    }
    return (
        <div>
            <div className="w-full mt-0 px-4 py-6 bg-slate-950">
                <div className="flex gap-8 items-center justify-between">
                    <a href="/products"><button className=" border border-white rounded-lg px-3 py-1 text-white flex items-center"><IoIosArrowRoundBack size={24}/>Product List</button></a>
                    <div className="lg:flex hidden items-center justify-between gap-2">
                        <p className="text-white font-medium text-lg">Ardi Rambe</p>
                        <img src={Hill} alt="" className="w-[48px] h-[48px]" />
                    </div>        
                    <div onClick={handleNav} className="lg:hidden block">
                        {/* Anything above ukuran medium icon ini di hide, dibawah medium, icon ini di munculin sebagai display block  */}
                        {!nav ? <AiOutlineClose size={20} color="white"/> : <AiOutlineMenu size={20} color="white"/>}
                    
                    </div>
                </div>

            </div>
            <div className={!nav ? 'fixed left-0 top-0 w-[70%] h-full border-r px-4 pt-4 text-white border-r-gray-300 bg-black ease-in-out duration-500' : 'fixed left-[-100%]'}>
            <h1 className=" text-3xl font-bold font-logoFont">Potion-D</h1>
            <div className="flex items-center gap-2 mt-8">
                <img src={Hill} alt="" className="w-[48px] h-[48px]" />
                <p className="text-white font-medium text-lg">Ardi Rambe</p>
            </div>
                <ul className="my-4 uppercase">
                    <li className="py-4 border-b border-gray-300">Withdrawal</li>
                    <li className=" py-4 border-b border-gray-300">Settings</li>
                    <li className=" py-4 border-b text-red-400 border-gray-300">Log Out</li>
                </ul>
            </div>
        </div>
    );
}

export default HeaderCreation;