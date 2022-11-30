import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";
import {TitleCard} from "../../components/pageComponents/coursePageComponents/TitleCard";
import {DescriptionCard} from "../../components/pageComponents/coursePageComponents/DescriptionCard";
import {InfoCard} from "../../components/pageComponents/coursePageComponents/InfoCard";
import TitleCardMobile
    from "../../components/pageComponents/coursePageComponents/smallScreenComponents/TitleCardMobile";
import NavigationCard from "../../components/pageComponents/coursePageComponents/smallScreenComponents/NavigationCard";
import InfoCardMobile from "../../components/pageComponents/coursePageComponents/smallScreenComponents/InfoCardMobile";
import RelatedCoursesMobile
    from "../../components/pageComponents/coursePageComponents/smallScreenComponents/RelatedCoursesMobile";
import ReviewsMobile from "../../components/pageComponents/coursePageComponents/smallScreenComponents/ReviewsMobile";
import BottomButton from "../../components/pageComponents/coursePageComponents/smallScreenComponents/BottomButton";
import {useState, useEffect} from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import {CircularProgress} from "@mui/material";
import Footer from "../../components/Footer";
import {ALL_COURSES, COURSE_DETAILS} from "../../config/constants";
import {IdContext} from "../../context/IdContext";
import {NextSeo} from "next-seo";
import Link from "next/link";
import {isLoggedin} from "../../utility/Auth";
import Head from 'next/head'




export const getServerSideProps = async ({params}) => {
    let res = await axios.get(`${COURSE_DETAILS}${params.slug}`);
    return {
        props: {
            course: res.data,
        }
    }
}

export default function CoursePage({course}) {

    const router = useRouter();
    const { slug } = router.query;
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [platform, setPlatform] = useState("");
    const [language, setLanguage] = useState("");
    const [certificate, setCertificate] = useState(false);
    const [loading, setLoading] = useState(true);
    const [image, setImage] = useState("");
    const [rating, setRating] = useState(0);
    const [link, setLink] = useState("");
    const [desc, setDesc] = useState("");
    const [id, setId] = useState("");
    const [isLogged, setIsLogged] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setTitle(course.name);
        setPrice(course.price);
        setPlatform(course.platform);
        setLanguage(course.language);
        setCertificate(course.certificate);
        setImage(course.image);
        setRating(course.overall_rating);
        setLink(course.link);
        setLoading(false);
        setDesc(course.description);
        setId(course.id);
    }, [course]);


    useEffect(() => {
        isLoggedin().then((res) => {
            setIsLogged(res);
            setIsLoaded(true);
        });
    }, [isLoaded]);


    return (
        <>

            <Head>
              <title>{title} - cosb</title>
              <meta name="description" content={desc} />
              <link rel="icon" href="/favicon.ico" />
            </Head>

            <NextSeo
                title={`${course.name} | cosb`}
                description={course.description}
                openGraph={{
                    title: course.name,
                    description: course.description,
                    images: [
                        {
                            url: course.image,
                            width: 800,
                            height: 600,
                            alt: 'Og Image Alt',

                        },
                        { url: course.image },
                        { url: course.image },
                    ],
                }}/>
            {loading ?
        (
        <div className={'flex justify-center items-center w-full h-screen bg-gray-500'}>
            <div className={'bg-white p-5 rounded-lg border-gray-200 border-2'}>
                <Box alignItems="center" justifyContent="center"><CircularProgress /></Box>
            </div>
        </div>
    ) : (


        <div className={'bg-grey'}>
            <div className={'lg:px-20 flex md:flex-row flex-col pt-20'}>
                 {/*This is for Bigger Screens */}
                <div className={'hidden md:flex flex-col w-2/3'}>
                    <TitleCard title={title} platform={platform} rating={rating} />
                    <DescriptionCard className={'mt-5'} desc = {desc} />
                </div>
                <div className={'hidden md:flex flex-col w-1/3 ml-5 mb-5'}>
                    <InfoCard
                        image={image}
                        platform={platform}
                        price={price === '0' ? 'Free' : price}
                        language={language}
                        certificate={certificate ? 'Certificate Available' : 'Certificate Available'}
                        link={link}
                    />
                </div>


                 {/*This is for Smaller Screens*/}
                <div className={'flex md:hidden flex-col'}>

                    <IdContext.Provider value={slug}>
                        <TitleCardMobile
                        title={title}
                        platform={platform}
                        rating={rating}
                        image={image}
                        link={link}
                        desc = {desc}
                    />
                    </IdContext.Provider>

                    {/*<NavigationCard/>*/}
                    <InfoCardMobile
                        platform={platform}
                        price={price === '0' ? 'Free' : price}
                        language={language}
                        certificate={certificate ? 'Certificate Available' : 'Certificate Available'}
                    />
                    {/*<RelatedCoursesMobile/>*/}
                    <ReviewsMobile id={slug}/>
                    
                    
                    {/*<BottomButton/>*/}
                </div>

            </div>
        </div>
    )}
        </>)
}