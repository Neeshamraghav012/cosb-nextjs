export const DescriptionCard = ({className, desc}) => {
    return (
        <div className={'flex py-5 flex-col bg-white border-1 border-neutral-200 rounded-md px-8 ' + className}>
            <span className={'font-bold text-3xl'}>Overview</span>
            <span className={'mt-5 text-justify'}>{desc}</span>

        </div>
    )
}

export default DescriptionCard;