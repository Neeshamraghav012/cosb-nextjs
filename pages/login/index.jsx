import {motion} from "framer-motion";
import Link from "next/link";
import {useEffect, useState, useCallback} from "react";
import {LOGIN} from "../../config/constants";
import axios from "axios";
import {login} from "../../utility/Auth";
import {isLoggedin} from "../../utility/Auth";
import Head from "next/head";
import {ButtonLoading} from "../../components/LoadingComponents";
import GoogleButton from 'react-google-button';
import Footer from "../../components/Footer";


const Login = () => {
    const [isLogged, setIsLogged] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoaded, setIsLoaded] = useState(true);


    useEffect(() => {
        isLoggedin().then((res) => {
            setIsLogged(res);
        });
    }, []);

    if(isLogged) {
        window.location.href = "/";
    }


    const handleSubmit = async (e) => {
        setIsLoaded(false);
        await axios.post(LOGIN, {
            username,
            password,
        })
            .then((res) => {
                let token = res.data.access;
                if(token) {
                    login(token, username);
                    window.location.href = "/";
                }
                else {
                    setError("Username or password is incorrect");
                    setIsLoaded(true);
                }
            }).catch((err) => {
                setError("Username or password is incorrect");
                setIsLoaded(true);
            });
    }


    const openGoogleLoginPage = useCallback(() => {
      const googleAuthUrl = 'https://accounts.google.com/o/oauth2/v2/auth';
      const redirectUri = 'api/v1/auth/login/google/';

      const scope = [
        'https://www.googleapis.com/auth/userinfo.email',
        'https://www.googleapis.com/auth/userinfo.profile'
      ].join(' ');

      const params = {
        response_type: 'code',
        client_id: '844679618353-fj41j1j2o7ck54bclf09ngq1h0dlm4ka.apps.googleusercontent.com',
        redirect_uri: `https://neesham.pythonanywhere.com/${redirectUri}`,
        prompt: 'select_account',
        access_type: 'offline',
        scope
      }



        const urlParams = new URLSearchParams(params).toString();

        window.location = `${googleAuthUrl}?${urlParams}`;

    }, []);

    

    return (

        <>
        <div>
            <Head>
                <title>Login - cosb</title>
            </Head>
            <motion.div animate={{scale:[0.8,1]}} transition={{duration:0.3}} className={'flex flex-col mx-auto justify-center items-center mt-20 container py-20 lg:w-1/3 md:w-1/2 rounded-3xl shadow-2xl border-1 border-neutral-200'}>
                <h1 className={'font-bold text-3xl'}>Log in to cosb</h1>
                {/*<div className={'flex flex-col mt-10'}>
                    <label className={'my-2'}>Username or Email</label>
                    <input type={'text'} className={'border-solid border-grey-300 border-1 rounded-lg p-2 outline-black'} onChange={(event) => {
                        setUsername(event.target.value);
                    }} />

                    <label className={'my-2'}>Password</label>
                    <input type={'password'} className={'border-solid border-grey-300 border-1 rounded-lg p-2 outline-black'} onChange={() => {
                        setPassword(event.target.value);
                    }} />
                </div>
                <motion.div whileHover={{scale:1.05}} className={'mt-2'}>
                    <span className={'cursor-pointer hover:underline text-left'}>Forgot Password?</span>
                </motion.div>

                <span className={'mt-1 text-red-500'}>{error}</span>*/}

                {/*<motion.button whileHover={{scale:1.1}} className={'py-2 w-24 bg-gray-800 hover:bg-black rounded-lg text-white mt-5'} onClick={() => {
                    handleSubmit();
                }}>{isLoaded ? 'Log in' : <ButtonLoading/>}</motion.button>*/}

                <GoogleButton
                  onClick={openGoogleLoginPage}
                  label="Sign in with Google"
                  
                />

                {/*<div className={'flex text-left  mt-5 '}>
                    <span className={'text-gray-700'}>New to cosb?</span>
                    <Link href={'/signup'}>
                        <span className={'cursor-pointer font-semibold hover:underline ml-4'}>Sign up now</span>
                    </Link>

   

            </div>*/}

            </motion.div>

        </div>

            <Footer className={'mt-20'}/>

        </>
    )
}

export default Login;