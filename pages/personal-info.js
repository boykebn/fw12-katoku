
import Header from '../components/header'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import * as Icon from 'react-feather'
import Image from 'next/image'
import users from '../assets/images/users.png'
import Link from 'next/link'

import { useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react'
import axios from 'axios';

const PersonalInfo = () => {
    const token = useSelector((state)=> state.auth.token)
    const [profil, setProfil] = useState({});
    
    useEffect(() =>{
        getProfile()
    },[])

    const getProfile = async () => {
        try{
        const { data } = await axios.get(`${process.env.NEXT_PUBLIC_URL}/profile`, {headers: {"authorization" : `Bearer ${token.token}`}});
        setProfil(data.results)
        }catch(err){
        setProfil({});
        }
    }

    console.log(profil)

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
                                <div className=''>
                                    <p className='text-2xl font-semibold text-[#3A3D42]'>Personal Information</p>
                                </div>
                                
                                <div className='w-[342px] text-[#7A7886] pt-5'>
                                    <p>We got your personal information from the sign up proccess. If you want to make changes on your information, contact our support.</p>
                                </div>

                                <div className='flex flex-col gap-6 pt-10 pb-10'>
                                    <div className='w-[790px] h-[90px] rounded-xl bg-white shadow-md'>
                                        <div className='px-5 py-5'>
                                            <p className='text-md text-[#7A7886]'>First Name</p>
                                            <p className='text-2xl text-[#514F5B] font-semibold'>{profil.firstName}</p>
                                        </div>
                                    </div>

                                    <div className='w-[790px] h-[90px] rounded-xl bg-white shadow-md'>
                                        <div>
                                            <div className='px-5 py-5'>
                                                <p className='text-md text-[#7A7886]'>Last Name</p>
                                                <p className='text-2xl text-[#514F5B] font-semibold'>{profil.lastName}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='w-[790px] h-[92px] rounded-xl bg-white shadow-md'>
                                        <div>
                                            <div className='px-5 py-5'>
                                                <p className='text-md text-[#7A7886]'>Verified E-mail</p>
                                                <p className='text-2xl text-[#514F5B] font-semibold'>{profil.email}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='w-[790px] h-[90px] rounded-xl bg-white shadow-md'>
                                        <div>
                                            <div className='px-5 pt-5 pb-1 flex justify-between'>
                                                <p className='text-md text-[#7A7886]'>Phone Number</p>
                                                <Link href='/update-phone-number'>
                                                    <p className='text-[#6379F4]'>Manage</p>
                                                </Link>
                                            </div>
                                            <div className='pl-5'>
                                                <p className='text-2xl text-[#514F5B] font-semibold'>{profil.phoneNumber}</p>
                                            </div>
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

export default PersonalInfo