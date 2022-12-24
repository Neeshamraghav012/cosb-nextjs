import SearchBar from "../../SearchBar.jsx";
import Chip from "../../Chip.jsx";
import {useRef} from "react";

const Action =({onSearchChange}) => {
    const searchRef = useRef();


    return (
        <div className="flex flex-col bg-grey justify-center items-center pt-20">
            <h1 className={'text-xl md:text-4xl mx-5 md:mx-0 md:w-1/3 flex-wrap text-center'}>Find Courses, Without Confusion!</h1>
            <SearchBar className={'mt-5'} onSearchChange={onSearchChange} inputRef={searchRef} placeholder={'Search Courses'}/>
            <div className={'flex flex-wrap flex-col mx-5 md:mx-0 space-y-1 my-5'}>
                <div className={'flex flex-row justify-center mb-2'}>
                    <h6 className={'my-auto mr-2 text-2xl font-bold'}>Trending Searches: </h6>
                </div>
                <div className={'flex flex-wrap justify-around space-y-1 md:space-y-0 items-center'}>
                    <Chip label={'Python'} className={'mr-2'} onClick={() => {
                        searchRef.current.value = 'Python';
                        onSearchChange(searchRef);
                    }} />
                    <Chip label={'Data Science'} className={'mr-2'} onClick={() => {
                        searchRef.current.value = 'Data Science';
                        onSearchChange(searchRef);
                    }}/>
                    <Chip label={'Development'} className={'mr-2'} onClick={() => {
                        searchRef.current.value = 'Development';
                        onSearchChange(searchRef);
                    }}/>
                    <Chip label={'Data Structures'} className={'mr-2'} onClick={() => {
                        searchRef.current.value = 'dsa';
                        onSearchChange(searchRef);
                    }}/>

                    <Chip label={'Diary'} className={'mr-2 bg-green-800 text-white'} onClick={() => {
                        window.location.href = "/diary";
                    }}/>

                </div>

            </div>
        </div>
    )
}

export default Action;
