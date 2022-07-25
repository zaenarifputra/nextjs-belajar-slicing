import React from "react";
import Navbar from "@components/navbar";
import Footer from "@components/footer";

const detail_hadiah = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='container--detail relative flex flex-row bg-gradient-to-r from-grad2 to-grad1 w-[100%] h-52 font-Open-Sans content-center'>
                <p className="contents--url absolute left-10 top-1 text-white">
                    <a href="belajar_coding">Campaign Management &gt;</a>
                    <strong className="ml-1">Program Hadiah &amp; Loyalitas</strong>
                </p>
                <div className='flex items-center w-full flex justify-center'>
                    <p className="text-white font-bold text-2xl lg:text-5xl">Program Hadiah &amp; Loyalitas</p>
                </div>
            </div>
            <img src="/image/reward_loyalty_program.png" alt="" />
            <p className="flex justify-center text-comGray font-semibold mt-5 text-md text-lg lg:text-2xl">(Campaign Management Response Program Hadiah &amp; Loyalitas)</p>
            <div className="flex flex-col justify-center mt-6 mx-[55px] lg:mx-[220px] list-disc text-sm text-lg lg:text-xl">
                <ul className="list-disc">
                    <li>Sistem untuk membantu pelanggan mengembangkan program loyalitas yang sesuai dengan target segmentasi pelanggan.</li>
                    <li>Mengevaluasi dan merencanakan program yang tepat untuk meningkatkan tingkat retensi pelanggan terhadap merek.</li>
                </ul>
            </div>
            <div className="flex flex-col justify-center mt-6 mx-[55px] lg:mx-[220px] list-disc text-sm text-lg lg:text-xl">
                <p>Contoh Teknologi yang Tersedia dari CRM meliputi:</p>
                <ul className="list-decimal">
                    <li>Pemrosesan dan validasi struk/kwitansi</li>
                    <li>Verifikasi dan validasi data pelanggan</li>
                    <li>Layanan gudang untuk hadiah atau produk penebusan</li>
                </ul>
            </div>
            <Footer></Footer>
        </div>
    );
};
export default detail_hadiah;