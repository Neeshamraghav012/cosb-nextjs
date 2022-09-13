import Image from "next/image";
import {EditProfileChip} from "../../ActionChip";
import {motion} from "framer-motion";
import SettingsIcon from "@mui/icons-material/Settings";
import {useState} from "react";
import {TabContext, TabList, TabPanel} from "@mui/lab";
import {CircularProgress, Tab, ThemeProvider} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BurstModeIcon from '@mui/icons-material/BurstMode';
import theme from "../../../config/theme";
import Card from "../homePageComponents/Card";
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SchoolIcon from '@mui/icons-material/School';
import PaidIcon from '@mui/icons-material/Paid';

const ProfileCard = ({image, username, name, posts, followers, following, bio, data, loading}) => {
    const [value, setValue] = useState(1);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    }


    return (
        <div className={'flex flex-col'}>
            <div className={'flex mt-5'}>
                <div className={'flex  w-1/3 md:items-center  md:mt-0 md:py-20 px-5'}>
                    <div className={'ml-auto my-auto'}>
                        <Image src={image} width={'150rem'} height={'150rem'} className={'rounded-full'} alt={username} />
                    </div>
                </div>
                <div className={'flex   flex-col w-2/3 md:w-1/3 md:mt-0 md:py-10'}>
                    <div className={'flex my-auto mx-3 md:mx-8 items-center'}>
                        <span className={'md:text-3xl text-xl font-light tracking-widest'}>{username}</span>
                        {/*<EditProfileChip className={'mt-1 mx-2 hidden md:flex'} />*/}
                        {/*<motion.div whileHover={{rotate:60}}>*/}
                        {/*    <SettingsIcon className={'mx-2 cursor-pointer'} fontSize={'large'} />*/}
                        {/*</motion.div>*/}
                    </div>
                    {/*<EditProfileChip className={'mt-1 w-44 mx-2 flex md:hidden'} />*/}
                    {/*<div className={'flex mx-3 md:mx-8 items-center mt-2'}>*/}
                    {/*    <span className={'mr-6'}><span className={'font-semibold'}>{posts}</span> post</span>*/}
                    {/*    <span className={'mr-6'}><span className={'font-semibold'}>{followers}</span> followers</span>*/}
                    {/*    <span className={'mr-6'}><span className={'font-semibold'}>{following}</span> following</span>*/}
                    {/*</div>*/}
                    {/*<div className={'md:flex hidden flex-col mx-8 mt-5'}>*/}
                    {/*    <span className={'font-bold'}>{name}</span>*/}
                    {/*    <p className={'mt-2'}>{bio}</p>*/}
                    {/*</div>*/}
                </div>
            </div>
            {/*<div className={'md:hidden flex flex-col mx-8 mt-5'}>*/}
            {/*    <span className={'font-bold'}>{name}</span>*/}
            {/*    <p className={'mt-2'}>{bio}</p>*/}
            {/*</div>*/}

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
                                    let found = false;
                                    if(item.status === 'Doing'){
                                        found = true;
                                        return (
                                            <Card
                                                key={index}
                                                title={item.course.name}
                                                description={item.course.description}
                                                image={item.course.image ? item.course.image : '/images/cosb.jpg'}
                                                rating={item.course.overall_rating}
                                                platform={item.course.platform}
                                                price={item.course.price}
                                            />
                                        )
                                    }
                                    if(!found){
                                        return (
                                            <div className={'flex justify-center items-center'}>No Course Found</div>
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
                                    found = true;
                                    return (
                                        <Card
                                            key={index}
                                            title={item.course.name}
                                            description={item.course.description}
                                            image={item.course.image ? item.course.image : '/images/cosb.jpg'}
                                            rating={item.course.overall_rating}
                                            platform={item.course.platform}
                                            price={item.course.price}
                                        />
                                    )
                                }
                                if(!found){
                                    return (
                                        <div className={'flex justify-center items-center'}>No Course Found</div>
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
                                    found = true;
                                    return (
                                        <Card
                                            key={index}
                                            title={item.course.name}
                                            description={item.course.description}
                                            image={item.course.image ? item.course.image : '/images/cosb.jpg'}
                                            rating={item.course.overall_rating}
                                            platform={item.course.platform}
                                            price={item.course.price}
                                        />
                                    )
                                }
                                if(!found){
                                    return (
                                        <div className={'flex justify-center items-center'}>No Course Found</div>
                                    )
                                }
                            })
                        }
                    </TabPanel>
                </TabContext>
            </ThemeProvider>
        </div>

    )
}

export default ProfileCard;