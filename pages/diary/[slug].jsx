



import Link from "next/link";
import {useEffect, useState} from "react";
import axios from "axios";
import Head from "next/head";
import Card from "../../components/pageComponents/roadmapPageComponents/Card";
import { useRouter } from "next/router";
import {DescriptionCard} from "../../components/pageComponents/roadmapPageComponents/DescriptionCard";
import {CircularProgress} from "@mui/material";
import {ROADMAP_DETAILS} from "../../config/constants";
import {NextSeo} from "next-seo";


export const getServerSideProps = async ({params}) => {
    let res = await axios.get(`${ROADMAP_DETAILS}${params.slug}`);
    return {
        props: {
            roadmap: res.data,
        }
    }
}

const RoadMap = ({roadmap}) => {

    const router = useRouter();
    const slug = router.query;
    const [title, setTitle] = useState("");
    const [loading, setLoading] = useState(true);
    const [image, setImage] = useState("");
    const [desc, setDesc] = useState("");
    const [readingTime, setReadingTime] = useState("");
    const [timestamp, setTimeStamp] = useState("");
    const [views, setViews] = useState("");
    const [author, setAuthor] = useState("");
    const [id, setId] = useState("");


    useEffect(() => {
        setTitle(roadmap.title);
        setImage(roadmap.image);
        setLoading(false);
        setDesc(roadmap.desc);
        setReadingTime(roadmap.reading_time);
        setTimeStamp(roadmap.timestamp);
        setViews(roadmap.views);
        setAuthor(roadmap.user.username);
        setId(roadmap.id);
    }, [roadmap]);

    return (
        <div>
            <Head>
                <title>{title} - cosb</title>
            </Head>


            <NextSeo
                title={`${title} | cosb`}
                description={desc}
                openGraph={{
                    title: title,
                    description: desc,
                    images: [
                        {
                            url: image,
                            width: 800,
                            height: 600,
                            alt: 'Og Image Alt',

                        },
                        { url: image },
                        { url: image },
                    ],
                }}/>


            <div className={''}>
                <div className={'h-screen'}>
                     {/*This is for Bigger Screens */}
                    <div className={'hidden md:flex flex-col'}>


                        <Card key={id}
                              id={id}
                              title={title}
                              description={''}
                              image={image}
                                views = {views}
                                readingTime = {readingTime}
                                publishedTime = {timestamp}
                                user = {author}
                        />

                    </div>

                    <DescriptionCard className={'mt-5 mx-auto'} desc = {desc} />


                </div>
            </div>
            

        </div>
    );
}

export default RoadMap;