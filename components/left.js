import Image from 'next/image';
import phoneLogin from '../assets/images/phoneLogin.png'

const Left = () => {
    return(
        <div>
            <div className="bg-landing_bg bg-contain bg-cover bg-no-repeat">
                    <div className='px-32 pt-16 flex items-center'>
                        <p className='text-white text-2xl font-semibold'>KantongKu</p>
                    </div>
                    <div className='pl-32 pt-5'>
                        <Image src={phoneLogin} alt='bg-login' />
                    </div>
                    <div className='px-32'>
                        <p className='text-white text-xl font-semibold'>App that Covering Banking Needs.</p>
                    </div>
                    <div className='px-32 w-[730px] pt-5 pb-12'>
                        <p className='text-white text-md text-[#FFFFFFCC]'>KantongKu is an application that focussing in banking needs for all users
                            in the world. Always updated and always following world trends.
                            5000+ users registered in FazzPay everyday with worldwide
                            users coverage.</p>
                    </div>
                </div>
        </div>
    )
}

export default Left;