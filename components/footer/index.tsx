import React from "react";


export default function Footer() {
    return (
        <footer className="mt-[140px] font-Open-Sans">
            <hr />
            <div className="flex flex-row hover:items-End ml-[100px] gap-40">
                <img src="/image/CRM.svg" alt="" />
                <ul  className="ml-[20px] mr-[25px] mt-[90px] leading-loose">
                    <h2 className="font-semibold lg:text-xl mt-5 mb-5">Bantuan</h2>
                    <li className="flex flex-row mb-3"><img className='mr-1 ml-1' src='/image/ICON-HP.svg'/><section className="ml-[px]">(6221) 3952 4252</section></li>
                    <div className='flex flex-row'><img src="/image/mail.svg"/><section className="ml-[10px]">account@chakraradhamustika.com</section></div>
                </ul>
                <div className='ml-[120px] mt-[80px]'>
                    <h2 className="font-semibold lg:text-xl mt-5 mb-5">Alamat</h2>
                        <p className="leading-loose">Gedung Graha Inti LT 1 Zone C-D-E<br />
                           JL Raya Kalimalang Pondok Bambu <br />
                           Duren Sawit Jakarta Timur <br />
                           DKI Jakarta 13430</p>
                </div>
            </div>
            <div className="mt-[70px] ml-[110px] mb-[30px]">
                <p>Copyrights &#169; 2022 All rights reserved by Cakra Radha Mustika</p>
            </div>
        </footer>
    )
}