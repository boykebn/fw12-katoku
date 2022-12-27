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
                                    <p className='text-2xl font-semibold text-[#3A3D42]'>Transfer Money</p>
                                </div>

                                <div className='flex flex-col gap-6 pt-1 pb-10'>
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

                                <div className='w-[336px]'>
                                    <p className='text-[#7A7886]'>Type the amount you want to transfer and then
                                        press continue to the next steps.</p>
                                </div>

                                <form>
                                    <div className='flex justify-center pt-14'>
                                        <input className='w-[100px] h-[56px] px-[15px] text-4xl font-semibold' type="text" placeholder="0.00"></input>
                                    </div>

                                    <div className='flex justify-center pt-5 font-semibold text-[#3A3D42]'>
                                        <p>Rp120.000 Available</p>
                                    </div>

                                    <div className='flex justify-center items-center pt-14'>
                                        <div className='border-b-2 w-[343px] flex items-center gap-4'>
                                            <Icon.Edit2 className='w-[19px] h-[19px] text-[#A9A9A999]' />
                                            <input className='text-md' type="text" placeholder="Add some notes"></input>
                                        </div>
                                    </div>

                                    <div className='flex justify-end pt-20 pr-28'>
                                        <button type="submit" className="btn w-[170px] h-[50px] bg-[#6379F4] rounded-lg text-white">Continue</button>
                                    </div>
                                </form>
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