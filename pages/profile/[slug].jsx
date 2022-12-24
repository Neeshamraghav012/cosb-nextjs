import {useRouter} from "next/router";
import Navbar from "../../components/Navbar";
import Image from "next/image";
import {EditProfileChip} from "../../components/ActionChip";
import SettingsIcon from '@mui/icons-material/Settings';
import {motion} from "framer-motion";
import ProfileCard from "../../components/pageComponents/profilePageComponents/ProfileCard";
import {useEffect, useState} from "react";
import axios from "axios";
import {AVATAR_URL, USER_PROFILE} from "../../config/constants";
import {RequestHeaders} from "../../utility/Auth";
import Footer from "../../components/Footer";


export const getServerSideProps = async ({params}) => {
    const res = await axios.post(`${USER_PROFILE}`, {
        username: params.slug,
    });
    return {
        props: {
            user: res.data,
            username: params.slug,
        },
    };
}

export default function ProfilePage({user, username}) {
    const router = useRouter();
    const { slug } = router.query;
    const [userName, setUserName] = useState('');
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        if(user.status === 0) {
            setUserName("User Not Found");
            setLoading(false);
        }
        else if (user.length > 0) {
            setUserName(user[0].user.username);
            setData(user);
            setLoading(false);
        }
        else {
            setUserName(username);
            setData(user);
            setLoading(false);
        }

    }, [user]);

    return (
        <div className={'bg-gray'}>
            <ProfileCard
                loading={loading}
                data={data}
                image={loading ? '' : AVATAR_URL + userName}
                name={'Neesham'}
                username={userName}
                posts={'1'}
                followers={'593'}
                following={'463'}
                bio={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris . Duis aute icaorum.'}
            />

            <Footer className={'mt-20'}/>
        </div>
    )
}