import React from "react";
import SuccessProduct from "../assets/Success.png"

const SuccessPayment = () =>{
 return(
    <div>
        {/* Header */}
        <div className="w-full mt-0 px-4 py-6 bg-slate-950">
            <div className="flex gap-8 items-center justify-center">
                <h1 className="font-bold font-logoFont text-3xl uppercase text-white">Potion D</h1>
            </div>
        </div>
        <div className="max-w-[920px] lg:mx-auto mx-6 mt-16 bg-white border border-gray-300 rounded-xl p-6 flex flex-col items-center gap-6">
                <img src={SuccessProduct} alt="" className="max-w-[356px]" />
                <div className="flex flex-col gap-2 items-center">
                    <h1 className="md:text-2xl text-xl font-medium text-center">Product Successfully Pay</h1>
                    <p className=" text-gray-400 text-base font-light text-center max-w-[507px]">Congratulations! Your product purchase is complete. You will receive a confirmation email with further details shortly.</p>
                </div>
            </div>
    </div>
 )
}

export default SuccessPayment;