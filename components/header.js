import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import users from '../assets/images/users.png'
import * as Icon from 'react-feather'
import { useSelector } from 'react-redux';
import Link from 'next/link';
import axios from 'axios';

const Header = () => {
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
  
  return (
    <header className='flex py-12 px-36 items-center font-Nunito-sans bg-white'>
        <div className="text-xl flex-1 text-[#6379F4] font-bold">KantongKu</div>
        <div className='flex gap-5 items-center text-[#3A3D42]'>
        {!token? 
          <div className="flex gap-5">
            <Link href="/login" >
              <button className="btn bg-white border border-[#6379F4] border-2 rounded-md h-10 w-[100px] font-Nunito-sans text-[#6379F4]">Login</button>
            </Link>
            <Link href="/sign-up">
              <button className="btn bg-[#6379F4] border border-[#6379F4] rounded-md h-10 w-[100px] font-Nunito-sans text-white">Sign Up</button>
            </Link>
          </div> :
          <>
            <div className='h-12 w-12 rounded-2xl'>
            <Image src={users} alt='profil'></Image>
            </div>
            <div>
                <div className='font-bold text-lg'>{profil && (profil.firstName) } {profil && (profil.lastName) }</div>
                <div className='font-normal text-sm'>{profil && (profil.phoneNumber) }</div>
            </div>            
            <div><Icon.Bell /></div>  
          </>
        }         
                      
        </div>
    </header>
  )
}

export default Header