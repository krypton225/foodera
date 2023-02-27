import ILogo from "./Logo.interface";

import { LogoImage } from "../../data/Photos";

const Logo = ({ widthInRem = 44 }: ILogo) => {
    return (
        <div className={`w-${widthInRem}`} >
            <img src={LogoImage} alt="Foodera" />
        </div >
    );
};

export default Logo;