import React from "react";

const TopUp = () => {


    return (
        <>
        <div className="modal" id="topup">
            <div className="modal-box w-[500px]">
                <h3 className="font-bold text-lg">Top Up</h3>
                <div className="w-[302px]">
                    <p className="py-4 text-[#3A3D4299]">Enter the amount of money, and click submit</p>
                </div>
                <div className="flex gap-5 pt-5">
                    <div className="border-2 border-black rounded-lg inline-block overflow-hidden">
                        <input type='number' className='outline-none px-2' />
                    </div>
                </div>
                <div className="modal-action pt-10">
                    <a href="/home" className="btn ">Submit</a>
                </div>
            </div>  
        </div>
        </>
    )
}

export default TopUp;