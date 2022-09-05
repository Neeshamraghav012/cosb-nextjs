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
import {useState} from "react";
import {useEffect} from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import {CircularProgress} from "@mui/material";
import Footer from "../../components/Footer";
import {ALL_COURSES, COURSE_DETAILS} from "../../config/constants";

export const getStaticPaths = async () => {
    const res = await axios.get(ALL_COURSES);
    const paths = res.data.map(course => ({
        params: {
            slug: course.id.toString(),
        },
    }));
    return {
        paths,
        fallback: false,
    };
}

export const getStaticProps = async ({params}) => {
    const res = await axios.get(`${COURSE_DETAILS}${params.slug}`);
    return {
        props: {
            course: res.data,
        },
    };
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
    }, [course]);

    // useEffect(() => {
    //     async function fetchData() {
    //         if(slug)
    //             await axios.get(`https://cosbapi.herokuapp.com/api/courses/courses-detail-view/${slug}`)
    //                 .then(res => {
    //                     setTitle(res.data.name);
    //                     setPrice(res.data.price);
    //                     setPlatform(res.data.platform);
    //                     setLanguage(res.data.language);
    //                     setCertificate(res.data.certificate);
    //                     setImage(res.data.image);
    //                     setRating(res.data.overall_rating);
    //                     setLink(res.data.link);
    //                     setLoading(false);
    //                 })
    //     }
    //     fetchData();
    // }, [slug])


    return loading ? (
        <div className={'flex justify-center items-center w-full h-screen bg-gray-500'}>
            <div className={'bg-white p-5 rounded-lg border-gray-200 border-2'}>
                <Box alignItems="center" justifyContent="center"><CircularProgress /></Box>
            </div>
        </div>
    ) : (
        <div className={'bg-grey'}>
            <Navbar/>
            <div className={'lg:px-20 flex md:flex-row flex-col pt-20'}>
                 {/*This is for Bigger Screens */}
                <div className={'hidden md:flex flex-col w-2/3'}>
                    <TitleCard title={title} platform={platform} rating={rating} />
                    <DescriptionCard className={'mt-5'} desc = {desc} />
                </div>
                <div className={'hidden md:flex flex-col w-1/3 ml-5'}>
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
                    <TitleCardMobile
                        title={title}
                        platform={platform}
                        rating={rating}
                        image={image}
                        link={link}
                        desc = {desc}
                    />
                    {/*<NavigationCard/>*/}
                    <InfoCardMobile
                        platform={platform}
                        price={price === '0' ? 'Free' : price}
                        language={language}
                        certificate={certificate ? 'Certificate Available' : 'Certificate Available'}
                    />
                    {/*<RelatedCoursesMobile/>*/}
                    {/*<ReviewsMobile/>*/}
                    {/*<BottomButton/>*/}
                </div>

            </div>
            <Footer className={'mt-5'} />
        </div>
    )
}