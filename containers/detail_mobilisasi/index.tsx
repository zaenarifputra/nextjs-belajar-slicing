import React from "react";
import Navbar from "@components/navbar";
import Footer from "@components/footer";

const detail_mobilisisasi = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='container--detail relative flex flex-row bg-gradient-to-r from-grad2 to-grad1 w-[100%] h-52 font-Open-Sans content-center'>
                <p className="contents--url absolute left-10 top-1 text-white">
                    <a href="belajar_coding">Campaign Management &gt;</a>
                    <strong className="ml-1">Mobilisasi Massa Digital</strong>
                </p>
                <div className='flex items-center w-full flex justify-center'>
                    <p className="text-white font-bold text-2xl lg:text-5xl">Mobilisasi Massa Digital</p>
                </div>
            </div>
            <img src="/image/digital_army.png" alt="" />
            <p className="flex justify-center text-comGray font-semibold mt-5 text-md text-lg lg:text-2xl">(Campaign Management Response Mobilisasi Massa Digital)</p>
            <div className="flex flex-col justify-center mt-6 mx-[55px] lg:mx-[220px] list-disc text-sm text-lg lg:text-xl">
                <ul className="list-disc">
                    <li>Kampanye  tertentu yang dilaksanakan oleh brand.</li>
                    <li>Bisa diarahkan melalui berbagai saluran seperti aplikasi, e-commerce, forum, atau ulasan influencer.</li>
                </ul>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default detail_mobilisisasi;