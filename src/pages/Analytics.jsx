import React from "react";
import Sidebar from "./template/Sidebar";
import HeaderDashboard from "./template/HeaderDashboard";
import LinePlot from "./graph/LinePlot";
import { max } from "d3";





const Analytics = () =>{
    let winston = [2020,2021];
    let activeStateColor = "#EB5E28";
    let inactiveStateColor = "gray-500";
    return (
        <div>
            <HeaderDashboard/>
            <Sidebar
            dashboard = {inactiveStateColor}
            products = {inactiveStateColor}
            orders = {inactiveStateColor}
            analytics = {activeStateColor}
            settings = {inactiveStateColor}
            />
            <div className="ml-[15rem]">
                {/* Analytics */}
                <div className="m-6">
                    {/* Traction */}
                    <p className="text-2xl">Traction</p>
                    <div className="grid grid-cols-10 gap-2 mt-2">
                        <div className="col-span-3 p-4 flex flex-col mt-2 bg-white border border-gray-100 rounded-xl h-[273px]">
                            <p className=" font-medium">Transactions</p>
                            <div className="flex flex-col gap-2 align-middle mx-auto my-auto items-center">
                                <p className="text-4xl font-black">1250</p>
                                <p className="text font-sm">Transactions this week</p>
                            </div>
                        </div>
                        <div className="col-span-3 p-4 flex flex-col mt-2 bg-white border border-gray-100 rounded-xl h-[273px]">
                            <p className=" font-medium">User Listed</p>
                            <div className="flex flex-col gap-2 align-middle mx-auto my-auto items-center">
                                <p className="text-4xl font-black">3500</p>
                                <p className="text font-sm">User listed this week</p>
                            </div>
                        </div>
                        <div className="col-span-4 p-4 flex flex-col mt-2 bg-white border border-gray-100 rounded-xl h-[273px]">
                            <p className=" font-medium">Convertion</p>
                            <div className="flex align-middle mx-auto my-auto items-center w-full justify-between p-4 h-full gap-2">
                                <div className="flex flex-col gap-1 justify-center items-center h-full bg-gradient-to-t from-primary/50 to-primary/0 p-2 rounded-lg w-full">
                                    <p className="text-xl font-black">3500</p>
                                    <p className="text-sm text-gray-800 ">Visit</p>
                                </div>
                                <div className="flex flex-col gap-1 justify-center items-center h-full bg-gradient-to-t from-primary/50 to-primary/0 p-2 rounded-lg w-full">
                                    <p className="text-xl font-black">3000</p>
                                    <p className="text-sm text-gray-800 ">Product Sell</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="text-2xl mt-8">Traction</p>
                    <div className="grid grid-cols-10 gap-2 mt-2">
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
                        <div className="col-span-3 p-4 flex flex-col mt-2 bg-white border border-gray-100 rounded-xl h-full">
                            <p className=" font-medium">Transactions</p>
                            <div className="flex flex-col gap-2 align-middle mx-auto my-auto items-center">
                                <p className="text-4xl font-black">1250</p>
                                <p className="text font-sm">Transactions this week</p>
                            </div>
                        </div>
                        <div className="col-span-3 p-4 flex flex-col mt-2 bg-white border border-gray-100 rounded-xl h-full">
                            <p className=" font-medium">Transactions</p>
                            <div className="flex flex-col gap-2 align-middle mx-auto my-auto items-center">
                                <p className="text-4xl font-black">1250</p>
                                <p className="text font-sm">Transactions this week</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    );
}

export default Analytics;