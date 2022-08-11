import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import Tooltip from "@mui/material/Tooltip";

export default function BookmarkIcon({className, onClick}) {
    return (
        <Tooltip title={'Save Course'} placement={'bottom'} className={className} >
            <BookmarkBorderIcon
                sx={{
                    color: 'blue',
                    cursor: 'pointer',
                    stroke: '#ffffff',
                    strokeWidth: '0.1rem',
                    fontSize: '2rem',
                }}
            />
        </Tooltip>
    )
}