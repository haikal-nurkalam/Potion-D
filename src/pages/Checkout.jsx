import React from "react";
import ImageProduct from "../assets/computer.png";
import Hill from "../assets/Hill.png";

const Checkout = () =>{
    return(
        <div>
            {/* Header */}
            <div className="w-full mt-0 px-4 py-6 bg-slate-950">
                <div className="flex gap-8 items-center justify-center">
                    <h1 className="font-bold font-logoFont text-3xl uppercase text-white">Potion D</h1>
                </div>
            </div>

            {/* Checkout Form */}
            <div className=" max-w-[430px] mx-auto px-4 mt-4 flex flex-col gap-4">
                {/* Products */}
                <div className="bg-white rounded-xl flex w-full justify-between p-4 items-center gap-2">
                    <img src={ImageProduct} className=" object-cover max-w-[120px] rounded-lg border border-gray-300" alt="" />
                    <div className=" flex flex-col gap-1">
                        <h1 className="text-base font-medium">Excel Template for Wedding Planner</h1>
                        <p className=" text-base font-bold">Rp. 150.000</p>
                        <div className="flex gap-1 items-center">
                        <img src={Hill} alt="" className="max-w-[24px] rounded-full object-fill" />
                        <p className=" text-sm font-light text-gray-500">Ardi Rambe</p>
                        </div>
                    </div>
                </div>
                <form action="">
                <div className="bg-white rounded-xl flex flex-col w-full p-4  gap-2">
                    <h1 className="text-base font-medium">Your Information</h1>
                    
                        <div className="flex flex-col gap-1 mt-4">
                            <label htmlFor="productLink" className="text-sm">
                                Name
                            </label>
                            <div class="flex rounded-md ring-gray-300 border border-gray-300 w-full ">
                                <input type="text" name="productLink" id="productLink" class="block flex-1 border-0 bg-transparent py-1.5 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 text-sm" placeholder="Insert your name"></input>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1 mt-4">
                            <label htmlFor="productLink" className="text-sm">
                                Email
                            </label>
                            <div class="flex rounded-md ring-gray-300 border border-gray-300 w-full ">
                                <input type="email" name="productLink" id="productLink" class="block flex-1 border-0 bg-transparent py-1.5 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 text-sm" placeholder="Insert your email"></input>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1 mt-4">
                            <label htmlFor="productLink" className="text-sm">
                                Phone Number
                            </label>
                            <div class="flex rounded-md ring-gray-300 border border-gray-300 w-full ">
                                <input type="email" name="productLink" id="productLink" class="block flex-1 border-0 bg-transparent py-1.5 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 text-sm" placeholder="Insert your phone number"></input>
                            </div>
                        </div>
                    
                </div>
                        
                <div className="bg-white rounded-xl flex flex-col w-full p-4  gap-4 mt-4">
                    <h1 className="text-base font-medium">Payment Method</h1>
                    <details class="group">
                        <summary class="flex items-center gap-3 w-full justify-between font-medium marker:content-none hover:cursor-pointer">
                            {/* <input type="radio" name="paymentType" id="virtualAccount" className="" /> */}
                            <p className="font-light text-sm">Virtual Account</p>
                            <svg class="w-5 h-5 text-gray-500 transition rotate-90 group-open:rotate-180" xmlns="http://www.w3.org/2000/svg"
                                width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                                </path>
                            </svg>
                        </summary>
                        <article class="pb-4">
                            <div class="mt-2 space-y-2">
                                <div class="flex items-center gap-x-3">
                                    <input id="BCA" name="bankType" type="radio" class=" border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                                    <label for="BCA" class="block text-sm font-medium leading-6 text-gray-900">BCA</label>
                                </div>
                                <div class="flex items-center gap-x-3">
                                    <input id="BNI" name="bankType" type="radio" class=" border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                                    <label for="BNI" class="block text-sm font-medium leading-6 text-gray-900">BNI</label>
                                </div>
                                <div class="flex items-center gap-x-3">
                                    <input id="BRI" name="bankType" type="radio" class=" border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                                    <label for="BRI" class="block text-sm font-medium leading-6 text-gray-900">BRI</label>
                                </div>
                            </div>
                        </article>
                    </details>
                    <details class="group">
                        <summary class="flex items-center gap-3 w-full justify-between font-medium marker:content-none hover:cursor-pointer">
                            <p className="font-light text-sm">Credit Card</p>
                            <svg class="w-5 h-5 text-gray-500 transition rotate-90 group-open:rotate-180" xmlns="http://www.w3.org/2000/svg"
                                width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                                </path>
                            </svg>
                        </summary>
                        <article class="pb-4">
                            <div className="flex flex-col gap-1 mt-4">
                                <label htmlFor="productLink" className="text-sm">
                                    Account Number
                                </label>
                                <div class="flex rounded-md ring-gray-300 border border-gray-300 w-full ">
                                    <input type="text" name="productLink" id="productLink" class="block flex-1 border-0 bg-transparent py-1.5 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 text-sm" placeholder="Insert your name"></input>
                                </div>
                            </div>
                            <div className="flex gap-2 flex-wrap w-full">
                                <div className="flex flex-col gap-1 mt-4 w-full">
                                    <label htmlFor="productLink" className="text-sm">
                                        Date
                                    </label>
                                    <div class="flex rounded-md ring-gray-300 border border-gray-300 w-full ">
                                        <input type="text" name="productLink" id="productLink" class="block flex-1 border-0 bg-transparent py-1.5 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 text-sm" placeholder="Insert your name"></input>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-1 mt-4">
                                    <label htmlFor="productLink" className="text-sm">
                                        CVC
                                    </label>
                                    <div class="flex rounded-md ring-gray-300 border border-gray-300 w-full ">
                                        <input type="text" name="productLink" id="productLink" class="block flex-1 border-0 bg-transparent py-1.5 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 text-sm" placeholder="Insert your name"></input>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-1 mt-4">
                                    <label htmlFor="productLink" className="text-sm">
                                        Date
                                    </label>
                                    <div class="flex rounded-md ring-gray-300 border border-gray-300 w-full ">
                                        <input type="text" name="productLink" id="productLink" class="block flex-1 border-0 bg-transparent py-1.5 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 text-sm" placeholder="Insert your name"></input>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </details>
                    <details class="group">
                        <summary class="flex items-center gap-3 w-full justify-between font-medium marker:content-none hover:cursor-pointer">
                            <p className="font-light text-sm">E-Wallet</p>
                            <svg class="w-5 h-5 text-gray-500 transition rotate-90 group-open:rotate-180" xmlns="http://www.w3.org/2000/svg"
                                width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                                </path>
                            </svg>
                        </summary>
                        <article class="pb-4">
                            <div class="flex items-center gap-x-3 mt-4">
                                <input id="ovo" name="E-Wallet" type="radio" class="border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                                <label htmlFor="ovo" className="block text-sm font-medium leading-6 text-gray-900">Ovo</label>
                            </div>
                            <div class="flex items-center gap-x-3 mt-4">
                                <input id="dana" name="E-Wallet" type="radio" class="border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                                <label htmlFor="dana" className="block text-sm font-medium leading-6 text-gray-900">Dana</label>
                            </div>
                        </article>
                    </details>
                </div>
                </form>


                {/* Price List */}
                <div className="bg-white rounded-xl flex flex-col w-full justify-between p-4 items-center gap-2">
                    <div className="w-full flex justify-between items-center">
                        <p className=" text-gray-400">Price</p>
                        <p className=" font-medium ">Rp. 150.000</p>
                    </div>
                    <div className="w-full flex justify-between items-center">
                        <p className=" text-gray-400">Transaction Fee</p>
                        <p className=" font-medium ">Rp. 15.000</p>
                    </div>
                    <div className="w-full flex justify-between items-center">
                        <p className=" text-gray-400">Total</p>
                        <p className=" font-medium ">Rp. 155.000</p>
                    </div>
                </div>

                <div className="bg-white rounded-xl flex flex-col w-full justify-between p-4 items-center gap-2">
                    <div className="w-full flex justify-between items-center">
                        <p className=" text-gray-400 ">Pay Now</p>
                        <p className=" font-semibold text-xl">Rp. 155.000</p>
                    </div>
                    <button className="py-2 bg-primary text-white w-full text-xl font-medium rounded-lg">Pay</button>
                </div>




            </div>
        </div>
    )
}

export default Checkout;