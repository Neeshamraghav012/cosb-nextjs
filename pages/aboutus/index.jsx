import {motion} from "framer-motion";
import Link from "next/link";
import {useEffect, useState} from "react";
import {LOGIN} from "../../config/constants";
import axios from "axios";
import {login} from "../../utility/Auth";
import {isLoggedin} from "../../utility/Auth";
import Head from "next/head";
import {ButtonLoading} from "../../components/LoadingComponents";
import Image from "next/image";


import styles from '../../styles/AboutUs.module.css';

const AboutUs = () => {


    console.log(styles)

    return (
        <div>
            <Head>
                <title>About Us - cosb</title>
            </Head>

            <div className={styles.aboutsection}>
              <h1>About Us</h1>
              <p>We are a company that started in lockdown to help people sharpen their skills. During the period
              we found out that there are mammoth learning resources on the internet. One can easily be confused 
              in choosing the resources. So we made this search engine to answer the <strong>Question: </strong>"Which
              course should i take to learn that skill?" </p>
              <p>And the answer is "Find it on cosb!"</p>
            </div>

            <h2 className={'text-2xl font-bold text-center mt-5'}>Our Team</h2>

            <div className={styles.row}>
              <div className={styles.column}>
                <div className={styles.card}>
                  <Image src='/neesham.jpeg' width={400} height={300} alt={'Profile Image'}/>
                  <div className={styles.container}>
                    <h2>Neesham</h2>
                    <p className={styles.title}>CEO and Founder</p>
                    {/*<p>Some text that describes me lorem ipsum ipsum lorem.</p>*/}
                    <p>neeshamraghav0@gmail.com</p>
                    {/*<p><button className={styles.button}>Contact</button></p>*/}
                  </div>
                </div>
              </div>

              <div className={styles.column}>
                <div className={styles.card}>
                  {/*<img src="" alt="Neesham" style="width:100%" />*/}
                  <Image src='/hridyansh.jpg' width={400} height={300} alt={'Profile Image'}/>

                  <div className={styles.container}>
                    <h2>Hridyansh</h2>
                    <p className={styles.title}>Co-Founder and Marketing Head</p>
                    {/*<p>Some text that describes me lorem ipsum ipsum lorem.</p>*/}
                    <p>pareekhridyansh@gmail.com</p>
                    {/*<p><button className={styles.button}>Contact</button></p>*/}
                  </div>
                </div>
              </div>



              <div className={styles.column}>
                <div className={styles.card}>
                  {/*<img src="" alt="Neesham" style="width:100%" />*/}
                  <Image src='/himanhsu.jpg' width={400} height={300} alt={'Profile Image'}/>
                  
                  <div className={styles.container}>
                    <h2>Himanshu</h2>
                    <p className={styles.title}>CTO</p>
                    {/*<p>Some text that describes me lorem ipsum ipsum lorem.</p>*/}
                    <p>hs913271@gmail.com</p>
                    {/*<p><button className={styles.button}>Contact</button></p>*/}
                  </div>
                </div>
              </div>



            </div>


        </div>
    );
}

export default AboutUs;