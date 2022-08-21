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

export default function CoursePage() {
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

    useEffect(() => {
        async function fetchData() {
            if(slug)
                await axios.get(`https://cosbapi.herokuapp.com/api/courses/courses-detail-view/${slug}`)
                    .then(res => {
                        setTitle(res.data.name);
                        setPrice(res.data.price);
                        setPlatform(res.data.platform);
                        setLanguage(res.data.language);
                        setCertificate(res.data.certificate);
                        setImage(res.data.image);
                        setRating(res.data.overall_rating);
                        setLink(res.data.link);
                        setLoading(false);
                    })
        }
        fetchData();
    }, [slug])


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
                    <DescriptionCard className={'mt-5'}/>
                </div>
                <div className={'hidden md:flex flex-col w-1/3 ml-5'}>
                    <InfoCard
                        image={image}
                        platform={platform}
                        price={price === '0' ? 'Free' : price}
                        language={language}
                        certificate={certificate ? 'Certificate Available' : 'Certificate Not Available'}
                        link={link}
                    />
                </div>


                 {/*This is for Smaller Screens*/}
                <div className={'flex md:hidden flex-col'}>
                    <TitleCardMobile
                        title={title}
                        platform={platform}
                        rating={rating}
                        image={'https://i.imgur.com/mrIuHoC.jpg'}
                        link={link}
                    />
                    {/*<NavigationCard/>*/}
                    <InfoCardMobile
                        platform={platform}
                        price={price === '0' ? 'Free' : price}
                        language={language}
                        certificate={certificate ? 'Certificate Available' : 'Certificate Not Available'}
                    />
                    {/*<RelatedCoursesMobile/>*/}
                    {/*<ReviewsMobile/>*/}
                    {/*<BottomButton/>*/}
                </div>

            </div>
        </div>
    )
}