import React from "react";

const Modal = ({onChangePin}) => {
    const input1 = React.useRef(null);
    const input2 = React.useRef(null);
    const input3 = React.useRef(null);
    const input4 = React.useRef(null);
    const input5 = React.useRef(null);
    const input6 = React.useRef(null);

    const changeInput = (e) => {
        if (e.target.value.length > 1) {
            e.target.value = e.target.value.slice(0, 1)
        }
        const pinInput = {
            1: input1,
            2: input2,
            3: input3,
            4: input4,
            5: input5,
            6: input6,
        };
        const currentInput = Number(e.target.name);
        if (e.target.value.length) {
            pinInput[currentInput + 1]?.current?.focus();
        } else {
            pinInput[currentInput - 1]?.current?.focus();
            if(currentInput < 6) {
                for(let i = currentInput; i <= 6; i++) {
                    pinInput[i].current.value = "";
                }
            }
        }
        let pin = ""
        for(let i = 1; i <= 6; i++) {
            pin += pinInput[i].current.value
        }
        onChangePin(pin);
    };



    return (
        <>
        <div className="modal" id="my-modal-2">
            <div className="modal-box w-[500px] h-[417px]">
                <h3 className="font-bold text-lg">Enter PIN to Transfer</h3>
                <div className="w-[302px]">
                    <p className="py-4 text-[#3A3D4299]">Enter your 6 digits PIN for confirmation to continue transferring money. </p>
                </div>
                <div className="flex gap-5 pt-5">
                    <div className="border-2 border-black rounded-lg inline-block w-[60px] h-[65px] overflow-hidden">
                        <input type='number' ref={input1} onChange={changeInput} name="1"  className='w-full h-full text-center outline-none px-2' />
                    </div>
                    <div className="border-2 border-black rounded-lg inline-block w-[60px] h-[65px] overflow-hidden">
                        <input type='number' ref={input2} onChange={changeInput} name="2" className='w-full h-full text-center outline-none px-2' />
                    </div>
                    <div className="border-2 border-black rounded-lg inline-block w-[60px] h-[65px] overflow-hidden">
                        <input type='number' ref={input3} onChange={changeInput} name="3" className='w-full h-full text-center outline-none px-2' />
                    </div>
                    <div className="border-2 border-black rounded-lg inline-block w-[60px] h-[65px] overflow-hidden">
                        <input type='number' ref={input4} onChange={changeInput} name="4" className='w-full h-full text-center outline-none px-2' />
                    </div>
                    <div className="border-2 border-black rounded-lg inline-block w-[60px] h-[65px] overflow-hidden">
                        <input type='number' ref={input5} onChange={changeInput} name="5" className='w-full h-full text-center outline-none px-2' />
                    </div>
                    <div className="border-2 border-black rounded-lg inline-block w-[60px] h-[65px] overflow-hidden">
                        <input type='number' ref={input6} onChange={changeInput} name="6" className='w-full h-full text-center outline-none px-2' />
                    </div>
                </div>
                <div className="modal-action pt-20">
                    <a href="/success" className="btn ">Continue</a>
                </div>
            </div>  
        </div>
        </>
    )
}

export default Modal;