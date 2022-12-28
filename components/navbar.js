import React from 'react'
import * as Icon from 'react-feather'
import { useDispatch } from 'react-redux'
import  { logout as logoutAction }  from '../redux/reducer/auth'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Topup from './topup'

const Navbar = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    const logout = (e) => {
        // e.preventdefault()
        dispatch(logoutAction())
        router.push('/');
    }

  return (
    <nav className='bg-white py-11  flex flex-col font-Nunito-sans text-xl gap-14 h-full'>
        <div className='hover:opacity-50'>
            <Link className='flex gap-5 px-8 text-[#6379F4] border-l-4 border-[#6379F4]' href="/home">
                <Icon.Grid />
                <div>Dasboard</div>
            </Link>
        </div>        
        <div className='hover:opacity-50'>
            <Link className='flex gap-5 px-8 ' href="/transfer-search-receiver">
                <Icon.ArrowUp />
                <div>Transfer</div>
            </Link>
        </div>        
        <div className='hover:opacity-50 '>
            <div className='flex gap-5 px-8'>
                <Icon.Plus />
                <a href='#topup' className="">Top Up</a>
            </div>
        </div>        
            <Topup />
        <div className='flex-1 hover:opacity-50'>
            <Link className='flex  gap-5 px-8 ' href="/profile">
                <Icon.User />
                <div>Profile</div>
            </Link>  
        </div>        
        <div className='flex gap-5 px-8 hover:opacity-50'>
            <Icon.LogOut />
            <div onClick={logout}>Logout</div>
        </div>   
    </nav>   
  )
}

export default Navbar