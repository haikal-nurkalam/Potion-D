import React from "react";
import HeaderDashboard from "./template/HeaderDashboard";
import Sidebar from "./template/Sidebar";
import Hill from "../assets/Hill.png";
import { FaPenFancy } from "react-icons/fa6";

const Settings = ()=>{
    let activeStateColor = "#EB5E28";
    let inactiveStateColor = "gray-500";
    return (
        <div>
            <HeaderDashboard/>
            <Sidebar
            dashboard = {inactiveStateColor}
            products = {inactiveStateColor}
            orders = {inactiveStateColor}
            analytics = {inactiveStateColor}
            settings = {activeStateColor}
            />
            <div className="ml-[15rem]">
                <div className="m-6">
                    <div className="flex gap-2 items-center">
                        <a href="/settings">
                            <button className="text-white bg-black rounded-full px-5 py-2">Profile</button>
                        </a>
                        <a href="/settingsPassword">
                            <button className="text-black border border-black rounded-full px-5 py-2">Password</button>
                        </a>
                        <a href="/settingsBank">
                            <button className="text-black border border-black rounded-full px-5 py-2">Bank Account</button>
                        </a>
                    </div>
                    <div className=" bg-white rounded-lg w-full mt-8 p-4">
                        <form action="">
                            <div className="flex gap-2 items-center">
                                <img src={Hill} alt="" className="max-w-[96px]" />
                                <label for="file-upload">
                                <span className="flex gap-1 text-primary items-center">Change Photo<FaPenFancy/></span>
                                <input id="file-upload" name="file-upload" type="file" class="sr-only"></input>
                                </label>
                            </div>
                            <div className="flex flex-col gap-2 mt-4">
                                <label htmlFor="Name">
                                    Name
                                </label>
                                <div class="flex rounded-md ring-gray-300 w-full border border-gray-300">
                                    <input type="text" name="username" id="username" class="block flex-1 border-0 bg-transparent py-1.5 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0" placeholder="Input Your Name"></input>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2 mt-4">
                                <label htmlFor="Phone">
                                    Phone Number
                                </label>
                                <div class="flex rounded-md ring-gray-300 w-full border border-gray-300 bg-gray-200">
                                    <input type="text" name="Phone" id="Phone" class="block flex-1 border-0 bg-transparent py-1.5 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0" placeholder="6288811122" disabled></input>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2 mt-4">
                                <label htmlFor="email">
                                    Email
                                </label>
                                <div class="flex rounded-md ring-gray-300 w-full border border-gray-300 bg-gray-200">
                                    <input type="email" name="email" id="email" class="block flex-1 border-0 bg-transparent py-1.5 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0" placeholder="haikaln@gmail.com" disabled></input>
                                </div>
                            </div>
                            <button className="w-full text-center bg-primary text-white text-lg py-2 rounded-lg mt-4">Save</button>
                            
                        </form>

                    </div>


                </div>
            </div>
            
        </div>
    );
}

export default Settings;