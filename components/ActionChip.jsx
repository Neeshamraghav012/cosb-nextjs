import PostAddIcon from '@mui/icons-material/PostAdd';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import KeyboardDoubleArrowRightOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowRightOutlined";

export const AddToListChip = ({className, isSmall}) => {
    return (
        <div className={"border-1 flex border-gray-300 rounded-lg px-2 items-center cursor-pointer hover:border-black duration-300 " + className}>
            <PostAddIcon
                fontSize={'small'}
            />
            {!isSmall && <span className="ml-1 text-sm">Add to List</span>}
        </div>
    );
}

export const QuickViewChip = ({className, isSmall}) => {
    return (
        <div className={"border-1 flex border-gray-300 rounded-lg px-2 items-center cursor-pointer hover:border-black duration-300 " + className}>
            <RemoveRedEyeOutlinedIcon
                fontSize={'small'}
            />
            {!isSmall && <span className="ml-1 text-sm">Quick View</span>}
        </div>
    );
}

export const MarkCompleteChip = ({className, isSmall}) => {
    return (
        <div className={"border-1 flex border-gray-300 rounded-lg px-2 items-center cursor-pointer hover:border-black duration-300 " + className}>
            <CheckCircleOutlineOutlinedIcon
                fontSize={'small'}
            />
            {!isSmall && <span className="ml-1 text-sm">Mark Complete</span>}
        </div>
    );
}

export const WriteReviewChip = ({className}) => {
    return (
        <div className={"border-1 flex rounded-lg px-2 items-center justify-center cursor-pointer text-white bg-gray-800 hover:bg-black duration-300 " + className}>
            <span className="ml-1 text-sm">Write Review</span>
        </div>
    )
}

export const GotoClass = ({className}) => {
    return (
        <div className={'flex justify-center text-white bg-gray-800 hover:bg-black duration-300 mt-5 py-2 rounded-lg mx-4 cursor-pointer ' + className}>
            <span className={'text-lg'}>Go to class</span>
            <KeyboardDoubleArrowRightOutlinedIcon
                className={'my-auto'}
            />
        </div>
    )
}

export default {
    AddToListChip,
    QuickViewChip
}