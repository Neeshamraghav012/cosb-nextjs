import Navbar from "../../components/Navbar";
import {motion} from "framer-motion";
import Footer from "../../components/Footer";
import Link from "next/link";
import {useState} from "react";
import axios from "axios";
import {SIGNUP} from "../../config/constants";

const Signup = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post(SIGNUP, {
            username,
            email,
            password,
        })
            .then((res) => {
                console.log(res.data);
            })
    }

    return (
        <div>
            <Navbar/>
            <motion.div animate={{scale:[0.8,1]}} transition={{duration:0.3}} className={'flex flex-col mx-auto justify-center items-center mt-20 container py-20 lg:w-1/3 md:w-1/2 rounded-3xl shadow-2xl border-1 border-neutral-200'}>
                <h1 className={'font-bold text-3xl'}>Sign up to cosb</h1>
                <div className={'flex flex-col mt-10'}>
                    <label className={'my-2'}>Username</label>
                    <input type={'text'} className={'border-solid border-grey-300 border-1 rounded-lg p-2 outline-black'} onChange={(event) => {
                        setUsername(event.target.value);
                    }} />

                    <label className={'my-2'}>Email</label>
                    <input type={'email'} className={'border-solid border-grey-300 border-1 rounded-lg p-2 outline-black'} onChange={(event) => {
                        setEmail(event.target.value);
                    }} />

                    <label className={'my-2'}>Password</label>
                    <input type={'password'} className={'border-solid border-grey-300 border-1 rounded-lg p-2 outline-black'} onChange={(event) => {
                        setPassword(event.target.value);
                    }} />
                </div>

                <motion.button whileHover={{scale:1.1}} className={'py-2 px-6 bg-gray-800 hover:bg-black rounded-lg text-white mt-5'} onClick={handleSubmit} >Sign up</motion.button>

                <div className={'flex text-left  mt-5 '}>
                    <span className={'text-gray-700'}>Been here before?</span>
                    <Link href={'/login'}>
                        <span className={'cursor-pointer font-semibold hover:underline ml-4'}>Log in</span>
                    </Link>
                </div>
            </motion.div>

            <Footer className={'mt-20'}/>
        </div>
    );
}

export default Signup;