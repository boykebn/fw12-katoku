import Left from '../components/left';
import React from 'react';
import * as Icon from 'react-feather';
import Link from 'next/link';
import axios from 'axios';
import http from '../helpers/http';
import { useDispatch, useSelector } from 'react-redux';
import jwtDecode from 'jwt-decode';
import { useRouter } from 'next/router';


const CreatePin = () => {
    const dispatch = useDispatch();
    const router = useRouter()
    const token = useSelector((state)=> state.auth.token);
    const decode = jwtDecode(token);
    const userId = decode.id;
    const [tampungPin, setTampungPin] = React.useState("");
    
    const input1 = React.useRef(null);
    const input2 = React.useRef(null);
    const input3 = React.useRef(null);
    const input4 = React.useRef(null);
    const input5 = React.useRef(null);
    const input6 = React.useRef(null);

    

    const changeInput = (e) =>{
        if (e.target.value.length > 1) {
            e.target.value = e.target.value.slice(0,1);
        };
        const pinInput = {
            1: input1,
            2: input2,
            3: input3,
            4: input4,
            5: input5,
            6: input6,
        };
        const currentInput = Number(e.target.name);
        if(e.target.value.length){
            pinInput[currentInput + 1]?.current?.focus();
        }
        else {
            pinInput[currentInput - 1]?.current?.focus();
            if(currentInput < 6) {
                for (let i = currentInput; i <= 6; i++){
                    pinInput[i].current.value = "";
                }
            }
        }
        let valuePin = "";
        for (let i = 1; i <= 6; i++){
            valuePin += pinInput[i]?.current?.value;
        }

        if(valuePin.length == 6){
        //    tampungPin = valuePin
        // setTampungPin(valuePin)       
           postPin(userId, valuePin)
        //    console.log(tampungPin)
        }

    };

    async function postPin(id, createPin) {
        // try{
        //     console.log("masuk postPin")
            console.log(id)
            console.log(createPin)
        //     if((id) && (createPin)){
        //         console.log("masuk if post pin")
                await axios.post( `${process.env.NEXT_PUBLIC_URL}/auth/set-pin`, {userId: id, pin: createPin}, {headers: {"authorization" : `Bearer ${token.token}`}})
                router.push("/home");
        //     }
        //     else{
        //         console.log("masuk else post pin")
        //         throw(err)
        //     }

        // } catch(err){
        //     console.log("error post")
            
        // }
    }

    // function tryingPost (idid,pinpin){
    //     console.log("ini pinpin "+ pinpin)
    //     postPin(idid, pinpin)
        
    // }
    return (        
            <div className='h-screen flex'>
                <div className='h-full hidden md:flex flex-[0.6]'>
                    <Left />
                </div>

                <div className='flex-1 md:flex-[0.4] px-14 py-[120px] overflow-scroll overflow-x-hidden text-[#688e51]'>
                    <div className='mb-10 text-2xl font-bold'>
                        <h1 >Secure Your Account, Your Wallet,
                            and Your Data With 6 Digits PIN
                            That You Created Yourself.</h1>
                    </div>
                    <div className='text-md mb-14'>
                        <p>Create 6 digits pin to secure all your money and your data in CANA app. Keep it secret and don’t tell anyone about your CANA account password and the PIN.</p>
                    </div>

                    {/* <form onSubmit={tryingPost(userId, tampungPin)}> */}
                    <form >
                        <div className="mb-5">                            
                            <div className='flex gap-4'>
                                <input className='border-2 border-[#688e51] focus:outline-none bg-white rounded-xl w-full h-10 text-center text-xl text-[#688e51]' type="number" name='1' ref={input1} onChange={changeInput} />
                                <input className='border-2 border-[#688e51] focus:outline-none bg-white rounded-xl w-full h-10 text-center text-xl text-[#688e51]' type="number" name='2' ref={input2} onChange={changeInput} />
                                <input className='border-2 border-[#688e51] focus:outline-none bg-white rounded-xl w-full h-10 text-center text-xl text-[#688e51]' type="number" name='3' ref={input3} onChange={changeInput} />
                                <input className='border-2 border-[#688e51] focus:outline-none bg-white rounded-xl w-full h-10 text-center text-xl text-[#688e51]' type="number" name='4' ref={input4} onChange={changeInput} />
                                <input className='border-2 border-[#688e51] focus:outline-none bg-white rounded-xl w-full h-10 text-center text-xl text-[#688e51]' type="number" name='5' ref={input5} onChange={changeInput} />
                                <input className='border-2 border-[#688e51] focus:outline-none bg-white rounded-xl w-full h-10 text-center text-xl text-[#688e51]' type="number" name='6' ref={input6} onChange={changeInput} />
                                
                            </div>                            
                        </div>
                        <div className='pb-10'>
                            <button className="btn text-center border rounded-md bg-[#1d2817] w-full" type='submit'>Confirm</button>
                        </div>
                    </form>
                </div>
            </div>
        
    )
}

export default CreatePin;