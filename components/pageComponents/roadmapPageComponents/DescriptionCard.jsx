

import SanitizedHTML from 'react-sanitized-html';

export const DescriptionCard = ({className, desc}) => {
    return (
        <div className={'flex py-5 flex-col bg-white rounded-md px-8' + className}>
            {/*<span className={'font-bold text-3xl'}>Overview</span> border-1 border-neutral-200*/}
            <p className={'mt-5 text-ellipsis overflow-hidden'}>
                <SanitizedHTML html={ desc } />
            </p>

        </div>
    )
}

export default DescriptionCard;