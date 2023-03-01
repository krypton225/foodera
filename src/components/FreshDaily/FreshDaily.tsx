import { Parallax2 } from "../../data/Photos";
import { MainButton } from "../main";

const FreshDaily = () => {
    return (
        <div className="w-full h-[14rem] relative py-6 bg-fixed bg-center bg-cover bg-no-repeat"
            style={{ backgroundImage: `url('${Parallax2}')` }}>
            <div className="w-full h-full absolute top-0 left-0 bg-[#202020a0]"></div>

            <div className="w-full h-full py-4 container absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col lg:flex-row 
            justify-around lg:justify-between items-center z-50">
                <p className="text-white text-lg md:text-2xl lg:text-4xl font-semibold">
                    Baked fresh daily by bakers with passion.
                </p>

                <MainButton bg="primary-light" color="white" text="learn more" />
            </div>
        </div>
    );
};

export default FreshDaily;