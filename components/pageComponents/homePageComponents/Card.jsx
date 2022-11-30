import {motion} from 'framer-motion'
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import SpeedIcon from '@mui/icons-material/Speed';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import Image from 'next/image'
import {AddToListChip, QuickViewChip} from '../../ActionChip';
import {Rating} from "@mui/material";
import BookmarkIcon from "../../BookmarkIcon";
import cosb from '../../../public/cosb.jpeg'
import Link from "next/link";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {useState} from "react";
import axios from "axios";
import {COURSE_STATUS} from "../../../config/constants";
import {getToken} from "../../../utility/Auth";

const Card = ({ title, description, image, rating, platform, price, id, isLogged }) => {
    const [status, setStatus] = useState('');


    const handleChange = async (event) => {
        setStatus(event.target.value);
        await axios.post(COURSE_STATUS, {
            id,
            status: event.target.value,
            token: getToken(),
        })
    };

  return (
    <motion.div whileHover={{scale: 1.03}} className="pl-10 border-neutral-200 border-1 pr-5 py-10 rounded-3xl shadow-md container md:w-2/3 flex md:flex-row flex-col mx-auto my-2">
        <div className={'flex flex-col md:w-4/5 md:border-r-1 pr-4'}>
            <div className={'flex'}>
                <div className="md:w-1/6 w-1/2 flex flex-col flex-wrap overflow-hidden">
                    <Image className={'w-full rounded-xl'} src={image ? image : cosb} alt={title} height={'70'} width={'50'} />
                </div>
                <div className="ml-4 w-5/6">
                    <Link href={`/course/${id}`}><h3 className={'text-2xl font-bold hover:underline cursor-pointer'}>{title}</h3></Link>
                    <div className={'flex '}>
                        <Rating
                            name="rate1"
                            starCount={rating}
                            precision={0.1}
                            value={rating}
                            readOnly={true}
                        />
                        <span className={'ml-2 text-gray-600 text-xs my-auto'}>Best Online Course</span>
                    </div>
                </div>

            </div>
            <div className={'flex flex-col mt-5'}>
                {/*<p className={'text-gray-600 text-xs my-auto'}>{description}</p>*/}
                <p className={'tex-md text-justify'}>{description}</p>
                {/*<div className={'flex mt-2'}>*/}
                {/*    <BookmarkIcon/>*/}
                {/*    <AddToListChip />*/}
                {/*    <QuickViewChip className={'ml-1'} />*/}
                {/*</div>*/}
            </div>
        </div>

        <div className={'flex flex-col md:w-1/5 md:ml-5 mt-5 md:mt-0 justify-center'}>
            <div className={'border-b-1 p-2 flex'}>
                <AutoGraphIcon
                    fontSize={'small'}
                    sx={{
                        color: 'gray',
                    }}
                />
                <span className={'ml-1 text-sm text-gray-600'}>{platform}</span>
            </div>
            {/*<div className={'border-b-1 p-2 flex'}>
                <SpeedIcon
                    fontSize={'small'}
                    sx={{
                        color: 'gray',
                    }}
                />
                <span className={'ml-1 text-sm text-gray-600'}>{'30 hours long'}</span>
            </div>*/}
            <div className={'border-b-1 p-2 flex'}>
                <CalendarTodayOutlinedIcon
                    fontSize={'small'}
                    sx={{
                        color: 'gray',
                    }}
                />
                <span className={'ml-1 text-sm text-gray-600'}>{'Self Paced'}</span>
            </div>
            <div className={`${isLogged ? 'border-b-1' : ''} p-2 flex`}>
                <CurrencyRupeeOutlinedIcon
                    fontSize={'small'}
                    sx={{
                        color: 'gray',
                    }}
                />
                <span className={'ml-1 text-sm text-gray-600'}>{price === 0 ? 'Free Course' : price}</span>
            </div>
            {isLogged && <div className='p-2 flex'>
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <InputLabel id="demo-select-small">Status</InputLabel>
                    <Select
                        disableUnderline
                        labelId="demo-select-small"
                        id="demo-select-small"
                        value={status}
                        label="Age"
                        onChange={handleChange}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={'Doing'}>Doing</MenuItem>
                        <MenuItem value={'Done'}>Done</MenuItem>
                        <MenuItem value={'Bought'}>Bought</MenuItem>
                    </Select>
                </FormControl>
            </div>}
        </div>

    </motion.div>
  );
}

export default Card;