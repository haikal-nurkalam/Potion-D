import React from "react";
import { AiFillHome, AiFillGolden } from "react-icons/ai";
import { FaMoneyBill, FaGear } from "react-icons/fa6";
import { FaBoxes } from "react-icons/fa";
import { MdAnalytics } from "react-icons/md";



const Sidebar = (props) =>{
    
    return (
        <div>
            <div className="absolute flex flex-col gap-4 px-4 py-4 bg-gray-300 w-full max-w-[15rem] h-[100vh]">
                <div className={`flex gap-3 items-center text-${props.dashboard}`}>
                    <AiFillHome size={20} />
                    <a href="/dashboard"><p className={`font-medium`}>Dashboard</p></a>
                </div>
                <div className={`flex gap-3 items-center text-${props.products}`}>
                    <FaBoxes size={20} />
                    <a href="/products"><p className={`font-medium`}>Products</p></a>
                </div>
                <div className={`flex gap-3 items-center text-${props.orders}`}>
                    <FaMoneyBill size={20} />
                    <a href="/orders"><p className=" font-medium ">Orders</p></a>
                </div>
                <div className={`flex gap-3 items-center text-${props.analytics}`}>
                    <MdAnalytics size={20} />
                    <a href="/analytics"><p className=" font-medium">Analytics</p></a>
                </div>
                <div className={`flex gap-3 items-center text-${props.settings}`}>
                    <FaGear size={20} />
                    <a href="/settings"><p className=" font-medium">Settings</p></a>
                </div>
                
                
            </div>
        </div>
    );

    
}
Sidebar.defaultProps = {
    color: "#6b7280",
  };

export default Sidebar;