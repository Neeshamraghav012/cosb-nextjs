import Link from "next/link";
import {isLoggedin, getUsername, logout} from "../utility/Auth";
import {useEffect, useState} from "react";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const Navbar = ()   => {
    const [isLogged, setIsLogged] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    }
    const handleClose = () => {
        setAnchorEl(null);
    }


    useEffect(() => {
        isLoggedin().then((res) => {
            setIsLogged(res);
            setIsLoaded(true);
        });
    }, [isLoaded]);

    return (
        <div className={'flex justify-between items-center py-5 md:px-10 px-2 bg-black text-white'}>
            <div className={'flex items-center'}>
                <Link href={'/'}>

                    <span className={'font-bold text-2xl'}>cosb</span> 

                </Link>
            </div>
            <div className={'flex items-center'}>

                {isLogged ? (
                    <>
                        <div className={'flex items-center cursor-pointer'} onClick={handleClick}>
                            {getUsername()}
                        </div>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            {/*<MenuItem onClick={handleClose}>Profile</MenuItem>*/}
                            <MenuItem onClick={() => {
                                logout();
                                handleClose();
                                setIsLoaded(false);
                                window.location.reload();
                            }}>Logout</MenuItem>
                        </Menu>
                    </>

                ) :
                    isLoaded ? (
                            <>
                                <Link href={'/login'}>
                                    <span className={'cursor-pointer font-semibold hover:underline mr-4'}>Login</span>
                                </Link>
                                <Link href={'/signup'}>
                                    <span className={'cursor-pointer font-semibold hover:underline mr-4'}>Signup</span>
                                </Link>
                            </>
                        ) : (
                            ''
                        )

                }


            </div>
        </div>
    );
}

export default Navbar;