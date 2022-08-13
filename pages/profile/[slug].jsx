import {useRouter} from "next/router";
import Navbar from "../../components/Navbar";
import Image from "next/image";
import {EditProfileChip} from "../../components/ActionChip";
import SettingsIcon from '@mui/icons-material/Settings';
import {motion} from "framer-motion";
import ProfileCard from "../../components/pageComponents/profilePageComponents/ProfileCard";

export default function ProfilePage() {
    const router = useRouter();
    const { slug } = router.query;

    return (
        <div className={'bg-gray'}>
            <Navbar/>
            <ProfileCard
                image={'https://imgur.com/R076K0l.jpg'}
                name={'Neesham'}
                username={'neeshamraghav'}
                posts={'1'}
                followers={'593'}
                following={'463'}
                bio={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris . Duis aute icaorum.'}
            />
        </div>
    )
}
