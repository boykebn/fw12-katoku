import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import * as Icon from 'react-feather'
import Image from 'next/image'
import graphic from '../assets/images/graphic.png'
import users from '../assets/images/users.png'
import Link from 'next/link'

const Home = () => {
  return (
    <div className='font-Nunito-sans'>
        <Header />
        <main className='py-10 px-36 flex gap-5 bg-slate-50'>
            <div className='flex-[0.2]'>
                <Navbar />
            </div>
            <div className='flex flex-col flex-[0.8] gap-5'>
                <div className='bg-[#6379F4] rounded-2xl p-8 flex text-white'>
                    <div className='flex flex-col flex-1'>
                        <div className='text-[#E0E0E0]'>Balance</div>
                        <div className='flex-1 text-[40px] font-bold'>Rp120.000</div>
                        <div className='text-[#E0E0E0]'>+62 813-9387-7946</div>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <div >
                            <button className='btn flex gap-4 py-4 px-8 border rounded-xl w-full'>
                                <Icon.ArrowUp /><div> Transfer</div>
                            </button>
                        </div>
                        <div>
                            <button className='btn flex gap-4 py-4 px-8 border rounded-xl w-full'>
                                <Icon.Plus /><div> Top Up</div>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='flex gap-5'>
                    <div className='bg-white flex-[0.5] px-10 py-8 rounded-xl'>
                        <div className='flex'>
                            <div className='flex flex-col flex-1 gap-2'>
                                <Icon.ArrowDown />
                                <div className='text-[#6A6A6A]'>Income</div>
                                <div className='font-bold text-[#3A3D42]'>Rp2.120.000</div>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <Icon.ArrowDown />
                                <div className='text-[#6A6A6A]'>Expense</div>
                                <div className='font-bold text-[#3A3D42]'>Rp1.560.000</div>
                            </div>
                        </div>
                        <div>
                            <Image className='w-full' src={graphic} alt="grapic"></Image>
                        </div>
                    </div>                    
                    <div className='bg-white flex flex-col flex-[0.5] px-10 py-8 rounded-xl gap-10'>
                        <div>
                            <div className='flex flex-1'>
                                <div className='font-bold flex-1'>Transaction History</div>
                                <div>
                                    <Link className='text-[#6379F4]' href='/history'>See all</Link>
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
                    </div>                    
                </div>
            </div>
        </main>
        <Footer />
    </div>
  )
}

export default Home