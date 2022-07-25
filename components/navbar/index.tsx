import React from "react";

export default function Navbar() {
    return (
        <div className="overscroll-none">
            <nav className="flex justify-between p-4 shadow-nav shadow-lg z-50">
                <a className='-mr-10' href="/">
                    <img src="image/CRM.svg" alt="" />
                </a>
                <div className="flex flex-wrap mr-10 mt-5">
                    <div>
                        <a className="mr-6 active:text-comGreen hover:text-comGreen hover:border-b-2 border-comGreen" href="">Tentang Kami</a>
                    </div>
                    <div className="flex flex-row">
                        <a className="mr-4 mb-[50px] active:text-comGreen hover:text-comGreen hover:border-b-2 border-comGreen" href="">Layanan Kami</a>
                        <img className='-ml-2 mb-[45px] mr-4 w-[15px] cursor-pointer' src="image/Vector.svg" alt="" />
                    </div>
                    <div>
                        <a className="mr-4 active:text-comGreen hover:text-comGreen hover:border-b-2 border-comGreen" href="">Hubungi Kami</a>
                    </div>    
                    <div className="language flex mb-7 ml-4 -mr-8">
                        <a className="text-comGreen border-comGreen cursor-pointer hover:text-comGreen hover:border-b-2 border-comGreen">Indonesia </a>
                        <p className="mx-2 lg:block hidden"> | </p>
                        <a className=" cursor-pointer hover:text-comGreen hover:border-b-2 border-comGreen"> English</a>
                        <img className=" w-[35px] ml-6 mb-3" src="image/ID.svg" alt=""></img>
                    </div>
                </div>
            </nav>
        </div>
    )
}