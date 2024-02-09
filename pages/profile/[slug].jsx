import {useRouter} from "next/router";
import ProfileCard from "../../components/pageComponents/profilePageComponents/ProfileCard";
import {useEffect, useState} from "react";
import axios from "axios";
import {AVATAR_URL, USER_PROFILE} from "../../config/constants";
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

    console.log(data);

    return (
        <div className={'bg-gray'}>
            <ProfileCard
                loading={loading}
                data={data}
                avatar={loading ? '' : AVATAR_URL + userName}
                name={'Neesham'}
                username={userName}
            />

            <Footer className={'mt-20'}/>
        </div>
    )
}