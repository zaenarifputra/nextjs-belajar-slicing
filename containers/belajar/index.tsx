import Link from "next/link";
import React from "react";
import Navbar from "@components/navbar";
import Footer from "@components/footer";


const Belajar = () => {
    return (
      <div>
        <Navbar></Navbar>
        <div className='container--detail relative flex flex-row bg-gradient-to-r from-grad2 to-grad1 w-[100%] h-52 font-Open-Sans content-center'>
                <img className='content--icon flex items-center w-40 h-40 mt-8 ml-12 ' src="/image/icon2.png" alt="" />
                <Link href="/our-services/"><span><img className='w-12' src="/src/back.svg" alt="" /></span></Link>
                <div className='flex items-center w-full'>
                    <p className="text-white font-bold text-2xl lg:text-5xl ml-8 lg:ml-12">Pengelolaan Campaign</p>
                </div>
        </div>

            <div className='grid grid-cols-2 lg:grid-cols-3 lg:mx-24 lg:mt-32 mx-6 mt-6 gap-4 lg:gap-6'>
                        <div className=''>
                            <Link href='/detail_mobilisasi'>
                                <a>
                                    <img className='content--img flex bg-cover items-center lg:w-[425px] lg:h-[425px] w-[260px] h-[150px] object-cover' src='/image/digital_army.png' alt="" /><br />
                                    <p className='font-bold text-sm lg:text-2xl'>Mobilisasi Massa Digital</p>
                                    <p className='line-clamp-3 lg:line-clamp-none mt-2 mr-6 text-comGray text-[10px] lg:text-xl'>Meningkatkan aplikasi ulasan, digital E-commerce, 
                                    digital forum internet, dan digital KOL dengan mobilisasi massa. Kegiatan untuk menggerakan...</p>
                                    <a className='text-comGreen text-[10px] lg:text-lg'>View Detail </a><br />
                                </a>
                            </Link>
                        </div>
                        <div className=''>
                              <Link href='/detail_manajemen'>
                                  <a>
                                    <img className='content--img flex object-cover items-center lg:w-[425px] lg:h-[425px] w-[260px] h-[150px] object-cover' src="/image/event_management.png" alt="" /><br />
                                    <p className='font-bold text-sm lg:text-2xl'>Manajemen Acara</p>
                                    <p className='line-clamp-3 lg:line-clamp-noe mt-2 mr-6 text-comGray text-[10xp] lg:text-xl'>Penyelenggara Acara - Pelayanan meliputi mencarikan pembicara yang sesuai, mengatur jadwal acara, 
                                    mengakomodasi anggota dan penonton... </p>
                                    <a className='text-comGreen text-[10px] lg:text-lg'>View Detail</a>
                                  </a>
                              </Link>
                          </div>
                          <div className=''>
                              <Link href='/detail_penciptaan'>
                                  <a>
                                    <img className='content--img flex object-cover items-center lg:w-[425px] lg:h-[425px] w-[260px] h-[150px] object-cover' src="/image/leads_generator.png" alt="" /><br />
                                    <p className='font-bold text-sm lg:text-2xl'>Penciptaan Calon Pelanggan</p>
                                    <p className='line-clamp-3 lg:line-clamp-noe mt-2 mr-6 text-comGray text-[10xp] lg:text-xl'>Menyediakan layanan untuk menentukan pemosisian produk dengan mencarikan segmen pelanggan yang tepat.
                                    Kumpulan sampel didorong untuk mencoba... </p>
                                    <a className='text-comGreen text-[10px] lg:text-lg'>View Detail</a>
                                  </a>
                              </Link>
                          </div>
                          <div className=''>
                              <Link href='/detail_modifikasi'>
                                  <a>
                                    <img className='content--img flex object-cover items-center lg:w-[425px] lg:h-[425px] w-[260px] h-[150px] object-cover' src="/image/personalized_campaign.png" alt="" /><br />
                                    <p className='font-bold text-sm lg:text-2xl'>Modifikasi Campaign</p>
                                    <p className='line-clamp-3 lg:line-clamp-noe mt-2 mr-6 text-comGray text-[10xp] lg:text-xl'>Layanan yang disediakan untuk menyusun dan mengatur keseluruhan campaign yang sesuai untuk setiap klien tertentu. 
                                    Program campaign akan...</p>
                                    <a className='text-comGreen text-[10px] lg:text-lg'>View Detail</a>
                                  </a>
                              </Link>
                          </div>
                          <div className=''>
                              <Link href='/detail_hadiah'>
                                  <a>
                                    <img className='content--img flex object-cover items-center lg:w-[425px] lg:h-[425px] w-[260px] h-[150px] object-cover' src="/image/reward_loyalty_program.png" alt="" /><br />
                                    <p className='font-bold text-sm lg:text-2xl'>Program Hadiah &amp; Loyalitas</p>
                                    <p className='line-clamp-3 lg:line-clamp-noe mt-2 mr-6 text-comGray text-[10xp] lg:text-xl'>Sistem untuk membantu pelanggan mengembangkan program loyalitas yang sesuai dengan target segmentasi pelanggan.
                                    Mengevalua...</p>
                                    <a className='text-comGreen text-[10px] lg:text-lg'>View Detail</a>
                                  </a>
                              </Link>
                          </div>
                          <div className=''>
                              <Link href='/detail_layanan'>
                                  <a>
                                    <img className='content--img flex object-cover items-center lg:w-[425px] lg:h-[425px] w-[260px] h-[150px] object-cover' src="/image/kalbe_home_delivery.png" alt="" /><br />
                                    <p className='font-bold text-sm lg:text-2xl'>Layanan Pesan antar Dari Kalbe</p>
                                    <p className='line-clamp-3 lg:line-clamp-noe mt-2 mr-6 text-comGray text-[10xp] lg:text-xl'>Layanan yang disediakan oleh KALBE untuk pelanggan setia berupa pengiriman ke rumah 
                                    dan bantuan pribadi untuk nasihat kesehatan....</p>
                                    <a className='text-comGreen text-[10px] lg:text-lg'>View Detail</a>
                                  </a>
                              </Link>
                          </div>
            </div><br /><br />
            <Footer></Footer>
       </div> 
    );
  };
  
  export default Belajar;