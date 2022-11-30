import {motion} from 'framer-motion'
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import SpeedIcon from '@mui/icons-material/Speed';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Image from 'next/image'
import {Rating} from "@mui/material";
import BookmarkIcon from "../../BookmarkIcon";
import cosb from '../../../public/cosb.jpeg'
import Link from "next/link";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import SanitizedHTML from 'react-sanitized-html';


const Card = ({ title, description, image, user, views, readingTime, publishedTime, id}) => {


    const formatDate = (dateString) => {
      const options = { year: "numeric", month: "long", day: "numeric" }
      return new Date(dateString).toLocaleDateString(undefined, options)
    }

    const truncate = (str) => {

        return str.length > 100 ? str.substring(0, 50) + "..." : str;
    }



  return (
    <motion.div whileHover={{scale: 1.03}} className="pl-10 border-neutral-200 border-1 pr-5 py-10 rounded-3xl shadow-md container md:w-2/3 flex md:flex-row flex-col mx-auto my-2 mt-5">
        <div className={'flex flex-col md:w-4/5 md:border-r-1 pr-4'}>
            <div className={'flex'}>
                <div className="md:w-1/6 w-1/2 flex flex-col flex-wrap overflow-hidden">
                    <Image className={'w-full rounded-xl'} src={image ? image : cosb} alt={title} height={'70'} width={'50'} />
                </div>
                <div className="ml-4 w-5/6">
                    <Link href={`/diary/${id}`}><h3 className={'text-2xl font-bold hover:underline cursor-pointer'}>{title}</h3></Link>
                </div>

            </div>
            <div className={'flex flex-col mt-5 text-center'}>
                
                <a>
                    <Link href={`/diary/${id}`}>
                    
                            <SanitizedHTML html={ truncate(description) } />

                    </Link>
                </a>

            </div>
        </div>

        <div className={'flex flex-col md:w-1/5 md:ml-5 mt-5 md:mt-0 justify-center'}>
            <div className={'border-b-1 p-2 flex'}>
                <PersonOutlineOutlinedIcon
                    fontSize={'small'}
                    sx={{
                        color: 'gray',
                    }}
                />
                <span className={'ml-1 text-sm text-gray-600'}>{user}</span>
            </div>

            <div className={'border-b-1 p-2 flex'}>
                <TimerOutlinedIcon
                    fontSize={'small'}
                    sx={{
                        color: 'gray',
                    }}
                />
                <span className={'ml-1 text-sm text-gray-600'}>{readingTime + ' minutes'}</span>
            </div>
            <div className={`p-2 flex`}>
                <CalendarTodayOutlinedIcon
                    fontSize={'small'}
                    sx={{
                        color: 'gray',
                    }}
                />
                <span className={'ml-1 text-sm text-gray-600'}>{formatDate(publishedTime)}</span>
            </div>


            {/*<div className={`p-2 flex`}>
                <VisibilityOutlinedIcon
                    fontSize={'small'}
                    sx={{
                        color: 'gray',
                    }}
                />
                <span className={'ml-1 text-sm text-gray-600'}>{views}</span>
            </div>*/}


        </div>

    </motion.div>
  );
}

export default Card;