import {motion} from "framer-motion";
import Link from "next/link";
import {useState, useCallback} from "react";
import axios from "axios";
import {SIGNUP} from "../../config/constants";
import Head from "next/head";
import AlertTitle from "@mui/material/AlertTitle";
import Alert from "@mui/material/Alert";
import {ButtonLoading} from "../../components/LoadingComponents";
import GoogleButton from 'react-google-button';
import Footer from "../../components/Footer";


const Signup = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    

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

    const handleSubmit = async (e) => {
        setIsLoading(true);
        await axios.post(SIGNUP, {
            username,
            email,
            password,
        })
            .then((res) => {
                if(res.data.status) {
                    setSuccess(true);
                    setIsLoading(false);
                }
                else {
                    if(res.data.username) {
                        setError(res.data.username[0]);
                    }
                    else if(res.data.email) {
                        setError(res.data.email[0]);
                    }
                    else if(res.data.password) {
                        setError(res.data.password[0]);
                    }
                    setIsLoading(false);
                }
            })
            .catch((err) => {
                if(err.response.data.username) {
                    setError(err.response.data.username[0]);
                }
                else if(err.response.data.email) {
                    setError(err.response.data.email[0]);
                }
                else if(err.response.data.password) {
                    setError(err.response.data.password[0]);
                }
                setIsLoading(false);
            })
    }

    return (
        <>
        <div>
            <Head>
                <title>Sign up - cosb</title>
            </Head>
            <div className={'fixed top-14 left-0 right-0'}>
                {success && (
                    <Alert severity="success" variant={'filled'} onClose={() => {
                        setSuccess(false);
                    }}>
                        <AlertTitle>Success</AlertTitle>
                        You have successfully signed up. Please login to continue.
                    </Alert>
                )}
            </div>
            <motion.div animate={{scale:[0.8,1]}} transition={{duration:0.3}} className={'flex flex-col mx-auto justify-center items-center mt-20 container py-20 lg:w-1/3 md:w-1/2 rounded-3xl shadow-2xl border-1 border-neutral-200'}>
                <h1 className={'font-bold text-3xl mb-5'}>Sign up to cosb</h1>
                {/*<div className={'flex flex-col mt-10'}>
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
                <span className={'text-red-500'}>{error}</span>*/}

                {/*<motion.button whileHover={{scale:1.1}} className={'py-2 w-28 bg-gray-800 hover:bg-black rounded-lg text-white mt-5'} onClick={handleSubmit} >
                    {isLoading ?
                        <ButtonLoading/>
                        : "Sign up"
                    }
                </motion.button>*/}

                <GoogleButton
                  onClick={openGoogleLoginPage}
                  label="Sign Up with Google"
                  
                />

                {/*<div className={'flex text-left  mt-5 '}>
                    <span className={'text-gray-700'}>Been here before?</span>
                    <Link href={'/login'}>
                        <span className={'cursor-pointer font-semibold hover:underline ml-4'}>Log in</span>
                    </Link>
                </div>*/}
            </motion.div>

        </div>

        <Footer className={'mt-20'}/>

        </>
    );
}

export default Signup;