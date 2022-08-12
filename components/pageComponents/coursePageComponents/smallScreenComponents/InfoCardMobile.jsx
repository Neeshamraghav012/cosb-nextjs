const infoCardMobile = ({className, platform, price, language, certificate, time, level, cc}) => {
    return (
        <div className={'bg-white border-neutral-200 mt-5 px-5 flex flex-col ' + className}>
            <span className={'text-xl mt-4 font-bold'}>Details</span>
            <div className={'flex mt-5'}>
                <div className={'flex flex-col w-1/2 space-y-3'}>
                    <span className={'text-gray-700'}>Provider</span>
                    <span className={'text-gray-700'}>Pricing</span>
                    <span className={'text-gray-700'}>Languages</span>
                    <span className={'text-gray-700'}>Certificate</span>
                    <span className={'text-gray-700'}>Duration</span>
                    <span className={'text-gray-700'}>Sessions</span>
                    <span className={'text-gray-700'}>Level</span>
                    <span className={'text-gray-700'}>Subtitles</span>
                </div>
                <div className={'flex flex-col w-1/2 space-y-3'}>
                    <span>{platform}</span>
                    <span>{price}</span>
                    <span>{language}</span>
                    <span>{certificate}</span>
                    <span>{time}</span>
                    <span>{'Self Paced'}</span>
                    <span>{level}</span>
                    <span>{cc}</span>
                </div>
            </div>



        </div>
    )
}

export default infoCardMobile;