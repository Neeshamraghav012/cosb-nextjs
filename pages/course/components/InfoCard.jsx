import Image from "next/image";
import KeyboardDoubleArrowRightOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowRightOutlined';
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import CardMembershipOutlinedIcon from '@mui/icons-material/CardMembershipOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import ClosedCaptionOffOutlinedIcon from '@mui/icons-material/ClosedCaptionOffOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';

export const InfoCard = ({className, image, platform}) => {
    return (
        <div className={'flex py-5 flex-col bg-white border-1 border-neutral-200 rounded-md px-8 ' + className}>
            <Image src={image} width={40} height={200}/>
            <div className={'flex justify-center text-white bg-gray-800 hover:bg-black duration-300 mt-5 py-2 rounded-lg mx-4 cursor-pointer'}>
                <span className={'text-lg'}>Go to class</span>
                <KeyboardDoubleArrowRightOutlinedIcon
                    className={'my-auto'}
                />
            </div>

            <div className={'mx-4 mt-5'}>
                <div className={'border-b-1 flex py-2'}>
                    <AutoGraphIcon
                        fontSize={'medium'}
                    />
                    <span className={'ml-2'}>{platform}</span>
                </div>
                <div className={'border-b-1 flex py-2'}>
                    <MonetizationOnOutlinedIcon
                        fontSize={'medium'}
                    />
                    <span className={'ml-2'}>$0.00</span>
                </div>
                <div className={'border-b-1 flex py-2'}>
                    <CommentOutlinedIcon
                        fontSize={'medium'}
                    />
                    <span className={'ml-2'}>English</span>
                </div>
                <div className={'border-b-1 flex py-2'}>
                    <CardMembershipOutlinedIcon
                        fontSize={'medium'}
                    />
                    <span className={'ml-2'}>Certificate Available</span>
                </div>
                <div className={'border-b-1 flex py-2'}>
                    <AccessTimeOutlinedIcon
                        fontSize={'medium'}
                    />
                    <span className={'ml-2'}>35 Hours</span>
                </div>
                <div className={'border-b-1 flex py-2'}>
                    <CalendarTodayOutlinedIcon
                        fontSize={'medium'}
                    />
                    <span className={'ml-2'}>Self Paced</span>
                </div>
                <div className={'border-b-1 flex py-2'}>
                    <AssessmentOutlinedIcon
                        fontSize={'medium'}
                    />
                    <span className={'ml-2'}>Beginner</span>
                </div>
                <div className={'border-b-1 flex py-2'}>
                    <ClosedCaptionOffOutlinedIcon
                        fontSize={'medium'}
                    />
                    <span className={'ml-2'}>English</span>
                </div>
                <div className={'flex py-2'}>
                    <ShareOutlinedIcon
                        fontSize={'medium'}
                    />
                    <span className={'ml-2'}>Share this Course</span>
                </div>
            </div>

        </div>
    )
}