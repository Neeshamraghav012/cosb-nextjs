import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ onSearchChange, className }) => {
    return (
        <div className={"rounded-full flex items-center  md:w-1/3 p-2 h-12 border-2 border-black " + className}>
            <SearchIcon/>
            <input
                className="bg-transparent outline-none w-full ml-2"
                type="search"
                placeholder="Search"
                onChange={onSearchChange}
            />
        </div>
    );
}

export default SearchBar;