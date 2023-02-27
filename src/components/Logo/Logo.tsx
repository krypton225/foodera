import ILogo from "./Logo.interface";

import { LogoImage } from "../../data/Photos";

const Logo = ({ widthInRem = 44 }: ILogo) => {
    return (
        <div className={`w-32 lg:w-${widthInRem}`} >
            <img src={LogoImage} alt="Foodera" className="w-full h-full object-cover" />
        </div >
    );
};

export default Logo;