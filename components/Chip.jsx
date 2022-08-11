const Chip = ({ label, onClick, className }) => {
    return (
        <div className={"rounded-full text-xs md:text-sm px-4 py-2 md:py-2 border-2 border-slate-500 text-slate-500 hover:text-black hover:border-black duration-500 cursor-pointer "
            + className} onClick={onClick}>
            {label}
        </div>
    );
}

export default Chip;