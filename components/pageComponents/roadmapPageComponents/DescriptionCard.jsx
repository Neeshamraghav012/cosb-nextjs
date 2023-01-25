

import SanitizedHTML from 'react-sanitized-html';

export const DescriptionCard = ({className, desc}) => {
    return (
        <div className={'flex text-center py-5 bg-neutral-100 rounded-md px-8 max-h-2xl' + className}>
            {/*<span className= {'font-bold text-3xl'}>Overview</span> border-1 border-neutral-200*/}
            <p className={'mt-5'}>
                <SanitizedHTML html={ desc } />
            </p>

        </div>
    )
}

export default DescriptionCard;