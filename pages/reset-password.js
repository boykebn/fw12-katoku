import Left from '../components/left';
import React from 'react';
import * as Icon from 'react-feather';
import Link from 'next/link';


const ResetPassword = () => {
    return (
        <div>
            <div className='min-w-screen min-h-screen grid grid-cols-[800px_minmax(640px,_1fr)]'>
                <div>
                    <Left />
                </div>

                <div className='px-20'>
                    <div className='w-[390px] pt-32'>
                        <h1 className='text-2xl font-semibold leading-9'>Did You Forgot Your Password?
Don’t Worry, You Can Reset Your
Password In a Minutes.</h1>
                    </div>
                    <div className='w-[493px] pt-5'>
                        <p className='text-[#3A3D4299] text-lg leading-8'>Now you can create a new password for your FazzPay account. Type your password twice so we can confirm your new passsword.</p>
                    </div>

                    <form>
                        <div className="flex flex-col mb-7 pt-10">
                            <div className=" bg-white flex">
                                <div className='border-b-2 flex py-2 px-4 '>
                                    <Icon.Lock />
                                    <input className='pl-5 w-[450px]' type="password" name="password" placeholder="Create new password" />  
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col mb-5 pt-10">
                            <div className=" bg-white flex">
                                <div className='border-b-2 flex py-2 px-4 '>
                                    <Icon.Lock />
                                    <input className='pl-5 w-[450px]' type="password" name="password" placeholder="Confirm new password" />  
                                </div>
                            </div>
                        </div>

                        <div className='pt-20 flex justify-center pr-10'>
                            <button className="btn btn-wide text-center w-[510px] h-14 border rounded-md bg-[#6379F4] text-white font-semibold" type='submit'>Confirm</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ResetPassword;