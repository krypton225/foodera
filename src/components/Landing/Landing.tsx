import { MainButton } from "../main";

import { LandingImageBg } from "../../data/Photos";

const Landing = () => {
    return (
        <section className={`landing sec-padding-12 min-h-screen flex justify-center lg:justify-start items-center text-center lg:text-start bg-cover bg-no-repeat`}
            style={{ backgroundImage: `url('${LandingImageBg}')` }}>

            <div className="container">
                <p className="max-[767px]:text-4xl max-[1023px]:text-5xl lg:text-6xl font-medium text-secondary leading-tight">
                    Good food choices <br /> are good <br /> investments.
                </p>

                <div className="my-11 text-slate-600 text-xl">
                    <p className="mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <p>Iure veniam dicta maxime quia voluptate unde.</p>
                </div>

                <div className="min-w-[20rem] max-[560px]:w-full max-[767px]:w-[76%] max-[1023px]:w-3/5 lg:w-[24rem] mt-12 max-[1023px]:mx-auto flex justify-between items-center">
                    <MainButton text="order now" bg="primary-light" color="white" iconClasses="icon-shopping-basket" />
                    <MainButton text="learn more" bg="white" color="black" iconClasses="icon-right-open-big" />
                </div>
            </div>
        </section>
    );
};

export default Landing;
