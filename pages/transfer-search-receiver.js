import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import * as Icon from 'react-feather'
import Image from 'next/image'
import users from '../assets/images/users.png'
import Link from 'next/link'

const TransferSearchReceiver = () => {
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
                                <div className='pb-5'>
                                    <p className='text-2xl font-semibold text-[#3A3D42]'>Search Receiver</p>
                                </div>
                                
                                <form>
                                    <div className='w-[790px] h-[54px] flex items-center gap-5'>
                                        <div className='w-[20px]'>
                                            <Icon.Search className='' />
                                        </div>
                                        <input className='w-[790px] h-[54px] bg-[#3A3D421A] rounded-xl pl-5' type="text" placeholder="Search receiver here..."></input>
                                    </div>
                                </form>
                                <div className='flex flex-col gap-6 pt-10 pb-10'>
                                    <div className='w-[790px] h-[110px] rounded-xl bg-white shadow-md flex'>
                                        <div className='flex pl-5 items-center'>
                                            <Image className='w-[70px] h-[70px]' src={users} alt="users" />
                                        </div>
                                        <div className='px-5 py-7'>
                                            <p className='text-xl text-[#514F5B] font-semibold'>Sueb</p>
                                            <p className='text-md text-[#7A7886] pt-1'>+62 813-8492-9994</p>
                                        </div>
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

                                    <div className='w-[790px] h-[110px] rounded-xl bg-white shadow-md flex'>
                                        <div className='flex pl-5 items-center'>
                                            <Image className='w-[70px] h-[70px]' src={users} alt="users" />
                                        </div>
                                        <div className='px-5 py-7'>
                                            <p className='text-xl text-[#514F5B] font-semibold'>Sueb</p>
                                            <p className='text-md text-[#7A7886] pt-1'>+62 813-8492-9994</p>
                                        </div>
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

export default TransferSearchReceiver