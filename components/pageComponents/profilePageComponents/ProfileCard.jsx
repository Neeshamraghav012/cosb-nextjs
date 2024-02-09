import Image from "next/image";
import {useState} from "react";
import {TabContext, TabList, TabPanel} from "@mui/lab";
import {CircularProgress, Tab, ThemeProvider} from "@mui/material";
import theme from "../../../config/theme";
import Card from "../homePageComponents/Card";
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SchoolIcon from '@mui/icons-material/School';
import PaidIcon from '@mui/icons-material/Paid';
import {NextSeo} from "next-seo";
import cosb from '../../../public/cosb.jpeg'


const ProfileCard = ({avatar, username, data, loading}) => {
    const [value, setValue] = useState(1);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    }


    return (

        <>

        <NextSeo
            title={`${username} | cosb`}
            description={'Find best learning resources on the Internet!'}
            openGraph={{
                title: username,
                description: 'Find best learning resources on the Internet!',
                images: [
                    {
                        url: avatar,
                        width: 800,
                        height: 600,
                        alt: 'User Image Alt',

                    },
                    { url: avatar },
                    { url: avatar },
                ],
            }}/>

        <div className={'flex flex-col'}>
            <div className={'flex mt-5'}>
                <div className={'flex  w-1/3 md:items-center  md:mt-0 md:py-20 px-5'}>
                    
                    <div className={'ml-auto my-auto'}>
                        <Image src={avatar} width={'150rem'} height={'150rem'} className={'rounded-full'} alt={username} />
                    </div>
                </div>
                <div className={'flex   flex-col w-2/3 md:w-1/3 md:mt-0 md:py-10'}>
                    <div className={'flex my-auto mx-3 md:mx-8 items-center'}>
                        <span className={'md:text-3xl text-xl font-light tracking-widest'}>{username}</span>
  
                    </div>

                </div>
            </div>

            <ThemeProvider theme={theme}>
                <TabContext value={value}>
                    <TabList onChange={handleChange} sx={{
                        marginX:'auto'
                    }}>
                        <Tab icon={<MenuBookIcon/>} label="Doing" value={1} />
                        <Tab icon={<SchoolIcon/>} label="Done" value={2} />
                        <Tab icon={<PaidIcon/>} label="Bought" value={3} />
                    </TabList>
                    <TabPanel value={1}>
                        
                        {
                            loading ? <div className={'flex justify-center items-center'}><CircularProgress/></div> :
                                data.length === 0 ? <div className={'flex justify-center items-center'}>No Course Found</div> :
                                data.map((item, index) => {
                                    <p>{item.course}</p>
                                    
                                    if(item.status === 'Doing'){

                                        return (
                                            <Card
                                                key={index}
                                                title={item.course.name}
                                                description={item.course.description}
                                                image={item.course.image}
                                                rating={item.course.overall_rating}
                                                platform={item.course.platform}
                                                price={item.course.price}
                                                id={item.course.id}
                                            />
                                        )
                                    }
                     
                                })

                        }

                    </TabPanel>
                    <TabPanel value={2}>
                        {
                            loading ? <div className={'flex justify-center items-center'}><CircularProgress/></div> :
                                data.length === 0 ? <div className={'flex justify-center items-center'}>No Course Found</div> :
                                data.map((item, index) => {
                                let found = false;
                                if(item.status === 'Done'){
                                    
                                    return (
                                        <Card
                                            key={index}
                                            title={item.course.name}
                                            description={item.course.description}
                                            // image={cosb}
                                            image={item.course.image}

                                            rating={item.course.overall_rating}
                                            platform={item.course.platform}
                                            price={item.course.price}
                                            id={item.course.id}

                                        />
                                    )
                                }
                  
                            })
                        }
                    </TabPanel>
                    <TabPanel value={3}>
                        {
                            loading ? <div className={'flex justify-center items-center'}><CircularProgress/></div> :
                                data.length === 0 ? <div className={'flex justify-center items-center'}>No Course Found</div> :
                                data.map((item, index) => {
                                let found = false;
                                if(item.status === 'Bought'){
                                    
                                    return (
                                        <Card
                                            key={index}
                                            title={item.course.name}
                                            description={item.course.description}
                                            // image={item.course.image ? item.course.image : '/images/cosb.jpg'}
                                            image={item.course.image}

                                            id={item.course.id}
                                            rating={item.course.overall_rating}
                                            platform={item.course.platform}
                                            price={item.course.price}
                                        />
                                    )
                                }
       
                            })
                        }
                    </TabPanel>
                </TabContext>
            </ThemeProvider>
        </div>
        </>

    )
}

export default ProfileCard;