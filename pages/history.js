import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import * as Icon from 'react-feather'
import Image from 'next/image'
import graphic from '../assets/images/graphic.png'
import users from '../assets/images/users.png'
import Link from 'next/link'

const History = () => {
  return (
    <div className='font-Nunito-sans'>
        <Header />
        <main className='py-10 px-36 flex gap-5 bg-slate-50'>
            <div className='flex-[0.2]'>
                <Navbar />
            </div>
            <div className='flex flex-col flex-[0.8] gap-5'>
                <div className='bg-white flex flex-col flex-[0.5] px-10 py-8 rounded-2xl gap-10'>
                    <div>
                        <div className='flex flex-1'>
                            <div className='font-bold flex-1'>Transaction History</div>
                            <div>
                                <select className='text-[#6379F4] bg-[#3A3D421A] select'>
                                    <option disabled selected>-- Select Filter --</option>
                                    <option>Name</option>
                                    <option>Status</option>
                                </select>
                            </div>
                        </div>
                    </div>                        
                    <div className='flex flex-1 gap-4'>
                        <div>
                            <Image className='w-14 h-14' src={users} alt='foto-profil'></Image>
                        </div>
                        <div className='flex flex-col flex-1 gap-2'>
                            <div className='font-bold text-[#4D4B57] text-[16px]'>Samuel Suhi</div>
                            <div className='text-[#7A7886]'>Accept</div>
                        </div>
                        <div className='font-bold text-[#1EC15F] text-[16px]'>+Rp50.000</div>
                    </div>
                    <div className='flex flex-1 gap-4'>
                        <div>
                            <Image className='w-14 h-14' src={users} alt='foto-profil'></Image>
                        </div>
                        <div className='flex flex-col flex-1 gap-2'>
                            <div className='font-bold text-[#4D4B57] text-[16px]'>Netflix</div>
                            <div className='text-[#7A7886]'>Transfer</div>
                        </div>
                        <div className='font-bold text-[#FF5B37] text-[16px]'>-Rp149.000</div>
                    </div>
                    <div className='flex flex-1 gap-4'>
                        <div>
                            <Image className='w-14 h-14' src={users} alt='foto-profil'></Image>
                        </div>
                        <div className='flex flex-col flex-1 gap-2'>
                            <div className='font-bold text-[#4D4B57] text-[16px]'>Christine Mar...</div>
                            <div className='text-[#7A7886]'>Accept</div>
                        </div>
                        <div className='font-bold text-[#1EC15F] text-[16px]'>+Rp150.000</div>
                    </div>
                    <div className='flex flex-1 gap-4'>
                        <div>
                            <Image className='w-14 h-14' src={users} alt='foto-profil'></Image>
                        </div>
                        <div className='flex flex-col flex-1 gap-2'>
                            <div className='font-bold text-[#4D4B57] text-[16px]'>Robert Chandler</div>
                            <div className='text-[#7A7886]'>Topup</div>
                        </div>
                        <div className='font-bold text-[#FF5B37] text-[16px]'>+Rp50.000</div>
                    </div>
                    <div className='flex flex-1 gap-4'>
                        <div>
                            <Image className='w-14 h-14' src={users} alt='foto-profil'></Image>
                        </div>
                        <div className='flex flex-col flex-1 gap-2'>
                            <div className='font-bold text-[#4D4B57] text-[16px]'>Samuel Suhi</div>
                            <div className='text-[#7A7886]'>Accept</div>
                        </div>
                        <div className='font-bold text-[#1EC15F] text-[16px]'>+Rp50.000</div>
                    </div>
                    <div className='flex flex-1 gap-4'>
                        <div>
                            <Image className='w-14 h-14' src={users} alt='foto-profil'></Image>
                        </div>
                        <div className='flex flex-col flex-1 gap-2'>
                            <div className='font-bold text-[#4D4B57] text-[16px]'>Samuel Suhi</div>
                            <div className='text-[#7A7886]'>Accept</div>
                        </div>
                        <div className='font-bold text-[#1EC15F] text-[16px]'>+Rp50.000</div>
                    </div>  
                </div> 
            </div>
        </main>
        <Footer />
    </div>
  )
}

export default History