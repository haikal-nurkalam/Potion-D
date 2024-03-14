import React from "react";
import HeaderRegister from "./template/Header-Register";
import Footer from "./template/Footer";

const Register = ()=>{
    return (
        <div className="px-4">
            <HeaderRegister/>
            <div className="flex flex-col gap-8 md:w-max w-full p-8 mx-auto my-32 bg-white">
                <div className="py-2 gap-2 flex flex-col">
                    <h1 className="lg:text-4xl md:text-3xl text-2xl font-semibold">Register your Account</h1>
                    <p className="lg:text-xl md:text-lg text-base text-[#908B83]">Join us with just a few clicks to get started on your seamless journey.</p>
                </div>
                <div class="w-full">
                    <form class="bg-white rounded flex flex-col gap-4">
                        <input class="appearance-none border rounded-md w-full py-3 px-4 text-gray-700 leading-tight" id="name" type="text" placeholder="Name"/>
                        <input class="appearance-none border rounded-md w-full py-3 px-4 text-gray-700 leading-tight" id="email" type="email" placeholder="Email"/>
                        <div class="flex border border-gray-300 rounded-md">
                            <select class="bg-gray-100 border-r py-3 px-4 text-gray-700 focus:outline-none rounded-l-md">
                                <option value="+62">+1</option>
                                <option value="+1">+44</option>
                                <option value="+91">+91</option>
                            </select>
                            <input type="tel" class="flex-1 py-3 px-4 rounded-r-md" placeholder="Phone number" />
                        </div>
                        <input class="appearance-none border rounded-md w-full py-3 px-4 text-gray-700 leading-tight" id="phone" type="password" placeholder="password"/>
                        <button className="w-full w-full bg-primary px-4 py-3 text-white font-medium rounded-md">Register Now</button>
                    </form>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Register;