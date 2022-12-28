import Left from '../components/left';
import React from 'react';
import * as Icon from 'react-feather';
import Link from 'next/link';
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../redux/action/auth";
import { useRouter } from 'next/router';



const Login = () => {
    // const [errMessage, setErrMessage] = React.useState("");
    const {error} = useSelector((state)=> state.auth)
    const dispatch = useDispatch();
    const router = useRouter();

    const login = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const cb = () => {
            router.push("/home");
        };

        try {
            // const results = await dispatch(
            //     loginAction({
            //     email,
            //     password,
            //     cb,
            //     })
            // );
           dispatch(
                loginAction({
                email,
                password,
                cb,
                })
            );
            // setErrMessage(results.payload);
        } catch (error) {
            console.log(error);
            }
        };

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

                    {error? (
                        <div className="alert alert-error shadow-lg">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                <span>{error}</span>
                            </div>
                        </div>
                    ) : null}

                    <form onSubmit={login}>
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