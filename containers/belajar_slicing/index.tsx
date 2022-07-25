import React from "react";
import Link from "next/link";
import Navbar from "@components/navbar";
import Footer from "@components/footer";
import Slider from 'react-slick'

const Belajar_Slicing = () => {
    var settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <div>
            <Navbar></Navbar>
            <div className="flex flex-row bg-gradient-to-r from-grad2 to-grad1 w-auto h-auto font-Open-Sans mt-0 content-center">
                <div>
                    <h1 className="ml-6 lg:ml-16 ml-4 mt-36 tracking-wider text-white text-6xl font-bold leading-tight">Marketing Support by Chakra</h1>
                    <p className="ml-6 text-white font-normal mt-12 lg:ml-16 lg:mr-12 mx-4 text-lg leading-8">Sebagai perusahan berbasis Customer Relationship Management, 
                    PT Cakra Radha Mustika memiliki <br/> pengalaman dan kemampuan untuk menjalankan strategi bisnis yang memadukan data manusia serta teknologi. 
                    PT Cakra Radha Mustika juga berfokus untuk selalu meningkatkan kepuasan pelanggan dengan berusaha memahami 
                    dan memenuhi kebutuhan berdasarkan karakteristik juga prilaku pelanggan.</p>
                    <Link href="/about_us"><button className='bg-lime-400 hover:bg-lime-500 text-white  font-normal px-32 lg:px-8 py-2  border border-white rounded-3xl lg:ml-16 ml-10 my-10'>Tentang Kami</button></Link>
                </div>
                <img className='max-w-prose hidden lg:block' src="/image/img_landing.png" alt="" />
            </div>

            <div className='mx-4 cursor-pointer'>
                <h1 className='font-Open-Sans font-bold text-2xl lg:text-4xl lg:mt-24 mt-12 text-center'>Layanan Kami</h1>
                <div className='font-Open-Sans grid grid-cols-2 md:grid-cols-1 lg:grid-cols-4 place-content-center'>
                    <Link href="">
                        <div className='p-4 bg-gray-200 rounded-3xl items-center justify-center mt-4 mx-2 h-[150px] lg:h-auto lg:mx-8 lg:mt-16'>
                            <div className='flex justify-center'>
                                <img className='lg:max-w-fit lg:mt-6 -mt-2 w-[90px] lg:w-auto' src="image/ICON-CS.png" alt="" />
                            </div>
                            <p className='lg:mt-4 font-bold text-sm lg:text-2xl text-center mb-6'>Pelayanan Pelanggan</p>
                        </div>
                    </Link>
                    <Link href="/belajar_coding">
                        <div className='p-4 bg-gray-200 rounded-3xl items-center justify-center mt-4 mx-2 h-[150px] lg:h-auto lg:mx-8 lg:mt-16'>
                            <div className='flex justify-center'>
                                <img className='lg:max-w-fit lg:mt-6 -mt-2 w-[90px] lg:w-auto' src="image/icon2.png" alt="" />
                            </div>
                            <p className='lg:mt-4 font-bold text-sm lg:text-2xl text-center mb-6'>Pengelolaan Campaign</p>
                        </div>
                    </Link>
                    <Link href="">
                        <div className='p-4 bg-gray-200 rounded-3xl items-center justify-center mt-4 mx-2 h-[150px] lg:h-auto lg:mx-8 lg:mt-16'>
                            <div className='flex justify-center'>
                                <img className='lg:max-w-fit lg:mt-6 -mt-2 w-[90px] lg:w-auto' src="image/ICON-DATABASE M.png" alt="" />
                            </div>
                            <p className='lg:mt-4 font-bold text-sm lg:text-2xl text-center mb-6'>Manajemen Basis Data</p>
                        </div>
                    </Link>
                    <Link href="">
                        <div className='p-4 bg-gray-200 rounded-3xl items-center justify-center mt-4 mx-2 h-[150px] lg:h-auto lg:mx-8 lg:mt-16'>
                            <div className='flex justify-center'>
                                <img className='lg:max-w-fit lg:mt-6 -mt-2 w-[90px] lg:w-auto' src="image/ICON-EX.STORE.png" alt="" />
                            </div>
                            <p className='lg:mt-4 font-bold text-sm lg:text-2xl text-center mb-6'>Penyedia Outlet Pelanggan</p>
                        </div>
                    </Link>
                </div>
            </div>
            <div className='relative p-8 bg-comLime h-auto font-Open-Sans mt-24'>
                <div>
                    <h1 className='font-bold text-4xl mt-[49px] text-center justify-center'>Klien Kami</h1>
                    <p className='font-normal text-base mt-4 text-center justify-center'>Kami telah bekerja sama dengan 37 Klien</p>
                </div>
                <div className='relative'>           
                    <Slider {...settings}>
                        <div className='image-web'><img className='w-9/12 mx-36 mt-16 hidden' src="image/clients1.svg" alt="" /></div>
                        <div className='image-web'><img className='w-9/12 mx-36 mt-16 hidden' src="image/clients2.svg" alt="" /></div>
                        <div className='image-web'><img className='w-9/12 mx-36 mt-16 hidden' src="image/clients3.svg" alt="" /></div>
                    </Slider>
                </div>
            </div>
            <h1 className="font-Open-Sans font-bold mx-12 text-3xl lg:text-4xl mt-24 text-center">Apa Kata Mereka Tentang Layanan Kami</h1>
            <div className="relative">
                <div className="container--indicator relative p-8">
                    <Slider {...settings}>
                        <div>
                            <div className="container--indikator">
                                <div className='relative flex flex-col lg:flex-row bg-comLime w-auto h-auto lg:m-20  mx-2 content-cennter justify-center rounded-2xl'>
                                    <div><img className='lg:max-w-[250px] max-w-[150px] m-24' src="image/wings.png" alt="" /></div>
                                    <div>
                                        <h1 className='mx-12 lg:ml-16 mt-16 text-xl lg:text-3xl font-bold leading-tight'>PT WINGS CROP</h1>
                                        <p className='font-normal ml-12 mr-10 lg:mt-8 lg:ml-16 mr-28 mb-8 text-base leading-8 text-lg'>PT CRM memberikan ide yang baik dalam pemenuhan bisnis kami sehingga dapat meneruskan dan menjalankan program dengan baik, 
                                        serta dapat memberikan pelayanan yang memuaskan. Pengiriman laporan dilakukan lebih awal dari target. 
                                        Hasilnya sangat akurat dan bisa dijadikan masukan untuk pengembangan ke depannya. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="container--indikator">
                                <div className='relative flex flex-col lg:flex-row bg-comLime w-auto h-auto lg:m-20  mx-2 content-cennter justify-center rounded-2xl'>
                                    <div><img className='lg:max-w-[250px] max-w-[150px] m-24' src="image/klikdokter.png" alt="" /></div>
                                    <div>
                                        <h1 className='mx-12 lg:ml-16 mt-16 text-xl lg:text-3xl font-bold leading-tight'>KlikDokter</h1>
                                        <p className='font-normal ml-12 mr-10 lg:mt-8 lg:ml-16 mr-28 mb-8 text-base leading-8 text-lg'>PT CRM bekerja dengan profesional sesuai pedoman dan tenggang waktu yang diberikan. 
                                        Hasil pekerjaan sesuai ekspektasi, mulai dari data-data yang diberikan hingga masukan sangat sesuai dengan kebutuhan perusahaan kami. 
                                        Responsnya juga cepat sekali. Sangat membantu kami memahami program yang sedang dijalankan.</p>
                                    </div>
                                </div>
                            </div> 
                        </div>
                        <div>
                            <div className="container--indikator">
                                <div className='relative flex flex-col lg:flex-row bg-comLime w-auto h-auto lg:m-20  mx-2 content-cennter justify-center rounded-2xl'>
                                    <div><img className='lg:max-w-[250px] max-w-[150px] m-24' src="image/renalmed.png" alt="" /></div>
                                    <div>
                                        <h1 className='mx-12 lg:ml-16 mt-16 text-xl lg:text-3xl font-bold leading-tight'>PT RENALMED TIARA UTAMA</h1>
                                        <p className='font-normal ml-12 mr-10 lg:mt-8 lg:ml-16 mr-28 mb-8 text-base leading-8 text-lg'>Sangat puas dengan kinerja PT CRM. Berbagai dukungan diberikan mulai dari regulasi yang baik, menjadi penghubung yang baik dengan pelanggan, dan memberikan data yang tepat sesuai kebutuhan perusahaan kami. 
                                        Laporan dan kegiatan yang dilakukan sesuai dengan kebutuhan perusahaan. 
                                        Semuanya sangat detail dan membantu kami</p>
                                    </div>
                                </div>
                            </div> 
                        </div>
                    </Slider>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Belajar_Slicing;