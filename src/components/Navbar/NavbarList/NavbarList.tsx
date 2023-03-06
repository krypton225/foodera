import ULContainer from "./ULContainer";

import INavbarList from "./NavbarList.interface";

import listDataItems from "../list-data";

const NavbarList = ({ togglerValue, setToggler }: INavbarList) => {

    const handleLinksClick = () => setToggler(false);

    return (
        <ULContainer togglerValue={togglerValue}>
            {listDataItems.map(({ id, linkText, linkURL, isButton }) => {
                return (
                    <li key={id} className={`block ${isButton ? "" : "w-full"} lg:inline-block lg:w-auto max-[600px]:mt-2 mt-4 lg:mr-12 lg:mt-0`}>
                        <a href={linkURL} onClick={handleLinksClick}
                            className={`block text-center py-[0.5rem] capitalize font-semibold text-lg text-white lg:text-primary-dark 
                                    ${isButton ? "btn custom-btn-default lg:bg-primary-dark lg:text-white" : ""}`}>
                            {linkText}
                        </a>
                    </li>
                );
            })}
        </ULContainer>
    );
};

export default NavbarList;