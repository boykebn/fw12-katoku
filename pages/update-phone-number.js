import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import * as Icon from 'react-feather'

import { useSelector } from 'react-redux';
import axios from 'axios'
import { useRouter } from 'next/router';

const UpdatePhoneNumber = () => {
    const token = useSelector((state)=> state.auth.token)
    const router = useRouter();

    const postPhoneNumber = async (value)=>{
        try{
            await axios.post(`${process.env.NEXT_PUBLIC_URL}/profile/phone-number`, {phoneNumber: value}, {headers: {"authorization" : `Bearer ${token.token}`}})
            router.push("/profile");
        }catch(err){
            console.log("masuk ke error")

        }
    }


    const updatePhoneNumber = (e)=>{
        e.preventDefault()
        const phoneNumber = e.target.phoneNumber.value
        postPhoneNumber(phoneNumber)
    }


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
                            <div className='font-bold mb-6'>Edit Phone Number</div>
                            <div className='w-[342px] text-[#7A7886]'>Add at least one phone number for the transfer ID so you can start transfering your money to another user.</div>
                        </div>
                    </div>                        
                    <div className='flex-1 text-[#A9A9A9CC]'>
                        <form onSubmit={updatePhoneNumber} className='flex flex-col gap-16 '>
                            <div className='flex justify-center'>
                                <div className='border-b-4 flex gap-5 pb-3 items-center w-1/2'>
                                    <Icon.Phone/>
                                    <span className='text-black'>+62</span>
                                    <input className='flex-1 p-2 focus:outline-none' type='text' name='phoneNumber' placeholder='Enter your phone number'></input>
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

export default UpdatePhoneNumber