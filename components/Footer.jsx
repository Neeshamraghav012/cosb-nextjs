import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import Link from "next/link";


const Footer = ({className}) => {
    return (
        <div className={className }>
            <footer className="p-4 bg-white sm:p-6 dark:bg-gray-800 mx-auto">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <a href="#" target="_blank" className="flex items-center">
                            {/*<img src="https://flowbite.com/docs/images/logo.svg" className="mr-4 h-10"*/}
                            {/*     alt="FlowBite Logo"/>*/}
                                <span
                                    className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">cosb</span>


                        </a>

                        {/*<a href={'/aboutus'}><span
                                    className="self-center text-sm whitespace-nowrap dark:text-white">About Us  </span></a>

                        <br />*/}
                        {/*<a href={'/contactus'}><span
                                    className="self-center text-sm whitespace-nowrap dark:text-white">Contact Us  </span></a>*/}


                        <span><Link href={'/contactus'} className={'text-gray-600 hover:underline dark:text-gray-400'}>Contact Us</Link> <Link href={'/aboutus'} className={'text-sm'}>About Us</Link></span>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        {/*<div>*/}
                        {/*    <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h3>*/}
                        {/*    <ul>*/}
                        {/*        <li className="mb-4">*/}
                        {/*            <a href="#" target="_blank"*/}
                        {/*               className="text-gray-600 hover:underline dark:text-gray-400">Flowbite</a>*/}
                        {/*        </li>*/}
                        {/*        <li>*/}
                        {/*            <a href="#" target="_blank" rel="nofollow"*/}
                        {/*               className="text-gray-600 hover:underline dark:text-gray-400">Tailwind CSS</a>*/}
                        {/*        </li>*/}
                        {/*    </ul>*/}
                        {/*</div>*/}
                        {/*<div>*/}
                        {/*    <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow*/}
                        {/*        us</h3>*/}
                        {/*    <ul>*/}
                        {/*        <li className="mb-4">*/}
                        {/*            <a href="#" target="_blank"*/}
                        {/*               className="text-gray-600 hover:underline dark:text-gray-400">Github</a>*/}
                        {/*        </li>*/}
                        {/*        <li>*/}
                        {/*            <a href="#" target="_blank"*/}
                        {/*               className="text-gray-600 hover:underline dark:text-gray-400">Discord</a>*/}
                        {/*        </li>*/}
                        {/*    </ul>*/}
                        {/*</div>*/}
                        {/*<div>*/}
                        {/*    <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h3>*/}
                        {/*    <ul>*/}
                        {/*        <li className="mb-4">*/}
                        {/*            <a href="#" target="_blank"*/}
                        {/*               className="text-gray-600 hover:underline dark:text-gray-400">Privacy*/}
                        {/*                Policy</a>*/}
                        {/*        </li>*/}
                        {/*        <li>*/}
                        {/*            <a href="#" target="_blank"*/}
                        {/*               className="text-gray-600 hover:underline dark:text-gray-400">Terms*/}
                        {/*                &amp; Conditions</a>*/}
                        {/*        </li>*/}
                        {/*    </ul>*/}
                        {/*</div>*/}
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
                    <div className="sm:flex sm:items-center sm:justify-between">
			<span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 cosb™. All Rights Reserved.
</span>
                        <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                            {/*<a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <FacebookIcon/>
                            </a>*/}
                            <a href="https://www.instagram.com/cosb.live/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <InstagramIcon/>
                            </a>
                            {/*<a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <TwitterIcon/>
                            </a>*/}
                            <a href="https://www.linkedin.com/company/82995402/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <LinkedInIcon/>
                            </a>
                        </div>
                    </div>
            </footer>
        </div>
    )
}

export default Footer;