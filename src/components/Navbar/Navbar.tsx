import { useEffect, useState } from "react";

import { Logo } from "../main";

import Hamburger from "./Hamburger/Hamburger";
import NavbarList from "./NavbarList/NavbarList";

const Navbar = () => {
    const [toggler, setToggler] = useState<boolean>(false);
    const [isScroll, setIsScroll] = useState<boolean>(false);

    const handleToggleMenu = () => setToggler(!toggler);

    const handleScrolling = () => {
        if (window.scrollY > 180) {
            setIsScroll(true);
        } else {
            setIsScroll(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScrolling);

        return (): void => {
            window.removeEventListener("scroll", handleScrolling);
        };
    }, [isScroll]);

    return (
        <nav className={`w-full py-6 fixed top-0 left-0 ${isScroll ? "active-scroll shadow-md" : ""} z-[99999] transition-all duration-[0.4s]`}>
            <div className="w-full container flex justify-between items-center">
                <Logo widthInRem={44} />

                <NavbarList togglerValue={toggler} />

                <Hamburger toggleValue={toggler} toggleFunction={handleToggleMenu} />
            </div>
        </nav>
    );
};

export default Navbar;