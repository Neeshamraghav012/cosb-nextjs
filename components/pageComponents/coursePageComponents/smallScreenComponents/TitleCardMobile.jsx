import Image from "next/image";
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import BookmarkIcon from "../../../BookmarkIcon";
import {AddToListChip, GotoClass, MarkCompleteChip, WriteReviewChip} from "../../../ActionChip";
import {Modal, Rating, ThemeProvider} from "@mui/material";
import Link from "next/link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {useState} from "react";
import theme from '../../../../config/theme';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const TitleCardMobile = ({image, title, platform, rating, link}) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 1.3,
    };


    return (
        <div className={'bg-white border-neutral-200 rounded-lg'}>
            <div className={''}>
                <Image src={image} layout={'responsive'} width={'100%'} height={'60'} />
            </div>
            <div className={'mx-3 flex flex-col'}>
                <div className={'flex mt-1'}>
                    <div>
                        <ShareOutlinedIcon onClick={handleOpen} />
                    </div>
                    {/*<div className={'ml-auto flex'}>*/}
                    {/*    <BookmarkIcon/>*/}
                    {/*    <AddToListChip isSmall={true}/>*/}
                    {/*    <MarkCompleteChip isSmall={true} className={'ml-1'}/>*/}
                    {/*</div>*/}

                    <ThemeProvider theme={theme}>
                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>
                                <Typography id="modal-modal-title" variant="h6" component="h2" className={'ml-5'}>
                                    Share This Course
                                </Typography>
                                <div className={'flex flex-col mt-4'}>
                                    <div className={'flex py-4 border-1 items-center border-black cursor-pointer'} onClick={() => {
                                        window.open(`whatsapp://send?text=Hey, I found this amazing course on cosb. You can check out more details here.
                                        ${window.location.href}`, '_blank')
                                    }}>
                                        <div className={'mx-4'}>
                                            <WhatsAppIcon fontSize={'large'}/>
                                        </div>
                                        <span className={'ml-8'}>WhatsApp</span>
                                    </div>
                                    <div className={'flex py-4 items-center border-1 border-black cursor-pointer'} onClick={() => {
                                        window.open(`https://www.facebook.com/sharer/sharer.php?u=Hey, I found this amazing course on cosb. You can check out more details here.
                                        ${window.location.href}`, '_blank')
                                    }}>
                                        <div className={'mx-4'}>
                                            <FacebookIcon fontSize={'large'}/>
                                        </div>
                                        <span className={'ml-8'}>Facebook</span>
                                    </div>
                                    <div className={'flex py-4 items-center border-1 border-black cursor-pointer'} onClick={() => {
                                        window.open(`https://twitter.com/intent/tweet?url=Hey, I found this amazing course on cosb. You can check out more details here.
                                        ${window.location.href}`, '_blank')
                                    }}>
                                        <div className={'mx-4'}>
                                            <TwitterIcon fontSize={'large'}/>
                                        </div>
                                        <span className={'ml-8'}>Twitter</span>
                                    </div>
                                    <div className={'flex py-4 items-center border-1 border-black cursor-pointer'} onClick={() => {
                                        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=Hey, I found this amazing course on cosb. You can check out more details here.
                                        ${window.location.href}`, '_blank')
                                    }}>
                                        <div className={'mx-4'}>
                                            <LinkedInIcon fontSize={'large'}/>
                                        </div>
                                        <span className={'ml-8'}>LinkedIn</span>
                                    </div>
                                </div>
                            </Box>
                        </Modal>
                    </ThemeProvider>

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
                <Link href={link}>
                    <a><GotoClass/></a>
                </Link>
                <WriteReviewChip className={'mx-4 py-3 mt-2'}/>
            </div>
        </div>
    )
}

export default TitleCardMobile;