import IHamburger from "./Hamburger.interface";

const Hamburger = ({ toggleValue, toggleFunction }: IHamburger) => {
    return (
        <div className="w-12 h-6 flex flex-col justify-between items-center select-none cursor-pointer lg:hidden" onClick={toggleFunction}>
            <span className={`line-toggler transition-1\/2 ${toggleValue ? "rotate-left-45" : ""}`}></span>
            <span className={`line-toggler-half transition-1\/2 ${toggleValue ? "scale-hide" : ""}`}></span>
            <span className={`line-toggler transition-1\/2 ${toggleValue ? "rotate-right-45" : ""}`}></span>
        </div>
    );
};

export default Hamburger;
