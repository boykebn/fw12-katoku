import React from 'react'
import Image from 'next/image';
import users from '../assets/images/users.png'
import * as Icon from 'react-feather'

const Header = () => {
  return (
    <header className='flex py-12 px-36 items-center font-Nunito-sans bg-white'>
        <div className="text-xl flex-1 text-[#6379F4] font-bold">KantongKu</div>
        <div className='flex gap-5 items-center text-[#3A3D42]'>
            <div className='h-12 w-12 rounded-2xl'>
                <Image src={users} alt='profil'></Image>
            </div>            
            <div>
                <div className='font-bold text-lg'>Robert Chandler</div>
                <div className='font-normal text-sm'>+62 8139 3877 7946</div>
            </div>            
            <div><Icon.Bell /></div>            
        </div>
    </header>
  )
}

export default Header