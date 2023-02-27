import listDataItems from "../list-data";

import INavbarList from "./NavbarList.interface";

const NavbarList = ({ togglerValue }: INavbarList) => {
    return (
        <ul className={`max-[639px]:w-[95%] sm:w-[90%] md:w-[80%] h-auto py-8 absolute ${togglerValue ? "top-28 opacity-100 visible" : "top-16 opacity-0 invisible"} 
        max-[639px]:right-[2%] sm:right-[5%] md:right-[10%] rounded-md flex flex-col justify-center items-center bg-primary-light lg:static lg:py-0 lg:bg-transparent 
                lg:flex lg:flex-row lg:items-center lg:justify-end lg:h-auto lg:visible lg:opacity-100 transition-all duration-[0.66s] z-[9999]`}>

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
    );
};

export default NavbarList;