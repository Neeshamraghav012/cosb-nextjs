import Link from "next/link";
import {isLoggedin, getUsername, logout, searchUser} from "../utility/Auth";
import {useEffect, useRef, useState} from "react";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import SearchBar from "./SearchBar";
import SearchIcon from "@mui/icons-material/Search";
import {motion} from "framer-motion";
import {CircularProgress, useMediaQuery} from "@mui/material";
import {useTheme} from "@mui/material";
import {ButtonLoading} from "./LoadingComponents";
import {SearchedUserChip} from "./ActionChip";
import {useRouter} from "next/router";

const Navbar = ()   => {
    const router = useRouter();
    const isSmall = useMediaQuery(useTheme().breakpoints.down(768));
    const [isLogged, setIsLogged] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [isSearching, setIsSearching] = useState(true);
    const [searchResults, setSearchResults] = useState([]);
    const searchRef = useRef(null);

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


    useEffect(() => {
        setIsSearching(true);
        searchUser(searchValue).then((res) => {
            setSearchResults(res);
            setIsSearching(false);
        });
    }, [searchValue]);





    return (
        <div className={'flex justify-between items-center py-5 md:px-10 px-2 bg-black text-white'}>
            <div className={'flex items-center'}>
                <Link href={'/'}>

                    <span className={'font-bold text-2xl'}>cosb</span> 

                </Link>
            </div>
            <div className={'flex items-center justify-between'}>
                    <SearchBar
                        initial={false}
                        transition={{duration:0.5}}
                        animate={isSmall ? {width:isSearchOpen ? [0,200] : [200, 0], opacity:isSearchOpen ? 1 : 0} : {}}
                        className={`bg-white text-black w-48 mr-5 md:inline-flex h-8 md:h-12`}
                        placeholder={'Search Users'}
                        inputRef={searchRef}
                        onSearchChange={(e) => {
                            setIsSearching(true);
                            setSearchValue(e.target.value);
                        }
                        }
                        onFocusShift={() => {
                            setTimeout(() => {
                                setIsSearchOpen(false);
                            }, 100);
                        }
                        }
                    />
                <motion.div
                    initial={false}
                    transition={{duration:0.5}}
                    animate={{opacity:isSearchOpen ? 0 : 1, width:isSearchOpen ? 0 : 30}}
                    className={'flex items-center justify-center'}
                >
                    <SearchIcon className={`mr-3 md:hidden`} onClick={() => {
                        searchRef.current.focus();
                        setIsSearchOpen(true);
                    }} />
                </motion.div>

                <motion.div className={`${searchValue.length === 0 || (isSmall && !isSearchOpen) ? 'hidden' : ''} p-2 z-50 items-center flex flex-col max-h-80 overflow-y-scroll absolute top-20  w-60 right-20 bg-gray-100 border-1 border-neutral-200 rounded-lg shadow-2xl`}>
                    {isSearching ? <CircularProgress/> : (
                        searchResults.length === 0 ? <p className={'text-center text-black'}>No results found</p> : (
                            searchResults.map((user) => {
                                return (
                                    <SearchedUserChip key={user.id} user={user} callback={() => {
                                        router.push(`/profile/${user.username}`);
                                    }} />
                                );
                            })
                    ))}
                </motion.div>

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