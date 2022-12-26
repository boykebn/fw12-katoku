import Left from '../components/left';
import React from 'react';
import * as Icon from 'react-feather';
import Link from 'next/link';


const FillPin = () => {
    return (
        <div>
            <div className='min-w-screen h-full grid grid-cols-[800px_minmax(640px,_1fr)]'>
                <div>
                    <Left />
                </div>

                <div className='px-20'>
                    <div className='w-[390px] pt-32'>
                        <h1 className='text-2xl font-semibold leading-9'>Secure Your Account, Your Wallet,
and Your Data With 6 Digits PIN
That You Created Yourself.</h1>
                    </div>
                    <div className='w-[493px] pt-5'>
                        <p className='text-[#3A3D4299] text-lg leading-8'>Create 6 digits pin to secure all your money and your data in KantongKu app. Keep it secret and don’t tell anyone about your KantongKu account password and the PIN.</p>
                    </div>

                    <form>
                        <div className="flex flex-col mb-5 pt-10">
                            <div className=" bg-white flex">
                                <div className='flex gap-[35px]'>
                                    <input className='border-2 border-[#6379F4] bg-white rounded-xl w-[53px] h-[65px] px-4 text-3xl ' type="text" name="text" placeholder="" />
                                    <input className='border-2 border-[#6379F4] bg-white rounded-xl w-[53px] h-[65px] px-4 text-3xl ' type="text" name="text" placeholder="" />
                                    <input className='border-2 border-[#6379F4] bg-white rounded-xl w-[53px] h-[65px] px-4 text-3xl ' type="text" name="text" placeholder="" />
                                    <input className='border-2 border-[#6379F4] bg-white rounded-xl w-[53px] h-[65px] px-4 text-3xl ' type="text" name="text" placeholder="" />
                                    <input className='border-2 border-[#6379F4] bg-white rounded-xl w-[53px] h-[65px] px-4 text-3xl ' type="text" name="text" placeholder="" />
                                    <input className='border-2 border-[#6379F4] bg-white rounded-xl w-[53px] h-[65px] px-4 text-3xl ' type="text" name="text" placeholder="" />  
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

export default FillPin;