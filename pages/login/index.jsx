import Navbar from "../../components/Navbar";
import {motion} from "framer-motion";
import Footer from "../../components/Footer";
import Link from "next/link";

const Login = () => {
    return (
        <div>
            <Navbar/>
            <motion.div animate={{scale:[0.8,1]}} transition={{duration:0.3}} className={'flex flex-col mx-auto justify-center items-center mt-20 container py-20 lg:w-1/3 md:w-1/2 rounded-3xl shadow-2xl border-1 border-neutral-200'}>
                <h1 className={'font-bold text-3xl'}>Log in to cosb</h1>
                <div className={'flex flex-col mt-10'}>
                    <label className={'my-2'}>Username or Email</label>
                    <input type={'text'} className={'border-solid border-grey-300 border-1 rounded-lg p-2 outline-black'}/>

                    <label className={'my-2'}>Password</label>
                    <input type={'password'} className={'border-solid border-grey-300 border-1 rounded-lg p-2 outline-black'}/>
                </div>
                <motion.div whileHover={{scale:1.05}} className={'mt-2'}>
                    <span className={'cursor-pointer hover:underline text-left'}>Forgot Password?</span>
                </motion.div>

                <motion.button whileHover={{scale:1.1}} className={'py-2 px-6 bg-gray-800 hover:bg-black rounded-lg text-white mt-5'}>Log in</motion.button>

                <div className={'flex text-left  mt-5 '}>
                    <span className={'text-gray-700'}>New to cosb?</span>
                    <Link href={'/signup'}>
                        <span className={'cursor-pointer font-semibold hover:underline ml-4'}>Sign up now</span>
                    </Link>
                </div>

            </motion.div>

            <Footer className={'mt-20'}/>
        </div>
    );
}

export default Login;