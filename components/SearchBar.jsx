import SearchIcon from '@mui/icons-material/Search';
import {motion} from "framer-motion";

const SearchBar = ({ onSearchChange, className, inputRef, placeholder, animate, initial, transition, onFocusShift }) => {
    return (
        <motion.div transition={transition} initial={initial} animate={animate}  className={"rounded-full flex items-center p-2 h-12 border-2 border-black " + className}>
            <SearchIcon/>
            <input
                className="bg-transparent outline-none w-full ml-2"
                type="search"
                placeholder={placeholder}
                onChange={onSearchChange}
                ref={inputRef}
                onBlur={onFocusShift}
            />
        </motion.div>
    );
}

export default SearchBar;