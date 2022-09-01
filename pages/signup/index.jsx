import Navbar from "../../components/Navbar";
import {motion} from "framer-motion";
import Footer from "../../components/Footer";

const Signup = () => {
    return (
        <div>
            <Navbar/>
            <motion.div animate={{scale:[0.8,1]}} transition={{duration:0.3}} className={'flex flex-col mx-auto justify-center items-center mt-20 container py-20 lg:w-1/3 md:w-1/2 rounded-3xl shadow-2xl border-1 border-neutral-200'}>
                <h1 className={'font-bold text-3xl'}>Sign up to cosb</h1>
                <div className={'flex flex-col mt-10'}>
                    <label className={'my-2'}>Username</label>
                    <input type={'text'} className={'border-solid border-grey-300 border-1 rounded-lg p-2 outline-black'}/>

                    <label className={'my-2'}>Email</label>
                    <input type={'email'} className={'border-solid border-grey-300 border-1 rounded-lg p-2 outline-black'}/>

                    <label className={'my-2'}>Password</label>
                    <input type={'password'} className={'border-solid border-grey-300 border-1 rounded-lg p-2 outline-black'}/>
                </div>

                <motion.button whileHover={{scale:1.1}} className={'py-2 px-6 bg-gray-800 hover:bg-black rounded-lg text-white mt-5'}>Sign up</motion.button>
            </motion.div>

            <Footer className={'mt-20'}/>
        </div>
    );
}

export default Signup;