import React, { useEffect, useState } from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import * as Icon from 'react-feather'
import Image from 'next/image'
import users from '../assets/images/users.png'
import Link from 'next/link'
import { useSelector } from 'react-redux';
import axios from 'axios';

const Profile = () => {
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
                            <div className='pt-10'>
                                <div className='flex justify-center'>
                                    <Image src={users} alt="" />
                                </div>

                                <div>
                                    <Link className='flex justify-center items-center gap-2 pt-5 text-[#7A7886]' href='/'>
                                        <Icon.Edit2 className='w-[12px] h-[12px]'/>
                                        <p className='text-xs'>Edit</p> 
                                    </Link>
                                </div>

                                <div className='flex justify-center pt-5'>
                                    <div className='flex flex-col items-center'>
                                        <p className='text-xl font-semibold'>{profil.firstName} {profil.lastName}</p>
                                        <p className='text-[#7A7886] text-xs pt-3'>{profil.phoneNumber}</p>
                                    </div>
                                </div>

                                <div className='flex flex-col gap-6 items-center pt-10 pb-10'>
                                    <div className='w-[433px] h-[60px] border rounded-xl bg-[#E5E8ED]'>
                                        <div>
                                            <Link className='flex items-center justify-between px-5 py-[15px]' href='/personal-info'>
                                                <p className='text-xl'>Personal Information</p>
                                                <Icon.ArrowRight className='' />
                                            </Link>
                                        </div>
                                    </div>

                                    <div className='w-[433px] h-[60px] border rounded-xl bg-[#E5E8ED]'>
                                        <div>
                                            <Link className='flex items-center justify-between px-5 py-[15px]' href='/'>
                                                <p className='text-xl'>Change Password</p>
                                                <Icon.ArrowRight className='' />
                                            </Link>
                                        </div>
                                    </div>

                                    <div className='w-[433px] h-[60px] border rounded-xl bg-[#E5E8ED]'>
                                        <div>
                                            <Link className='flex items-center justify-between px-5 py-[15px]' href='/'>
                                                <p className='text-xl'>Change Pin</p>
                                                <Icon.ArrowRight className='' />
                                            </Link>
                                        </div>
                                    </div>

                                    <div className='w-[433px] h-[60px] border rounded-xl bg-[#E5E8ED]'>
                                        <div>
                                            <Link className='flex items-center justify-between px-5 py-[15px]' href='/'>
                                                <p className='text-xl'>Logout</p>
                                                <Icon.ArrowRight className='' />
                                            </Link>
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

export default Profile