import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import * as Icon from 'react-feather'
import Image from 'next/image'
import users from '../assets/images/users.png'
import failed from '../assets/images/failed.png'
import Link from 'next/link'

const Failed = () => {
   return (
    <div className='font-Nunito-sans'>
        <Header />
        <main className='py-10 px-36 flex gap-5 bg-slate-50'>
            <div className='flex-[0.2]'>
                <Navbar />
            </div>
            <div className='flex flex-col flex-[0.8] gap-5'>
                <div className='flex gap-5'>
                    <div className='bg-white flex flex-col flex-[1] h-full px-10 py-8 rounded-xl gap-10'>
                        <div>
                            <div className='pt-3'>
                                
                                
                                <div className='flex flex-col gap-6 pt-10 pb-10'>
                                    <div className='flex justify-center items-center'>
                                        <Image src={failed} alt="grapic" />
                                    </div>
                                    
                                    <div className='flex flex-col justify-center items-center'>
                                        <p className='text-xl font-semibold text-[#3A3D42]'>Transfer Failed</p>
                                        <div className='w-[591px] text-center text-[#7A7886] text-md pt-5'>
                                            <p>We can’t transfer your money at the moment, we recommend you to check your internet connection and try again.</p>
                                        </div>
                                    </div>

                                    <div className='w-[790px] h-[90px] rounded-xl bg-white shadow-md'>
                                        <div className='px-5 py-5'>
                                            <p className='text-md text-[#7A7886]'>Amount</p>
                                            <p className='text-2xl text-[#514F5B] font-semibold'>Rp100.000</p>
                                        </div>
                                    </div>

                                    <div className='w-[790px] h-[90px] rounded-xl bg-white shadow-md'>
                                        <div className='px-5 py-5'>
                                            <p className='text-md text-[#7A7886]'>Balance Left</p>
                                            <p className='text-2xl text-[#514F5B] font-semibold'>Rp20.000</p>
                                        </div>
                                    </div>

                                    <div className='w-[790px] h-[90px] rounded-xl bg-white shadow-md'>
                                        <div className='px-5 py-5'>
                                            <p className='text-md text-[#7A7886]'>Date & Time</p>
                                            <p className='text-2xl text-[#514F5B] font-semibold'>Des 27, 2022 - 12.20</p>
                                        </div>
                                    </div>

                                    <div className='w-[790px] h-[90px] rounded-xl bg-white shadow-md'>
                                        <div className='px-5 py-5'>
                                            <p className='text-md text-[#7A7886]'>Notes</p>
                                            <p className='text-2xl text-[#514F5B] font-semibold'>For buying some socks</p>
                                        </div>
                                    </div>

                                    <div className=''>
                                        <p className='text-2xl font-semibold text-[#3A3D42]'>Transfer To</p>
                                    </div>

                                    <div className='w-[790px] h-[110px] rounded-xl bg-white shadow-md flex'>
                                        <div className='flex pl-5 items-center'>
                                            <Image className='w-[70px] h-[70px]' src={users} alt="users" />
                                        </div>
                                        <div className='px-5 py-7'>
                                            <p className='text-xl text-[#514F5B] font-semibold'>Sueb</p>
                                            <p className='text-md text-[#7A7886] pt-1'>+62 813-8492-9994</p>
                                        </div>
                                    </div>


                                    <div className='flex justify-end gap-5 pt-10 pr-24'>
                                        <button type="submit" className="btn w-[170px] h-[50px] bg-[#6379F4] rounded-lg text-white">Try Again</button>
                                    </div>
                                </div>
                            </div>
                        </div>                        
                        
                    </div>                    
                </div>
            </div>
        </main>
        <Footer />
    </div>
  )
}

export default Failed