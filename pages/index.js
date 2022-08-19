import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from "../components/Navbar";
import Action from "../components/pageComponents/homePageComponents/Action";
import Card from "../components/pageComponents/homePageComponents/Card";

export default function Home() {


  return (
    <div>
      <Head>
        <title>cosb</title>
        <meta name="description" content="cosb" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar/>
      <Action/>


      <Card title={'Python Course'}
            description={'Python Course for Beginners Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
            image={'https://res.cloudinary.com/hire-easy/image/upload/v1/media/images/python-course-3_iyrekd'}
            rating={4.5}
            reviews={30}
            platform={'Coursera'}
      />
      <Card title={'Python Course'}
            description={'Python Course for Beginners Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
            image={'https://res.cloudinary.com/hire-easy/image/upload/v1/media/images/python-course-3_iyrekd'}
            rating={3.9}
            reviews={20}
            platform={'YouTube'}
      />
      <Card title={'Python Course'}
            description={'Python Course for Beginners Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
            image={'https://res.cloudinary.com/hire-easy/image/upload/v1/media/images/python-course-3_iyrekd'}
            rating={3.3}
            reviews={10}
            platform={'GeeksforGeeks'}
      />

    </div>

  )
}
