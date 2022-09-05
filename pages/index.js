import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from "../components/Navbar";
import Action from "../components/pageComponents/homePageComponents/Action";
import Card from "../components/pageComponents/homePageComponents/Card";
import {useEffect, useState} from "react";
import {CircularProgress, Skeleton} from "@mui/material";
import Box from "@mui/material/Box";
import axios from "axios";
import Footer from "../components/Footer";
import {HOME_COURSES, SEARCH_COURSES} from "../config/constants";
import {isLoggedin} from "../utility/Auth";

export default function Home() {
    const [isLogged, setIsLogged] = useState(false);
    const [loading, setLoading] = useState(true);
    const [courseData, setCourseData] = useState([]);
    useEffect(() => {
        isLoggedin().then(res => {
            setIsLogged(res)
        })
    }, [])

    useEffect(() => {
        async function fetchData() {
            await axios.get(HOME_COURSES)
                .then(res => {
                    setCourseData(res.data);

                })

        }
    fetchData().then(r => setLoading(false));
    }, [])

    const onSearchChange = async (e) => {
        const searchValue = e.target ? e.target.value : e.current.value;
        setLoading(true);
        searchValue.length > 0 ? await axios.get(`${SEARCH_COURSES}${searchValue}`).then(res => {
            setCourseData(res.data);
            setLoading(false);
        }) : await axios.get(HOME_COURSES).then(res => {
            setCourseData(res.data);
            setLoading(false);
        })

    }

    return  (
        <div>
          <Head>
            <title>cosb</title>
            <meta name="description" content="cosb" />
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <Action onSearchChange={onSearchChange}/>


            {loading ? (
                <div className={'flex justify-center  w-full h-screen'}>
                    <Box alignItems="center" justifyContent="center"><CircularProgress /></Box>
                    {/*<Skeleton variant="rectangular" width={'80%'} height={200} />*/}
                </div>
            ) : (
                courseData.length > 0 ? (
                        courseData.map(course => (
                            <Card key={course.id}
                                  id={course.id}
                                  title={course.name}
                                  description={course.description}
                                  image={course.image}
                                  rating={course.overall_rating}
                                  platform={course.platform}
                                  price={course.price}
                                  isLogged={isLogged}
                            />))
                    ) : (
                            <div className={'h-screen'}>
                                <h1 className={'text-center text-3xl mt-20'}>No courses found</h1>
                            </div>
                    )


            ) }


        </div>

  )
}
