import SearchBar from "../../SearchBar.jsx";
import Chip from "../../Chip.jsx";

const Action =() => {
    return (
        <div className="flex flex-col bg-grey justify-center items-center pt-20">
            <h1 className={'text-xl md:text-4xl mx-5 md:mx-0 md:w-1/3 flex-wrap text-center'}>Explore the World&apos;s leading courses made for you</h1>
            <SearchBar className={'mt-5'}/>
            <div className={'flex flex-wrap flex-col mx-5 md:mx-0 space-y-1 my-5'}>
                <div className={'flex flex-row justify-center mb-2'}>
                    <h1 className={'my-auto mr-2'}>Trending Searches: </h1>
                </div>
                <div className={'flex'}>
                    <Chip label={'Python'} className={'mr-2'}/>
                    <Chip label={'C++'} className={'mr-2'}/>
                    <Chip label={'Development'} className={'mr-2'}/>
                    <Chip label={'Business'} className={'mr-2'}/>
                </div>

            </div>
        </div>
    )
}

export default Action;