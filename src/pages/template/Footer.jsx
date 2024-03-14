import {React, useState} from "react";

const Footer = ()=>{
    return (
        <div className="w-full lg:px-16 px-4 py-2 mt-[150px] mb-[80px] grid lg:grid-cols-4 gap-12 flex-wrap">
            <div className="flex flex-col col-span-2">
                <p className="text-lg text-gray-300">&#169; 2024</p>
                <p className="text-2xl font-logoFont font-semibold ">Potion D</p>
            </div>
            <div className="grid lg:grid-cols-3 lg:gap-12 gap-8 col-span-2">
                <div>
                    <ul className="flex flex-col gap-4">
                        <li className=" text-gray-500 font-normal">Features</li>
                        <li className=" font-medium"><a href="">Create Product</a></li>
                        <li className=" font-medium"><a href="">Share</a></li>
                        <li className=" font-medium"><a href="">Withdraw</a></li>
                        <li className=" font-medium"><a href="">Sales</a></li>
                        <li className=" font-medium"><a href="">Analytics</a></li>
                    </ul>
                </div>
                <div>
                    <ul className="flex flex-col gap-4">
                        <li className=" text-gray-500 font-normal">Our Story</li>
                        <li className=" font-medium"><a href="">Statistics</a></li>
                        <li className=" font-medium"><a href="">Our Creator</a></li>
                    </ul>
                </div>
                <div>
                    <ul className="flex flex-col gap-4">
                        <li className=" text-gray-500 font-normal">Need Help</li>
                        <li className=" font-medium"><a href="">Contact Us</a></li>
                        <li className=" font-medium"><a href="">Help Center</a></li>
                        <li className=" font-medium"><a href="">FAQ</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Footer;