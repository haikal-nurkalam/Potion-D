import React from "react";
import HeaderCreation from "./template/HeaderCreation";

const CreateProduct = () =>{
    return (
        <div>
            <HeaderCreation/>
            
            <div className="max-w-[920px] lg:mx-auto mx-6 mt-16 bg-white border border-gray-300 rounded-xl p-6">
                <h1 className="md:text-2xl text-xl font-medium pb-4 border-b border-gray-200">Product Details</h1>
                <div className=" bg-white rounded-lg w-full">
                        <form action="">                                                        
                            <div className="flex flex-col gap-2 mt-4">
                                <label htmlFor="productName">
                                    Product Name
                                </label>
                                <div class="flex rounded-md ring-gray-300 w-full border border-gray-300 ">
                                    <input type="text" name="productName" id="productName" class="block flex-1 border-0 bg-transparent py-1.5 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0" placeholder="Input your Account Name Here"></input>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2 mt-4">
                                <label htmlFor="productLink">
                                    Link
                                </label>
                                <div class="flex rounded-md ring-gray-300 w-full border border-gray-300 ">
                                    <span class="flex pl-2 select-none items-center pl-3sm:text-sm text-primary">www.potiond.com/checkout/</span>
                                    <input type="text" name="productLink" id="productLink" class="block flex-1 border-0 bg-transparent py-1.5 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0" placeholder="Insert your link here"></input>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2 mt-4">
                                <label htmlFor="productPrice">
                                    Price
                                </label>
                                <div class="flex rounded-md ring-gray-300 w-full border border-gray-300 ">
                                    <span class="flex pl-2 select-none items-center pl-3sm:text-sm text-gray-400 font-semibold">Rp</span>
                                    <input type="text" name="productPrice" id="productPrice" class="block flex-1 border-0 bg-transparent py-1.5 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0" placeholder="Insert your price in rupiah here (example : 100000)"></input>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2 mt-4">
                                <label htmlFor="productDescription">
                                    Description
                                </label>
                                <div class="flex rounded-md ring-gray-300 w-full border border-gray-300 ">
                                    <textarea name="productDescription" id="productDescription" class="block flex-1 border-0 bg-transparent py-1.5 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 pb-8" placeholder="Descript your product here" ></textarea>
                                    {/* <input type="text" name="productDescription" id="productDescription" class="block flex-1 border-0 bg-transparent py-1.5 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0" placeholder="Input your Account Name Here"></input> */}
                                </div>
                            </div>
                            <div className="flex flex-col gap-2 mt-4">
                                <label htmlFor="productImage">
                                    Upload Image
                                </label>
                                <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                    <div class="text-center">
                                    <svg class="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clip-rule="evenodd" />
                                    </svg>
                                    <div class="mt-4 flex text-sm leading-6 text-gray-600">
                                        <label for="productImage" class="relative cursor-pointer rounded-md bg-white font-semibold text-primary focus-within:outline-none focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 hover:text-primary">
                                        <span>Upload a file</span>
                                        <input id="productImage" name="productImage" type="file" class="sr-only"></input>
                                        </label>
                                        <p class="pl-1">or drag and drop</p>
                                    </div>
                                    <p class="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex pt-4 mt-8 border-t border-gray-200 w-full justify-between items-center flex-wrap gap-2">
                                <p className="text-gray-300 md:text-base text-sm font-light">If you have filled everything out and sure, you can add the product.</p>
                                <a href="/create-product-success" className="lg:w-[30%] w-full"><button className="w-full text-center bg-primary text-white text-lg py-2 rounded-lg">Save</button></a>
                            </div>
                            
                            
                        </form>

                    </div>

            </div>
        </div>
    )
}

export default CreateProduct;