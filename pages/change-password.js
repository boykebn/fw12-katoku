import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import * as Icon from 'react-feather'

const ChangePassword = () => {
  return (
    <div className='font-nunitoSans'>
        <Header />
        <main className='py-10 px-36 flex gap-5'>
            <div className='flex-[0.2]'>
                <Navbar />
            </div>
            <div className='flex flex-col flex-[0.8] gap-5'>
                <div className='bg-white flex flex-col flex-[0.5] px-10 py-8 rounded-xl gap-10'>
                    <div>
                        <div className='flex-1'>
                            <div className='font-bold mb-6'>Change Password</div>
                            <div className='w-[342px] text-[#7A7886]'>You must enter your current password and then type your new password twice.</div>
                        </div>
                    </div>                        
                    <div className='flex-1 text-[#A9A9A9CC]'>
                        <form className='flex flex-col gap-16 '>
                            <div className='flex justify-center'>
                                <div className='border-b-4 flex gap-5 pb-3 items-center w-1/2'>
                                    <Icon.Lock/>
                                    <input className='flex-1 p-2 focus:outline-none'  type='password' name='currentpassword' placeholder='Current Password'></input>
                                    <Icon.EyeOff/>
                                </div>
                            </div>                            
                            <div className='flex justify-center'>
                                <div className='border-b-4 flex gap-5 pb-3 items-center w-1/2'>
                                    <Icon.Lock/>
                                    <input className='flex-1 p-2 focus:outline-none' type='password' name='newpassword' placeholder='New Password'></input>
                                    <Icon.EyeOff/>
                                </div>
                            </div>  
                            <div className='flex justify-center'>
                                <div className='border-b-4 flex gap-5 pb-3 items-center w-1/2'>
                                    <Icon.Lock/>
                                    <input className='flex-1 p-2 focus:outline-none' type='password' name='repeatnewpassword' placeholder='Repeat New Password'></input>
                                    <Icon.EyeOff/>
                                </div>
                            </div>  
                            <div className='flex justify-center '>
                                <button className='btn w-1/2 bg-[#DADADA]'>Change Password</button>
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

export default ChangePassword