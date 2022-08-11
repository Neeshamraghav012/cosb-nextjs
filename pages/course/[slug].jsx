import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";
import {TitleCard} from "./components/TitleCard";
import {DescriptionCard} from "./components/DescriptionCard";
import {InfoCard} from "./components/InfoCard";

export default function CoursePage() {
    const router = useRouter();
    const { slug } = router.query;

    return (
        <div className={'bg-grey'}>
            <Navbar/>
            <div className={'md:px-20 flex pt-20'}>

                <div className={'flex flex-col w-2/3'}>
                    <TitleCard title={'Python Course'} platform={'Udemy'} rating={3.5} reviews={23} />
                    <DescriptionCard className={'mt-5'}/>
                </div>

                <div className={'flex flex-col w-1/3 ml-5'}>
                    <InfoCard
                        image={'https://res.cloudinary.com/hire-easy/image/upload/v1/media/images/python-course-3_iyrekd'}
                        platform={'Udemy'}
                    />
                </div>

            </div>


        </div>
    )
}