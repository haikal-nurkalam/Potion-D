import React from "react";
import HeaderDashboard from "./template/HeaderDashboard";
import Sidebar from "./template/Sidebar";
import image13 from "../assets/image-13.png";
import { IoAnalytics,IoPaperPlane } from "react-icons/io5";


const Dashboard=()=>{
    let activeStateColor = "#EB5E28";
    let inactiveStateColor = "gray-500";
    return (
        <div>
            <HeaderDashboard/>
            <Sidebar 
            dashboard = {activeStateColor}
            products = {inactiveStateColor}
            analytics = {inactiveStateColor}
            orders = {inactiveStateColor}
            settings = {inactiveStateColor}
            />
            
            <div className="ml-[15rem]">
                {/* Analytics */}
                <div className="m-6">
                    <p className="text-2xl">Analytics</p>
                    <div className="grid grid-cols-10 gap-2 mt-2">
                        {/* Product Ranks */}
                        <div className="col-span-4 p-4 flex flex-col mt-2 bg-white border border-gray-100 rounded-xl h-full">
                            <p className=" font-medium">Product Ranks</p>
                            <div className="flex justify-between w-full mt-4">
                                <div className="flex gap-2">
                                    <p className=" font-medium text-lg">1</p>
                                    <p className=" font-medium text-lg">MindCraft</p>
                                </div>
                                <p className=" font-semibold text-lg">Rp 15.200.000</p>
                            </div>
                            <div className="flex justify-between w-full mt-2">
                                <div className="flex gap-2">
                                    <p className=" font-medium text-lg">2</p>
                                    <p className=" font-medium text-lg">VocabSpark</p>
                                </div>
                                <p className=" font-semibold text-lg">Rp 15.200.000</p>
                            </div>
                            <div className="flex justify-between w-full mt-2">
                                <div className="flex gap-2">
                                    <p className=" font-medium text-lg">3</p>
                                    <p className=" font-medium text-lg">Budget Hero</p>
                                </div>
                                <p className=" font-semibold text-lg">Rp 15.200.000</p>
                            </div>
                            <div className="flex justify-between w-full mt-2">
                                <div className="flex gap-2">
                                    <p className=" font-medium text-lg">4</p>
                                    <p className=" font-medium text-lg">FitFusion</p>
                                </div>
                                <p className=" font-semibold text-lg">Rp 15.200.000</p>
                            </div>
                            <div className="flex justify-between w-full mt-2">
                                <div className="flex gap-2">
                                    <p className=" font-medium text-lg">5</p>
                                    <p className=" font-medium text-lg">PhotoStory</p>
                                </div>
                                <p className=" font-semibold text-lg">Rp 15.200.000</p>
                            </div>
                        </div>
                        {/* Transactions */}
                        <div className="col-span-3 p-4 flex flex-col mt-2 bg-white border border-gray-100 rounded-xl h-full">
                            <p className=" font-medium">Transactions</p>
                            <div className="flex flex-col gap-2 align-middle mx-auto my-auto items-center">
                                <p className="text-4xl font-black">1250</p>
                                <p className="text font-sm">Transactions this week</p>
                            </div>
                        </div>
                        <div className="col-span-3 p-4 flex flex-col mt-2 bg-white border border-gray-100 rounded-xl h-full">
                            <p className=" font-medium">Sales</p>
                            <div className="flex flex-col gap-2 align-middle mx-auto my-auto items-center">
                                <p className="text-4xl font-black">Rp 25.5 M</p>
                                <p className="text font-sm">Sales this week</p>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Trending Products */}
                <div className="m-6">
                    <p className="text-2xl">Trending Products</p>
                    <div className="grid grid-cols-5 gap-2 mt-2">
                        <div className="p-4 flex flex-col bg-white border border-gray-100 rounded-xl h-full">
                            <img src={image13} alt="" className="w-full max-h-[180px] rounded-lg" />
                            <div className="flex flex-col gap-1 mt-4">
                                <p className="font-medium">MindCraft</p>
                                <p className="font-semibold text-lg">Rp. 120.000</p>
                                <div className="flex gap-2 items-center">
                                    <IoAnalytics size={16} color="#EB5E28"/>
                                    <p className="text-sm text-primary">1200 Views</p>
                                </div>
                            </div>
                            <button className="mt-2 flex justify-center gap-2 py-2 border border-primary text-primary w-full rounded-lg">Share <IoPaperPlane size={24}/></button>
                            <div className="flex gap-2 items-center text-primary"></div>
                        </div>
                        <div className="p-4 flex flex-col bg-white border border-gray-100 rounded-xl h-full">
                            <img src={image13} alt="" className="w-full max-h-[180px] rounded-lg" />
                            <div className="flex flex-col gap-1 mt-4">
                                <p className="font-medium">MindCraft</p>
                                <p className="font-semibold text-lg">Rp. 120.000</p>
                                <div className="flex gap-2 items-center">
                                    <IoAnalytics size={16} color="#EB5E28"/>
                                    <p className="text-sm text-primary">1200 Views</p>
                                </div>
                            </div>
                            <button className="mt-2 flex justify-center gap-2 py-2 border border-primary text-primary w-full rounded-lg">Share <IoPaperPlane size={24}/></button>
                            <div className="flex gap-2 items-center text-primary"></div>
                        </div>
                        <div className="p-4 flex flex-col bg-white border border-gray-100 rounded-xl h-full">
                            <img src={image13} alt="" className="w-full max-h-[180px] rounded-lg" />
                            <div className="flex flex-col gap-1 mt-4">
                                <p className="font-medium">MindCraft</p>
                                <p className="font-semibold text-lg">Rp. 120.000</p>
                                <div className="flex gap-2 items-center">
                                    <IoAnalytics size={16} color="#EB5E28"/>
                                    <p className="text-sm text-primary">1200 Views</p>
                                </div>
                            </div>
                            <button className="mt-2 flex justify-center gap-2 py-2 border border-primary text-primary w-full rounded-lg">Share <IoPaperPlane size={24}/></button>
                            <div className="flex gap-2 items-center text-primary"></div>
                        </div>
                        <div className="p-4 flex flex-col bg-white border border-gray-100 rounded-xl h-full">
                            <img src={image13} alt="" className="w-full max-h-[180px] rounded-lg" />
                            <div className="flex flex-col gap-1 mt-4">
                                <p className="font-medium">MindCraft</p>
                                <p className="font-semibold text-lg">Rp. 120.000</p>
                                <div className="flex gap-2 items-center">
                                    <IoAnalytics size={16} color="#EB5E28"/>
                                    <p className="text-sm text-primary">1200 Views</p>
                                </div>
                            </div>
                            <button className="mt-2 flex justify-center gap-2 py-2 border border-primary text-primary w-full rounded-lg">Share <IoPaperPlane size={24}/></button>
                            <div className="flex gap-2 items-center text-primary"></div>
                        </div>
                        <div className="p-4 flex flex-col bg-white border border-gray-100 rounded-xl h-full">
                            <img src={image13} alt="" className="w-full max-h-[180px] rounded-lg" />
                            <div className="flex flex-col gap-1 mt-4">
                                <p className="font-medium">MindCraft</p>
                                <p className="font-semibold text-lg">Rp. 120.000</p>
                                <div className="flex gap-2 items-center">
                                    <IoAnalytics size={16} color="#EB5E28"/>
                                    <p className="text-sm text-primary">1200 Views</p>
                                </div>
                            </div>
                            <button className="mt-2 flex justify-center gap-2 py-2 border border-primary text-primary w-full rounded-lg">Share <IoPaperPlane size={24}/></button>
                            <div className="flex gap-2 items-center text-primary"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;