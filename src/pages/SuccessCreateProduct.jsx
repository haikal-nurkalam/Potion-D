import React from "react";
import HeaderCreation from "./template/HeaderCreation";
import SuccessProduct from "../assets/Success.png"
import { MdContentCopy } from "react-icons/md";

const SuccessCreateProduct = () =>{
    return(
        <div>
            <HeaderCreation/>
            <div className="max-w-[920px] lg:mx-auto mx-6 mt-16 bg-white border border-gray-300 rounded-xl p-6 flex flex-col items-center gap-6">
                <img src={SuccessProduct} alt="" className="max-w-[356px]" />
                <div className="flex flex-col gap-2 items-center">
                    <h1 className="md:text-2xl text-xl font-medium text-center">Product Successfully Created</h1>
                    <p className=" text-gray-400 text-base font-light text-center">You've completed the product creation process. Your product is now available here</p>
                    <div className="flex gap-2">
                        <p className=" text-base font-base text-center">www.potiond.com/x-wedding-planner</p>
                        <button className="text-primary"><MdContentCopy/></button>
                    </div>
                </div>
                <a href="/products"><button className="text-center bg-primary text-white text-base py-1.5 px-12 rounded-lg">Back to Product</button></a>
            </div>
        </div>
    )
}

export default SuccessCreateProduct;