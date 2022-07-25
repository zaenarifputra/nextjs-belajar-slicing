import React from "react";
import Navbar from "@components/navbar";
import Footer from "@components/footer";

const detail_manajemen = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='container--detail relative flex flex-row bg-gradient-to-r from-grad2 to-grad1 w-[100%] h-52 font-Open-Sans content-center'>
                <p className="contents--url absolute left-10 top-1 text-white">
                    <a href="belajar_coding">Campaign Management &gt;</a>
                    <strong className="ml-1">Manajemen Acara</strong>
                </p>
                <div className='flex items-center w-full flex justify-center'>
                    <p className="text-white font-bold text-2xl lg:text-5xl">Manajemen Acara</p>
                </div>
            </div>
            <img src="/image/event_management.png" alt="" />
            <p className="flex justify-center text-comGray font-semibold mt-5 text-md text-lg lg:text-2xl">(Campaign Management Response Manajemen Acara)</p>
            <div className="flex flex-col justify-center mt-6 mx-[55px] lg:mx-[220px] list-disc text-sm text-lg lg:text-xl">
                <ul className="list-disc">
                    <li>Penyelenggaraan Acara - pelayanannya meliputi menghadirkan pembicara yang kompeten, mengatur jadwal acara, mengakomodasi tim dan penonton, dan pelayanan lainnya yang bertujuan untuk memastikan acara berlangsung dengan <br/> lancar.</li>
                    <li>Program Berbagi hadiah - pengelolaan program berbagi hadiah dimulai dari persiapan, operasional, hingga langkah eksekusi. </li>
                </ul>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default detail_manajemen;