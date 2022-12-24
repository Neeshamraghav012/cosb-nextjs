import {motion} from "framer-motion";
import Link from "next/link";
import {useEffect, useState} from "react";
import {LOGIN} from "../../config/constants";
import axios from "axios";
import {login} from "../../utility/Auth";
import {isLoggedin} from "../../utility/Auth";
import Head from "next/head";
import {ButtonLoading} from "../../components/LoadingComponents";
import Footer from "../../components/Footer";


const ContactUs = () => {

    return (
        <div>
            <Head>
                <title>Contact Us - cosb</title>
            </Head>
            <motion.div animate={{scale:[0.8,1]}} transition={{duration:0.3}} className={'flex flex-col mx-auto justify-center items-center mt-20 container py-20 lg:w-1/3 md:w-1/2 rounded-3xl shadow-2xl border-1 border-neutral-200'}>
                <h1 className={'font-bold text-3xl'}>Contact</h1>
                <div className={'flex flex-col mt-10'}>

                </div>
                <motion.div whileHover={{scale:1.05}} className={'mt-2'}>
                    <span className={'cursor-pointer hover:underline text-left'}>Email: neeshamraghav0@gmail.com</span>
                </motion.div>

                <motion.div whileHover={{scale:1.05}} className={'mt-2'}>
                    <span className={'cursor-pointer hover:underline text-left'}>Phone: +91 7206126235</span>
                </motion.div>



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

export default ContactUs;