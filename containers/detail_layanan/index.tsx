import React from "react";
import Navbar from "@components/navbar";
import Footer from "@components/footer";

const detail_layanan = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='container--detail relative flex flex-row bg-gradient-to-r from-grad2 to-grad1 w-[100%] h-52 font-Open-Sans content-center'>
                <p className="contents--url absolute left-10 top-1 text-white">
                    <a href="belajar_coding">Campaign Management &gt;</a>
                    <strong className="ml-1">Layanan Pesan antar dari Kalbe</strong>
                </p>
                <div className='flex items-center w-full flex justify-center'>
                    <p className="text-white font-bold text-2xl lg:text-5xl">Layanan Pesan antar dari Kalbe</p>
                </div>
            </div>
            <img src="/image/kalbe_home_delivery.png" alt="" />
            <p className="flex justify-center text-comGray font-semibold mt-5 text-md text-lg lg:text-2xl">(Campaign Management Response Jasa Pengiriman ke Rumah Kalbe)</p>
            <div className="flex flex-col justify-center mt-6 mx-[55px] lg:mx-[220px] list-disc text-sm text-lg lg:text-xl">
                <p>Layanan yang disediakan oleh KALBE untuk pelanggan setia berupa pengiriman ke rumah dan bantuan pribadi untuk nasihat kesehatan &amp; gizi.</p>
            </div>
            <Footer></Footer>
        </div>
    );
}; 
export default detail_layanan;