import React from "react";
import Header from "./template/Header";
import Footer from "./template/Footer";
import image11 from "../assets/image2.png";
import image13 from "../assets/image-13.png";
import image14 from "../assets/image-14.png";
import image15 from "../assets/image-15.png";


const LandingPage = ()=>{
    return (
        <div>
            <Header/>

            {/* Hero */}
            <div className="flex flex-col items-center gap-4 h-screen mt-[-96px] justify-center">
                {/* harus pake mt-96, biar pas ditengah */}
                <h1 className="lg:text-6xl md:text-4xl text-4xl  lg:max-w-[620px] text-center px-4">Create your product with confidence</h1>
                <p className=" text-secondary text-center lg:text-2xl text-xl">Buy, sell and explore digital products</p>
                <a href="/register"><button className=" bg-primary px-12 py-4 mt-4 text-white rounded-full">Get Started</button></a>
            </div>

            {/* Simpliest way to sell */}
            <div className="flex flex-col items-center gap-8 mt-[150px] lg:px-16 px-4 py-2">
                
                <h1 className="text-3xl text-center font-baseFont">Create your product with confidence</h1>
                {/* Grid */}
                <div className="grid lg:grid-cols-3 lg:grid-rows-2 grid-rows-3 gap-2 relative overflow-clip ">
                   
                   <div className=" col-span-2 rounded-lg overflow-clip relative">
                    <img src={image11} alt="" className="w-full h-full relative" /> 
                        <div class="absolute bottom-0 px-6 py-6 bg-gradient-to-t from-[#232323]/100 to-[#232323]/0">
                            <h1 class="text-white md:text-3xl text-xl">Create</h1>
                            <p class="text-gray-200 md:text-base sm:text-sm text-xs">
                            From e-books and software to design assets and online courses, our Digital Hub brings together a diverse range of digital products in one seamless experience
                            </p>
                        </div>
                    </div>
                    
                    <div className=" row-span-2 rounded-lg overflow-clip relative">
                    <img src={image13} alt="" className=" h-full relative" /> 
                        <div class="absolute top-0 px-6 py-6 bg-gradient-to-b from-[#232323]/100 to-[#232323]/0">
                            <h1 class="text-white md:text-3xl text-xl">Create</h1>
                            <p class="text-gray-200 md:text-base sm:text-sm text-xs">
                            From e-books and software to design assets and online courses, our Digital Hub brings together a diverse range of digital products in one seamless experience
                            </p>
                        </div>
                    </div>

                    <div className="rounded-lg overflow-clip relative">
                        <img src={image14} alt="" className=" h-full relative" /> 
                        <div class="absolute bottom-0 px-6 py-6 bg-gradient-to-t from-[#232323]/100 to-[#232323]/0">
                            <h1 class="text-white md:text-3xl text-xl">Create</h1>
                            <p class="text-gray-200 md:text-base sm:text-sm text-xs">
                            From e-books and software to design assets and online courses, our Digital Hub brings together a diverse range of digital products in one seamless experience
                            </p>
                        </div>
                    </div>

                    <div className="rounded-lg overflow-clip relative">
                        <img src={image15} alt="" className=" h-full relative" /> 
                        <div class="absolute bottom-0 px-6 py-6 bg-gradient-to-t from-[#232323]/100 to-[#232323]/0">
                            <h1 class="text-white md:text-3xl text-xl">Create</h1>
                            <p class="text-gray-200 md:text-base sm:text-sm text-xs">
                            From e-books and software to design assets and online courses, our Digital Hub brings together a diverse range of digital products in one seamless experience
                            </p>
                        </div>
                    </div>

                    


                </div>

            </div>


            {/* Millions Already Do */}
            <div className="grid lg:grid-cols-4 lg:grid-rows-2 grid-rows-3 md:gap-2 gap-4 relative overflow-clip lg:px-16 px-4 py-2 mt-[150px] ">
                <div className="col-span-2 md:row-span-2 rounded-lg overflow-clip flex flex-col justify-between ">

                    <h1 className="text-4xl">Millions Already Do</h1>
                    <div className="flex flex-col gap-4">
                        <p className=" text-gray-600 text-base">
                        Join the millions who trust us with their digital pursuits. Our platform is more than a marketplace; it's a testament to the confidence millions have in our commitment to security and quality. Every click is backed by the trust of a vast, engaged community.
                        </p>
                        <a href="" className="text-primary">See our stories</a>
                    </div>
                </div>
                <div className=" rounded-lg overflow-clip flex flex-col h-[200px] justify-between bg-gray-100 px-8 py-8">
                    <p>Numbers of Creators</p>
                    <p className="text-6xl font-black">60K</p>
                </div>
                <div className=" rounded-lg overflow-clip flex flex-col h-[200px] justify-between bg-gray-100 px-8 py-8">
                    <p>Number of Sales</p>
                    <p className="text-6xl font-black">500K</p>
                </div>
                <div className=" rounded-lg overflow-clip flex flex-col h-[200px] justify-between bg-gray-100 px-8 py-8">
                    <p>7D Transactions Volume</p>
                    <p className="text-6xl font-black">$50K</p>
                </div>
                <div className=" rounded-lg overflow-clip flex flex-col h-[200px] justify-between bg-gray-100 px-8 py-8">
                    <p>All time Transactions</p>
                    <p className="text-6xl font-black">$6.0M</p>
                </div>
            </div>

            {/* Contact Us */}
            <div className="lg:px-16 px-4 py-2 mt-[150px] flex flex-col gap-12">
            <h1 className="text-4xl font-baseFont">Create your product with confidence</h1>
            <div className="grid lg:grid-cols-3 gap-4">
                <div className=" rounded-lg overflow-clip flex flex-col lg:h-[230px] h-[200px] justify-between bg-[#E9EDC9] px-8 py-8">
                    <div className="px-6 py-4 text-sm bg-[#A3B03B] w-max rounded-lg font-medium text-gray-50"><p>Blog</p></div>
                    
                    <p className="text-xl font-semibold text-[#A3B03B]">Insight and news from our team</p>
                </div>
                <div className=" rounded-lg overflow-clip flex flex-col lg:h-[230px] h-[200px] justify-between bg-[#FAEDCD] px-8 py-8">
                    <div className="px-6 py-4 text-sm bg-[#E3A817] w-max rounded-lg font-medium text-gray-50"><p>Help Center</p></div>
                    
                    <p className="text-xl font-semibold text-[#E3A817]">Get Support</p>
                </div>
                <div className=" rounded-lg overflow-clip flex flex-col lg:h-[230px] h-[200px] justify-between bg-[#DBCDFA] px-8 py-8">
                    <div className="px-6 py-4 text-sm bg-[#5817E3] w-max rounded-lg font-medium text-gray-50"><p>Stay Connected</p></div>
                    
                    <p className="text-xl font-semibold text-[#5817E3]">Insight and news from our team</p>
                </div>
            </div>
            </div>

            {/* Footer */}
            <Footer/>
            

            
        </div>

        
    )
}

export default LandingPage;