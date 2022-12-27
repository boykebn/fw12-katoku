import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import * as Icon from 'react-feather'

const ChangePin = () => {
  return (
    <div className='font-nunitoSans'>
        <Header />
        <main className='py-10 px-36 flex gap-5'>
            <div className='flex-[0.2]'>
                <Navbar />
            </div>
            <div className='flex flex-col flex-[0.8] gap-5'>
                <div className='bg-white flex flex-col flex-1 px-10 py-8 rounded-xl gap-20 '>
                    <div>
                        <div className='flex-1'>
                            <div className='font-bold mb-6'>Change PIN</div>
                            <div className='w-[342px] text-[#7A7886]'>Enter your current 6 digits Fazzpay PIN below to continue to the next steps.</div>
                        </div>
                    </div>                        
                    <div className='flex-1 text-[#A9A9A9CC]'>
                        <form className='flex flex-col gap-16 '>
                            <div className='flex justify-center gap-5 font-bold text-[#3A3D42] text-[30px]'>
                                <div className='border-2 p-2 rounded-xl'>
                                    <div className='border-b-4 pb-3 items-center'>
                                        <input className='w-10 h-10 focus:outline-none text-center' type='number'></input>
                                    </div>
                                </div>
                                <div className='border-2 p-2 rounded-xl'>
                                    <div className='border-b-4 pb-3 items-center'>
                                        <input className='w-10 h-10 focus:outline-none text-center' type='number'></input>
                                    </div>
                                </div>
                                <div className='border-2 p-2 rounded-xl'>
                                    <div className='border-b-4 pb-3 items-center'>
                                        <input className='w-10 h-10 focus:outline-none text-center' type='number'></input>
                                    </div>
                                </div>
                                <div className='border-2 p-2 rounded-xl'>
                                    <div className='border-b-4 pb-3 items-center'>
                                        <input className='w-10 h-10 focus:outline-none text-center' type='number'></input>
                                    </div>
                                </div>
                                <div className='border-2 p-2 rounded-xl'>
                                    <div className='border-b-4 pb-3 items-center'>
                                        <input className='w-10 h-10 focus:outline-none text-center' type='number'></input>
                                    </div>
                                </div>
                                <div className='border-2 p-2 rounded-xl'>
                                    <div className='border-b-4 pb-3 items-center'>
                                        <input className='w-10 h-10 focus:outline-none text-center' type='number'></input>
                                    </div>
                                </div>
                            </div>  
                            <div className='flex justify-center '>
                                <button className='btn w-1/2'>Edit Phone Number</button>
                            </div>
                        </form>
                        
                    </div>                        
                </div>
            </div>
        </main>
        <Footer />
    </div>
  )
}

export default ChangePin