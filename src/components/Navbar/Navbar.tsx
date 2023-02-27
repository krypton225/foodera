import { Logo } from "../main";

import listDataItems from "./list-data";

const Navbar = () => {
    return (
        <nav className="w-full py-6">
            <div className="container flex justify-between items-center">
                <Logo widthInRem={56} />

                <ul className="flex items-center">
                    {listDataItems.map(({ id, linkText, linkURL, isButton }) => {
                        return (
                            <li key={id} className="mx-6">
                                <a href={linkURL}
                                    className={`block py-[0.5rem] capitalize font-semibold text-lg text-primary-dark ${isButton ? "custom-btn" : ""}`}>
                                    {linkText}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;