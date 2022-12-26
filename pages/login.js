import Left from '../components/left';
import React from 'react';
import * as Icon from 'react-feather';
import Link from 'next/link';


const Login = () => {
    return (
        <div>
            <div className='min-w-screen min-h-screen grid grid-cols-[800px_minmax(640px,_1fr)]'>
                <div>
                    <Left />
                </div>

                <div className='px-20'>
                    <div className='w-[390px] pt-32'>
                        <h1 className='text-2xl font-semibold leading-9'>Start Accessing Banking Needs
                            With All Devices and All Platforms
                            With 30.000+ Users</h1>
                    </div>
                    <div className='w-[493px] pt-5'>
                        <p className='text-[#3A3D4299] text-lg leading-8'>Transfering money is eassier than ever, you can access KantongKu wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!</p>
                    </div>

                    <form>
                        <div className="flex flex-col mb-7 pt-10">
                            <div className=" bg-white flex">
                                <div className='border-b-2 flex py-2 px-4 '>
                                    <Icon.Mail />
                                    <input className='pl-5 w-[450px]' type="email" name="email" placeholder="Enter your e-mail" />  
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col mb-5 pt-10">
                            <div className=" bg-white flex">
                                <div className='border-b-2 flex py-2 px-4 '>
                                    <Icon.Lock />
                                    <input className='pl-5 w-[450px]' type="password" name="password" placeholder="Enter your password" />  
                                </div>
                            </div>
                        </div>

                        <div>
                            <Link href='/'>
                                <p className='text-end text-sm text-[#3A3D42CC] pr-[52px]'>Forgot password?</p>
                            </Link>
                        </div>

                        <div className='pt-20 flex justify-center pr-10'>
                            <button className="btn btn-wide text-center w-[510px] h-10 border rounded-md bg-[#6379F4]" type='submit'>Login</button>
                        </div>

                        <div className='flex justify-center pt-10 pr-5'>
                            <p className='flex gap-1 text-[#3A3D42CC] text-sm'>Don’t have an account? Let’s </p>
                            <Link href='/'> <p className='text-[#6379F4]'>Sign Up</p></Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;