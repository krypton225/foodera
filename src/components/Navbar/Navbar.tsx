import { Logo } from "../../data/Photos";
import listDataItems from "./list-data";

const Navbar = () => {
    return (
        <nav className="w-full py-6">
            <div className="container flex justify-between items-center">
                <div className="w-44">
                    <img src={Logo} alt="Foodera" />
                </div>

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