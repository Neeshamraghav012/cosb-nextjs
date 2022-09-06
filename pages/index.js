import Head from 'next/head'
import Action from "../components/pageComponents/homePageComponents/Action";
import Card from "../components/pageComponents/homePageComponents/Card";
import {useEffect, useState} from "react";
import {CircularProgress} from "@mui/material";
import Box from "@mui/material/Box";
import axios from "axios";
import {HOME_COURSES, SEARCH_COURSES} from "../config/constants";
import {isLoggedin} from "../utility/Auth";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Home() {
    const [isLogged, setIsLogged] = useState(false);
    const [loading, setLoading] = useState(true);
    const [courseData, setCourseData] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const [count, setCount] = useState(0);

    useEffect(() => {
        isLoggedin().then(res => {
            setIsLogged(res)
        })
    }, [])

    useEffect(() => {
        async function fetchData() {
            await axios.post(HOME_COURSES, {
                "count": count.toString()
            })
                .then(res => {
                    setCourseData(res.data);

                })

        }
    fetchData().then(() => setLoading(false));
    }, [])

    const fetchMoreData = () => {
        setCount(count + 5);
        axios.post(HOME_COURSES, {
            "count": (count + 5).toString()
        })
            .then(res => {
                if(res.data.status) {
                    if(res.data.status === 0) {
                        setHasMore(false)
                    }
                }
                setCourseData(courseData.concat(res.data));
            })
    }

    const onSearchChange = async (e) => {
        const searchValue = e.target ? e.target.value : e.current.value;
        setLoading(true);
        searchValue.length > 0 ? await axios.get(`${SEARCH_COURSES}${searchValue}`).then(res => {
            setCourseData(res.data);
            setLoading(false);
            setHasMore(false);
        }) : await axios.get(HOME_COURSES).then(res => {
            setCourseData(res.data);
            setLoading(false);
            setHasMore(true);
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
                <InfiniteScroll
                    dataLength={courseData.length}
                    next={fetchMoreData}
                    hasMore={hasMore}
                    loader={
                        <div className={'flex justify-center  w-full h-screen'}>
                            <Box alignItems="center" justifyContent="center"><CircularProgress /></Box>
                            {/*<Skeleton variant="rectangular" width={'80%'} height={200} />*/}
                        </div>
                    }
                    endMessage={
                        <p style={{textAlign: 'center'}}>
                            <b>Yay! You have seen it all</b>
                        </p>
                    }
                >
                    {courseData.length > 0 ? (
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
                    )}
                </InfiniteScroll>


            ) }


        </div>

  )
}
