import React from "react";
import Navbar from "@components/navbar";
import Footer from "@components/footer";

const detail_modifikasi = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='container--detail relative flex flex-row bg-gradient-to-r from-grad2 to-grad1 w-[100%] h-52 font-Open-Sans content-center'>
                <p className="contents--url absolute left-10 top-1 text-white">
                    <a href="belajar_coding">Campaign Management &gt;</a>
                    <strong className="ml-1">Modifikasi Campaign</strong>
                </p>
                <div className='flex items-center w-full flex justify-center'>
                    <p className="text-white font-bold text-2xl lg:text-5xl">Modifikasi Campaign</p>
                </div>
            </div>
            <img src="/image/personalized_campaign.png" alt="" />
            <p className="flex justify-center text-comGray font-semibold mt-5 text-md text-lg lg:text-2xl">(Campaign Management Response Modifikasi Campaign)</p>
                <p className="mt-6 lg:mx-[200px] text-lg lg:text-xl">Layanan yang disediakan untuk menyusun dan mengatur keseluruhan campaign yang sesuai untuk setiap klien tertentu.<br /> 
                    Program campaign akan diarahkan sesuai dengan target klien dan penentuan posisi merek di pasar.
                    <br />Campaign akan disusun menggunakan seluruh sumber daya yang sesuai dan tersedia di CRM meliputi:</p>
            <div className="flex flex-col justify-center mt-1 mx-[55px] lg:mx-[220px] list-disc text-sm text-lg lg:text-xl">
                <ul className="list-disc">
                    <li>Menyediakan layanan untuk menentukan pemosisian produk dengan mencarikan segmen pelanggan yang tepat.</li>
                    <li>Mengumpulkan sampel dari pelanggan setelah mencoba produk dan memberikan ulasan terkait produk yang telah dicoba.</li>
                    <li>Produk dapat langsung diberikan kepada pelanggan melalui toko atau dikirim ke alamat mereka.</li>
                </ul>
            </div>
            <Footer></Footer>
        </div>
    );
};
export default detail_modifikasi;