import Image from "next/image";
import {EditProfileChip} from "../../ActionChip";
import {motion} from "framer-motion";
import SettingsIcon from "@mui/icons-material/Settings";
import {useState} from "react";
import {TabContext, TabList, TabPanel} from "@mui/lab";
import {Tab, ThemeProvider} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BurstModeIcon from '@mui/icons-material/BurstMode';
import theme from "../../../config/theme";
import Card from "../homePageComponents/Card";

const ProfileCard = ({image, username, name, posts, followers, following, bio}) => {
    const [value, setValue] = useState(1);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    }


    return (
        <div className={'flex flex-col'}>
            <div className={'flex mt-5'}>
                <div className={'flex  w-1/3 md:items-center  md:mt-0 md:py-20 px-5'}>
                    <div className={'ml-auto my-auto'}>
                        <Image src={image} width={'150rem'} height={'150rem'} className={'rounded-full'} />
                    </div>
                </div>
                <div className={'flex  flex-col w-2/3 md:w-1/3 md:mt-0 md:py-10'}>
                    <div className={'flex mx-3 md:mx-8 items-center'}>
                        <span className={'md:text-3xl text-xl font-light tracking-widest'}>{username}</span>
                        <EditProfileChip className={'mt-1 mx-2 hidden md:flex'} />
                        <motion.div whileHover={{rotate:60}}>
                            <SettingsIcon className={'mx-2 cursor-pointer'} fontSize={'large'} />
                        </motion.div>
                    </div>
                    <EditProfileChip className={'mt-1 w-44 mx-2 flex md:hidden'} />
                    <div className={'flex mx-3 md:mx-8 items-center mt-2'}>
                        <span className={'mr-6'}><span className={'font-semibold'}>{posts}</span> post</span>
                        <span className={'mr-6'}><span className={'font-semibold'}>{followers}</span> followers</span>
                        <span className={'mr-6'}><span className={'font-semibold'}>{following}</span> following</span>
                    </div>
                    <div className={'md:flex hidden flex-col mx-8 mt-5'}>
                        <span className={'font-bold'}>{name}</span>
                        <p className={'mt-2'}>{bio}</p>
                    </div>
                </div>
            </div>
            <div className={'md:hidden flex flex-col mx-8 mt-5'}>
                <span className={'font-bold'}>{name}</span>
                <p className={'mt-2'}>{bio}</p>
            </div>

            <ThemeProvider theme={theme}>
                <TabContext value={value}>
                    <TabList onChange={handleChange} sx={{
                        marginX:'auto'
                    }}>
                        <Tab icon={<BurstModeIcon/>} label="Posts" value={1} />
                        <Tab icon={<FavoriteIcon/>} label="Favorite Courses" value={2} />
                    </TabList>
                    <TabPanel value={1}>
                        <Card
                            title={'React for Beginners'}
                            description={'This course is designed to help you get started with React. You will learn the fundamentals of React, and how to use React to build your own projects.'}
                            image={'https://imgur.com/J1Oioug.jpg'}
                            rating={4.5}
                            reviews={45}
                            platform={'Udemy'}
                        />
                    </TabPanel>
                    <TabPanel value={2}>
                        <Card
                            title={'JavaScript for Beginners'}
                            description={'This course is designed to help you get started with React. You will learn the fundamentals of React, and how to use React to build your own projects.'}
                            image={'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png'}
                            rating={4.5}
                            reviews={45}
                            platform={'Udemy'}
                        />
                    </TabPanel>
                </TabContext>
            </ThemeProvider>
        </div>

    )
}

export default ProfileCard;