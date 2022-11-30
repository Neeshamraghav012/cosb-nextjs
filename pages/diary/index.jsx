import Head from 'next/head'
import Action from "../../components/pageComponents/homePageComponents/Action";
import Card from "../../components/pageComponents/roadmapPageComponents/Card";
import {useEffect, useState} from "react";
import {CircularProgress} from "@mui/material";
import Box from "@mui/material/Box";
import axios from "axios";
import {ALL_ROADMAPS, SEARCH_roadmapS} from "../../config/constants";
import {isLoggedin} from "../../utility/Auth";
import InfiniteScroll from "react-infinite-scroll-component";
import Footer from "../../components/Footer";


export default function Home() {
    const [isLogged, setIsLogged] = useState(false);
    const [loading, setLoading] = useState(true);
    const [roadmapData, setRoadmapData] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const [count, setCount] = useState(0);

    useEffect(() => {
        isLoggedin().then(res => {
            setIsLogged(res)
        })
    }, [])



    useEffect(() => {
        async function fetchData() {
            await axios.get(ALL_ROADMAPS)
                .then(res => {
                    setRoadmapData(res.data);

                })

        }
    fetchData().then(() => setLoading(false));
    }, [])

    return  (
        <>
        <div>
          <Head>
            <title>Find best learning resources on the Internet! - cosb</title>
            <meta name="description" content="cosb" />
            <link rel="icon" href="/favicon.ico" />
          </Head>



            {loading ? (
                <div className={'flex justify-center  w-full h-screen'}>
                    <Box alignItems="center" justifyContent="center"><CircularProgress /></Box>
                    
                </div>
            ) : (<div className={'mt-5'}>
                
                    {roadmapData.length ? (
                        roadmapData.map(roadmap => (
                            <Card key={roadmap.id}
                                  id={roadmap.id}
                                  title={roadmap.title}
                                  description={roadmap.desc}
                                  image={roadmap.image}
                                    views = {roadmap.views}
                                    readingTime = {roadmap.reading_time}
                                    publishedTime = {roadmap.timestamp}
                                    user = {roadmap.user.username}
                            />))
                    ) : (
                        <div className={'h-screen'}>
                            <h1 className={'text-center text-3xl mt-20'}>No roadmaps found</h1>
                        </div>
                    )}

                </div>

            ) }


        </div>

        <Footer className={'mt-20'}/>

        </>

  )
}
