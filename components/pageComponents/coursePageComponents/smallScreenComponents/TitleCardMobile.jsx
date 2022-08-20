import Image from "next/image";
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import BookmarkIcon from "../../../BookmarkIcon";
import {AddToListChip, GotoClass, MarkCompleteChip, WriteReviewChip} from "../../../ActionChip";
import {Rating} from "@mui/material";

const TitleCardMobile = ({image, title, platform, rating}) => {
    return (
        <div className={'bg-white border-neutral-200 rounded-lg'}>
            <div className={''}>
                <Image src={image} layout={'responsive'} width={'100%'} height={'60'} />
            </div>
            <div className={'mx-3 flex flex-col'}>
                <div className={'flex mt-1'}>
                    <div>
                        <ShareOutlinedIcon/>
                    </div>
                    <div className={'ml-auto flex'}>
                        <BookmarkIcon/>
                        <AddToListChip isSmall={true}/>
                        <MarkCompleteChip isSmall={true} className={'ml-1'}/>
                    </div>
                </div>

                <span className={'text-3xl font-bold mt-5'}>{title}</span>
                <span className={'text-xl mt-1'}>via <span className={'hover:underline'}>{platform}</span></span>
                <div className={'flex items-center mt-5'}>
                    <Rating
                        name="rate1"
                        value={rating}
                        precision={0.5}
                        readOnly={true}
                        size={'large'}
                        className={'mt-2 -ml-1 -mt-1'}
                    />
                    {/*<span className={'text-lg my-auto ml-2'}>{reviews} Reviews</span>*/}
                </div>
                <GotoClass/>
                {/*<WriteReviewChip className={'mx-4 py-3 mt-2'}/>*/}
            </div>
        </div>
    )
}

export default TitleCardMobile;