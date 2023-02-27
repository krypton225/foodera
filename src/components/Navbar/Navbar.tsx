import { Logo } from "../../data/Photos";
import listDataItems from "./list-data";

const Navbar = () => {
    return (
        <nav className="w-full">
            <div className="container flex justify-between items-center">
                <div className="w-44">
                    <img src={Logo} alt="Foodera" />
                </div>

                <ul className="flex">
                    {listDataItems.map(({ id, linkText, linkURL, isButton }) => {
                        return (
                            <li key={id} className="mx-4">
                                <a href={linkURL}
                                    className={`block p-4 capitalize font-semibold text-lg text-primary-dark ${isButton ? "custom-btn" : ""}`}>
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