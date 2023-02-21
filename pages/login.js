import Left from '../components/left';
import React from 'react';
import * as Icon from 'react-feather';
import Link from 'next/link';
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../redux/action/auth";
import { useRouter } from 'next/router';

import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import YupPassword from "yup-password";

YupPassword(Yup);

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .password()
    .min(6, "Min lenght 6")
    .minLowercase(1, "Min lowercase 1")
    .minUppercase(1, "Min uppercase 1")
    .minNumbers(1, "Min numbers 1")
    .minSymbols(1, "Min symbol 1")
    .required("Required"),
});

const Login = () => {
    const {message} = useSelector((state)=> state.auth)
    // console.log(message)
    const dispatch = useDispatch();
    const token = useSelector((state) => state.auth)
    const router = useRouter();

    const [msgSucces, setMsgSucces] = React.useState("");
    const [msgFailed, setMsgFailed] = React.useState("")

    const handleSubmit = async  (value) => {
        const email = value.email;
        const password = value.password;
        try {
          await dispatch(loginAction(
            { email, password, cb: () => router.push("/home") }
            ));
            if (message === 'Rejected') {
              setMsgFailed(message)
              setTimeout(() => {
                setMsgFailed(false)
              }, 2000);
            } else {
              console.log("mashok")
              setMsgSucces("Login Succes")
              setTimeout(() => {
                setMsgSucces(false)
              }, 10000);
            }
        }catch(error) {
          if (error) throw error
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

                    {msgFailed? (
                        <div className="alert alert-error shadow-lg">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                <span>{msgFailed}</span>
                            </div>
                        </div>
                    ) : null}

                    {msgSucces? (
                      <div className="alert alert-success shadow-lg">
                        <div>
                          <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                          <span>{msgSucces}</span>
                        </div>
                    </div>
                    ): null}


                    <Formik initialValues={{
                            email: "",
                            password:""
                        }}
                        validationSchema={LoginSchema}
                        onSubmit={handleSubmit}
                        >
                            {({errors, touched }) =>(
                                <Form>
                                <div className="flex flex-col mb-7 pt-10">
                                    <div className=" bg-white flex">
                                        <div className='border-b-2 flex py-2 px-4 '>
                                            <Icon.Mail />
                                            <Field className='pl-5 w-[450px]' type="email" name="email" placeholder="Enter your e-mail" />
                                            {errors.email && touched.email ? (<div className="text-red-500">{errors.email}</div>) : null}
                                        </div>
                                    </div>
                                </div>
        
                                <div className="flex flex-col mb-5 pt-10">
                                    <div className=" bg-white flex">
                                        <div className='border-b-2 flex py-2 px-4 '>
                                            <Icon.Lock />
                                            <Field className='pl-5 w-[450px]' type="password" name="password" placeholder="Enter your password" />
                                            {errors.password && touched.password ? (<div className="text-red-500">{errors.password}</div>) : null}
                                        </div>
                                    </div>
                                </div>
        
                                <div>
                                    <Link href='/forgot-password'>
                                        <p className='text-end text-sm text-[#3A3D42CC] pr-[52px]'>Forgot password?</p>
                                    </Link>
                                </div>
        
                                <div className='pt-20 flex justify-center pr-10'>
                                    <button className="btn btn-wide text-center w-[510px] h-10 border rounded-md bg-[#9ED5C5]" type='submit'>Login</button>
                                </div>
        
                            </Form>
                            )}

                    </Formik>
                                <div className='flex justify-center pt-10 pr-5'>
                                    <p className='flex gap-1 text-[#3A3D42CC] text-sm'>Don’t have an account? Let’s {" "}</p>
                                    <Link href='/sign-up'>
                                      <p className='text-[#8EC3B0] pl-1 text-sm'>Sign Up</p>
                                    </Link>
                                </div>

                    
                </div>
            </div>
        </div>
    )
}

export default Login;