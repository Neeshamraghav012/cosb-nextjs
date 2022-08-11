import PostAddIcon from '@mui/icons-material/PostAdd';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';

export const AddToListChip = ({className}) => {
    return (
        <div className={"border-1 flex border-gray-300 rounded-lg px-2 items-center cursor-pointer hover:border-black duration-300 " + className}>
            <PostAddIcon
                fontSize={'small'}
            />
            <span className="ml-1 text-sm">Add to List</span>
        </div>
    );
}

export const QuickViewChip = ({className}) => {
    return (
        <div className={"border-1 flex border-gray-300 rounded-lg px-2 items-center cursor-pointer hover:border-black duration-300 " + className}>
            <RemoveRedEyeOutlinedIcon
                fontSize={'small'}
            />
            <span className="ml-1 text-sm">Quick View</span>
        </div>
    );
}

export const MarkCompleteChip = ({className}) => {
    return (
        <div className={"border-1 flex border-gray-300 rounded-lg px-2 items-center cursor-pointer hover:border-black duration-300 " + className}>
            <CheckCircleOutlineOutlinedIcon
                fontSize={'small'}
            />
            <span className="ml-1 text-sm">Mark Complete</span>
        </div>
    );
}

export const WriteReviewChip = ({className}) => {
    return (
        <div className={"border-1 flex rounded-lg px-2 items-center cursor-pointer text-white bg-gray-800 hover:bg-black duration-300 " + className}>
            <span className="ml-1 text-sm">Write Review</span>
        </div>
    )
}

export default {
    AddToListChip,
    QuickViewChip
}