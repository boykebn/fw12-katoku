import Left from '../components/left';
import React from 'react';
import * as Icon from 'react-feather';
import Link from 'next/link';
import Image from 'next/image';
import checklist from '../assets/images/cheklist.png'


const AlertPin = () => {
    return (
        <div>
            <div className='min-w-screen h-full grid grid-cols-[800px_minmax(640px,_1fr)]'>
                <div>
                    <Left />
                </div>

                <div className='px-20'>
                    <div className='pt-28'>
                        <Image src={checklist} alt="cheklist pin alert"/>
                    </div>
                    <div className='w-[390px] pt-16'>
                        <h1 className='text-2xl font-semibold leading-9'>Your PIN Was Successfully Created</h1>
                    </div>
                    <div className='w-[493px] pt-5'>
                        <p className='text-[#3A3D4299] text-lg leading-8'>Your PIN was successfully created and you can now access all the features in KantongKu.</p>
                    </div>

                    <form>
                        <div className='pt-20 flex justify-center pr-10'>
                            <button className="btn btn-wide text-center w-[510px] h-14 border rounded-md bg-[#6379F4] text-white font-semibold" type='submit'>Go To Dashboard</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AlertPin;