import React from 'react'
import * as Icon from 'react-feather'

const Navbar = () => {
  return (
    <nav className='bg-white py-11 flex flex-col font-Nunito-sans text-xl gap-14 h-full rounded-2xl'>
        <div className='flex gap-5 px-8 text-[#6379F4] border-l-4 border-[#6379F4]'>
            <Icon.Grid />
            <div>Dasboard</div>
        </div>        
        <div className='flex gap-5 px-8 '>
            <Icon.ArrowUp />
            <div>Transfer</div>
        </div>        
        <div className='flex gap-5 px-8 '>
            <Icon.Plus />
            <div>Top Up</div>
        </div>        
        <div className='flex flex-1 gap-5 px-8 '>
            <Icon.User />
            <div>Profile</div>
        </div>        
        <div className='flex gap-5 px-8 '>
            <Icon.LogOut />
            <div>Logout</div>
        </div>   
    </nav>   
  )
}

export default Navbar