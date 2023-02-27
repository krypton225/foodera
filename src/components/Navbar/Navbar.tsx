import { useState } from "react";

import { Logo } from "../main";

import listDataItems from "./list-data";

const Navbar = () => {
    const [toggler, setToggler] = useState<Boolean>(false);

    const handleToggleMenu = () => setToggler(!toggler);

    return (
        <nav className="w-full py-6 relative">
            <div className="w-full container flex justify-between items-center">
                <Logo widthInRem={44} />

                <ul className={`w-[90%] h-auto py-8 absolute ${toggler ? "top-28 opacity-100 visible" : "top-16 opacity-0 invisible"} right-[5%] 
                rounded-md flex flex-col justify-center items-center bg-primary-light lg:static lg:py-0 lg:bg-transparent 
                lg:flex lg:items-center lg:justify-end lg:flex-row lg:h-auto transition-all duration-[0.66s]`}>

                    {listDataItems.map(({ id, linkText, linkURL, isButton }) => {
                        return (
                            <li key={id} className={`block ${isButton ? "" : "w-full"} lg:inline-block lg:w-auto max-[600px]:mt-2 mt-4 lg:mr-12 lg:mt-0`}>
                                <a href={linkURL}
                                    className={`block text-center py-[0.5rem] capitalize font-semibold text-lg text-white lg:text-primary-dark 
                                    ${isButton ? "btn custom-btn-default lg:bg-primary-dark lg:text-white" : ""}`}>
                                    {linkText}
                                </a>
                            </li>
                        );
                    })}
                </ul>

                <div className="w-12 h-6 flex flex-col justify-between items-center select-none cursor-pointer lg:hidden" onClick={handleToggleMenu}>
                    <span className={`w-full h-1 rounded-md bg-primary-dark transition-1\/2 ${toggler ? "rotate-left-45" : ""}`}></span>
                    <span className={`w-full h-1 rounded-md bg-primary-dark transition-1\/2 ${toggler ? "scale-hide" : ""}`}></span>
                    <span className={`w-full h-1 rounded-md bg-primary-dark transition-1\/2 ${toggler ? "rotate-right-45" : ""}`}></span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;