import { useState } from "react";

import { Logo } from "../main";

import Hamburger from "./Hamburger/Hamburger";
import NavbarList from "./NavbarList/NavbarList";

const Navbar = () => {
    const [toggler, setToggler] = useState<boolean>(false);

    const handleToggleMenu = () => setToggler(!toggler);

    return (
        <nav className="w-full py-6 relative">
            <div className="w-full container flex justify-between items-center">
                <Logo widthInRem={44} />

                <NavbarList togglerValue={toggler} />

                <Hamburger toggleValue={toggler} toggleFunction={handleToggleMenu} />
            </div>
        </nav>
    );
};

export default Navbar;