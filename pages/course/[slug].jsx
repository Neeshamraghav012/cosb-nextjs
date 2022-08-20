import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";
import {TitleCard} from "../../components/pageComponents/coursePageComponents/TitleCard";
import {DescriptionCard} from "../../components/pageComponents/coursePageComponents/DescriptionCard";
import {InfoCard} from "../../components/pageComponents/coursePageComponents/InfoCard";
import TitleCardMobile
    from "../../components/pageComponents/coursePageComponents/smallScreenComponents/TitleCardMobile";
import NavigationCard from "../../components/pageComponents/coursePageComponents/smallScreenComponents/NavigationCard";
import InfoCardMobile from "../../components/pageComponents/coursePageComponents/smallScreenComponents/InfoCardMobile";
import RelatedCoursesMobile
    from "../../components/pageComponents/coursePageComponents/smallScreenComponents/RelatedCoursesMobile";
import ReviewsMobile from "../../components/pageComponents/coursePageComponents/smallScreenComponents/ReviewsMobile";
import BottomButton from "../../components/pageComponents/coursePageComponents/smallScreenComponents/BottomButton";

export default function CoursePage() {
    const router = useRouter();
    const { slug } = router.query;

    return (
        <div className={'bg-grey'}>
            <Navbar/>
            <div className={'lg:px-20 flex md:flex-row flex-col pt-20'}>
                 {/*This is for Bigger Screens */}
                <div className={'hidden md:flex flex-col w-2/3'}>
                    <TitleCard title={'Python Course'} platform={'Udemy'} rating={3.5} reviews={23} />
                    <DescriptionCard className={'mt-5'}/>
                </div>
                <div className={'hidden md:flex flex-col w-1/3 ml-5'}>
                    <InfoCard
                        image={'https://res.cloudinary.com/hire-easy/image/upload/v1/media/images/python-course-3_iyrekd'}
                        platform={'Udemy'}
                        price={'Free'}
                        language={'English'}
                        certificate={'Certificate Available'}
                        time={'35 Hours'}
                        level={'Beginner'}
                        cc={'English, French'}
                    />
                </div>


                 {/*This is for Smaller Screens*/}
                <div className={'flex md:hidden flex-col'}>
                    <TitleCardMobile
                        title={'Python Course'}
                        platform={'Udemy'}
                        rating={3.5}
                        reviews={23}
                        image={'https://res.cloudinary.com/hire-easy/image/upload/v1/media/images/python-course-3_iyrekd'}
                    />
                    {/*<NavigationCard/>*/}
                    <InfoCardMobile
                        platform={'Udemy'}
                        price={'Free'}
                        language={'English'}
                        certificate={'Certificate Available'}
                        time={'35 Hours'}
                        level={'Beginner'}
                        cc={'English, French'}
                    />
                    {/*<RelatedCoursesMobile/>*/}
                    {/*<ReviewsMobile/>*/}
                    {/*<BottomButton/>*/}
                </div>

            </div>
        </div>
    )
}