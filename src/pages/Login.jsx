import React from "react";
import Footer from "./template/Footer";
import HeaderLogin from "./template/Header-Login";

const Login = ()=>{
    return (
        <div className="px-4">
            <HeaderLogin/>
            <div className="flex flex-col gap-8 md:w-max w-full p-8 mx-auto my-32 bg-white">
                <div className="py-2 gap-2 flex flex-col">
                    <h1 className="lg:text-4xl md:text-3xl text-2xl font-semibold">Login to your account</h1>
                    <p className="lg:text-xl md:text-lg text-base text-[#908B83]">Log in to your account for easy access to your personalized settings, orders, and more</p>
                </div>
                <div class="w-full">
                    <form class="bg-white rounded flex flex-col gap-4">
                        <input class="appearance-none border rounded-md w-full py-3 px-4 text-gray-700 leading-tight" id="email" type="email" placeholder="Email"/>
                        <input class="appearance-none border rounded-md w-full py-3 px-4 text-gray-700 leading-tight" id="phone" type="password" placeholder="password"/>
                        <a href="/dashboard"><button className="w-full w-full bg-primary px-4 py-3 text-white font-medium rounded-md">Login</button></a>
                    </form>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Login;