import Left from '../components/left';
import React from 'react';
import * as Icon from 'react-feather';
import Link from 'next/link';
import { useDispatch, useSelector } from "react-redux";
import { registerAction } from "../redux/action/auth";
import { useRouter } from 'next/router';

import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import YupPassword from "yup-password";

YupPassword(Yup);

const SignUpSchema = Yup.object().shape({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
        .password()
        .min(8, "Min lenght 8")
        .minLowercase(1, "Min lowercase 1")
        .minUppercase(1, "Min uppercase 1")
        .minNumbers(1, "Min numbers 1")
        .minSymbols(1, "Min symbol 1")
        .required("Required"),
});


const SignUp = () => {
    const {message} = useSelector((state)=> state.auth)
    const dispatch = useDispatch();
    const router = useRouter();

    const handleSubmit = (value) => {
        const firstName = value.firstName;
        const lastName = value.lastName;
        const email = value.email;
        const password = value.password;
        dispatch(registerAction({ firstName, lastName, email, password, cb: () => router.push("/home") }));
    };



    return (
        <div>
            <div className='min-w-screen min-h-screen grid grid-cols-[800px_minmax(640px,_1fr)]'>
                <div>
                    <Left />
                </div>

                <div className='px-20'>
                    <div className='w-[390px] pt-28'>
                        <h1 className='text-2xl font-semibold leading-9'>Start Accessing Banking Needs
                            With All Devices and All Platforms
                            With 30.000+ Users</h1>
                    </div>
                    <div className='w-[493px] pt-5'>
                        <p className='text-[#3A3D4299] text-lg leading-8'>Transfering money is eassier than ever, you can access KantongKu wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!</p>
                    </div>

                    {message ? (
                        <div className="alert shadow-lg">
                            <div>
                                {/* <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg> */}
                                {message}
                            </div>
                        </div>
                    ) : null}

                    <Formik initialValues={{
                        firstName: "",
                        lastName: "",
                        email: "",
                        password:""
                    }}
                    validationSchema={SignUpSchema}
                    onSubmit={handleSubmit}
                    >
                        {({errors, touched }) =>(
                            <Form>
                            <div className="flex flex-col mb-7 pt-10">
                                <div className=" bg-white flex">
                                    <div className='border-b-2 flex py-2 px-4 '>
                                        <Icon.User />
                                        <Field className='pl-5 w-[450px]' type="text" name="firstName" placeholder="Enter your firstname" />  
                                    </div>
                                </div>
                                {errors.firstName && touched.firstName ? (<div className="text-red-500">{errors.firstName}</div>) : null}
                            </div>
    
                            <div className="flex flex-col mb-7 pt-5">
                                <div className=" bg-white flex">
                                    <div className='border-b-2 flex py-2 px-4 '>
                                        <Icon.User />
                                        <Field className='pl-5 w-[450px]' type="text" name="lastName" placeholder="Enter your lastname" />  
                                    </div>
                                </div>
                                {errors.lastName && touched.lastName ? (<div className="text-red-500">{errors.lastName}</div>) : null}
                            </div>
    
                            <div className="flex flex-col mb-7 pt-5">
                                <div className=" bg-white flex">
                                    <div className='border-b-2 flex py-2 px-4 '>
                                        <Icon.Mail />
                                        <Field className='pl-5 w-[450px]' type="email" name="email" placeholder="Enter your e-mail" />  
                                    </div>
                                </div>
                                {errors.email && touched.email ? (<div className="text-red-500">{errors.email}</div>) : null}
                            </div>
    
                            <div className="flex flex-col mb-5 pt-5">
                                <div className=" bg-white flex">
                                    <div className='border-b-2 flex py-2 px-4 '>
                                        <Icon.Lock />
                                        <Field className='pl-5 w-[450px]' type="password" name="password" placeholder="Enter your password" />  
                                    </div>
                                </div>
                                {errors.password && touched.password ? (<div className="text-red-500">{errors.password}</div>) : null}
                            </div>
    
                            <div className='pt-5 flex justify-center pr-10'>
                                <button className="btn btn-wide text-center w-[510px] h-10 border rounded-md bg-[#9ED5C5]" type='submit'>SignUp</button>
                            </div>
    
                            <div className='flex justify-center pt-5 pr-5'>
                                <p className='flex text-[#3A3D42CC] text-sm'>Already have an account? Let’s</p>
                                <Link href='/login'> <p className='text-[#8EC3B0] pl-1 text-sm'>Login</p></Link>
                            </div>
                        </Form>
                        )}

                    </Formik>

                    
                </div>
            </div>
        </div>
    )
}

export default SignUp;