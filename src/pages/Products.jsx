import React from "react";
import HeaderDashboard from "./template/HeaderDashboard";
import Sidebar from "./template/Sidebar";
import Man from "../assets/products/Man.png";
import Money from "../assets/products/Money.png";
import GooglePay from "../assets/products/GooglePay.png";
import Rajut from "../assets/products/Rajut.png";
import { HiMenuAlt3 } from "react-icons/hi";
import { CiSearch } from "react-icons/ci";


const Products = ()=>{
    let activeStateColor = "#EB5E28";
    let inactiveStateColor = "gray-500";
    return(
        <div>
            <HeaderDashboard/>
            <Sidebar
            dashboard = {inactiveStateColor}
            products = {activeStateColor}
            analytics = {inactiveStateColor}
            orders = {inactiveStateColor}
            settings = {inactiveStateColor}
            />
            <div className="ml-[15rem]">
                {/* Create Products */}
                <div className="m-6">
                    <div className="bg-black text-white flex items-center px-6 h-[163px] overflow-clip rounded-lg">
                        <div className="flex gap-2 col-span-1">
                            <div className="flex flex-col gap-2 ">
                                <img src={Money} alt="" className=" max-w-[153px] rounded-sm" />
                                <img src={GooglePay} alt="" className=" max-w-[153px] rounded-sm" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <img src={Rajut} alt="" className=" max-w-[153px] rounded-sm" />
                                <img src={Man} alt="" className=" max-w-[153px] rounded-sm" />
                            </div>
                            
                        </div>
                        <div className="flex ml-8 flex-col gap-2 col-span-2 w-full ">
                            <h1 className="text-xl">Add your product now</h1>
                            <p className="text-sm text-gray-500">Showcase your products in a beautiful and professional way, complete with detailed descriptions, high-quality images, and customer reviews.</p>
                        </div>
                        <a href="/create-product" className="w-full max-w-[180px]">
                            <button className="bg-primary px-8 py-2 rounded-md">Add Products</button>
                        </a>
                    </div>
                </div>

                {/* Product List */}
                <div className="m-6 mt-16">
                    <p className="text-2xl">Product List</p>
                    <div className="bg-white border border-gray-100 rounded-xl w-full flex flex-col gap-2 mt-4 p-4">
                        <form action="">
                            <div className="flex justify-between w-full">
                                <input type="text" placeholder=" 🔍  Search Transaction"  className="border border-gray-100 py-2 px-4 text-sm" />
                                <div className="flex gap-2">
                                 <select name="" placeholder="Select Urutan" className="border border-gray-100 py-2 px-4 text-sm" id="">
                                    <option>Ascending</option>
                                    <option>Descending</option>
                                    <option>Texas</option>
                                 </select>
                                 <select name="" placeholder="Select Urutan" className="border border-gray-100 py-2 px-4 text-sm" id="">
                                    <option>Sales</option>
                                    <option>Prics</option>
                                 </select>
                                </div>
                            </div>
                        </form>
                        <table class="table-fixed border-separate border-spacing-2 w-full">
                            <thead>
                                <tr>
                                <th className="text-left text-sm text-gray-400 font-normal">Product Name</th>
                                <th className="text-left text-sm text-gray-400 font-normal">Price</th>
                                <th className="text-left text-sm text-gray-400 font-normal">Status</th>
                                <th className="text-left text-sm text-gray-400 font-normal">Sales</th>
                                <th className="text-sm text-gray-400 font-normal text-right">Action</th>
                                </tr>
                            </thead>
                            <tbody className="">
                            <tr>
                            <td className="font-medium">The </td>
                            <td className=" text-gray-600">Malcolm Lockyer</td>
                            <td className=" text-gray-600">Disabled</td>
                            <td className="text-gray-600">1200</td>
                            <td className="flex gap-2 px-0 justify-end">
                                    <button className="border border-primary rounded-md px-6 py-1 text-sm text-primary">Edit</button>
                                    <button className="border border-slate-800 rounded-md px-6 py-1 "><HiMenuAlt3/></button>
                            </td>
                            </tr>
                        </tbody>
                        <tbody className="">
                            <tr>
                            <td className="font-medium">The </td>
                            <td className=" text-gray-600">Malcolm Lockyer</td>
                            <td className=" text-gray-600">Disabled</td>
                            <td className="text-gray-600">1200</td>
                            <td className="flex gap-2 px-0 justify-end">
                                    <button className="border border-primary rounded-md px-6 py-1 text-sm text-primary">Edit</button>
                                    <button className="border border-slate-800 rounded-md px-6 py-1 "><HiMenuAlt3/></button>
                            </td>
                            </tr>
                        </tbody>
                        <tbody className="">
                            <tr>
                            <td className="font-medium">The </td>
                            <td className=" text-gray-600">Malcolm Lockyer</td>
                            <td className=" text-gray-600">Disabled</td>
                            <td className="text-gray-600">1200</td>
                            <td className="flex gap-2 px-0 justify-end">
                                    <button className="border border-primary rounded-md px-6 py-1 text-sm text-primary">Edit</button>
                                    <button className="border border-slate-800 rounded-md px-6 py-1 "><HiMenuAlt3/></button>
                            </td>
                            </tr>
                        </tbody>
                        <tbody className="">
                            <tr>
                            <td className="font-medium">The </td>
                            <td className=" text-gray-600">Malcolm Lockyer</td>
                            <td className=" text-gray-600">Disabled</td>
                            <td className="text-gray-600">1200</td>
                            <td className="flex gap-2 px-0 justify-end">
                                    <button className="border border-primary rounded-md px-6 py-1 text-sm text-primary">Edit</button>
                                    <button className="border border-slate-800 rounded-md px-6 py-1 "><HiMenuAlt3/></button>
                            </td>
                            </tr>
                        </tbody>
                        <tbody className="">
                            <tr>
                            <td className="font-medium">The </td>
                            <td className=" text-gray-600">Malcolm Lockyer</td>
                            <td className=" text-gray-600">Disabled</td>
                            <td className="text-gray-600">1200</td>
                            <td className="flex gap-2 px-0 justify-end">
                                    <button className="border border-primary rounded-md px-6 py-1 text-sm text-primary">Edit</button>
                                    <button className="border border-slate-800 rounded-md px-6 py-1 "><HiMenuAlt3/></button>
                            </td>
                            </tr>
                        </tbody>
                        <tbody className="">
                            <tr>
                            <td className="font-medium">The </td>
                            <td className=" text-gray-600">Malcolm Lockyer</td>
                            <td className=" text-gray-600">Disabled</td>
                            <td className="text-gray-600">1200</td>
                            <td className="flex gap-2 px-0 justify-end">
                                    <button className="border border-primary rounded-md px-6 py-1 text-sm text-primary">Edit</button>
                                    <button className="border border-slate-800 rounded-md px-6 py-1 "><HiMenuAlt3/></button>
                            </td>
                            </tr>
                        </tbody>
                        <tbody className="">
                            <tr>
                            <td className="font-medium">The </td>
                            <td className=" text-gray-600">Malcolm Lockyer</td>
                            <td className=" text-gray-600">Disabled</td>
                            <td className="text-gray-600">1200</td>
                            <td className="flex gap-2 px-0 justify-end">
                                    <button className="border border-primary rounded-md px-6 py-1 text-sm text-primary">Edit</button>
                                    <button className="border border-slate-800 rounded-md px-6 py-1 "><HiMenuAlt3/></button>
                            </td>
                            </tr>
                        </tbody>
                        <tbody className="">
                            <tr>
                            <td className="font-medium">The </td>
                            <td className=" text-gray-600">Malcolm Lockyer</td>
                            <td className=" text-gray-600">Disabled</td>
                            <td className="text-gray-600">1200</td>
                            <td className="flex gap-2 px-0 justify-end">
                                    <button className="border border-primary rounded-md px-6 py-1 text-sm text-primary">Edit</button>
                                    <button className="border border-slate-800 rounded-md px-6 py-1 "><HiMenuAlt3/></button>
                            </td>
                            </tr>
                        </tbody>
                            
                        </table>
                        <div className="flex w-full justify-end items-center gap-2 mt-2">
                            <p className=" text-sm font-medium">Show 10 of 40 Products</p>
                            <button className="rounded-full bg-gray-100 px-2 py-1">1</button>
                            <button className="rounded-full  px-2 py-1">2</button>
                            <button className="rounded-full  px-2 py-1">3</button>
                            <button className="border border-primary rounded-md px-4 py-1 text-xs bg-primary text-white">Next</button>
                        </div>

                    </div>
                    

                </div>
            </div>
        </div>
    )
}

export default Products;