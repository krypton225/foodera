import { MainButton, TitleSection } from "../main";

import exploreDataItems from "./explore-data";

const Explore = () => {
    return (
        <section className="sec-padding-12">
            <TitleSection fontSize={45} text="explore our foods" />

            <p className="w-[85%] lg:w-[50%] mx-auto mt-8 text-center leading-tight text-lg text-slate-500">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Modi voluptates vero aperiam quisquam dolore corrupti beatae ab sed, dolor qui ratione.
                Error veniam eveniet dolore. Aut atque commodi nostrum tenetur voluptatem totam quibusdam quidem minima.
                Quasi obcaecati exercitationem reiciendis ratione?
            </p>

            <div className="container mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
                {
                    exploreDataItems.map(({ id, imgURL, title, time: { start, end }, servesCount, currentPrice, previousPrice }) => (
                        <div key={id} className="w-full min-h-[30rem] capitalize">
                            <div className="w-full rounded-xl">
                                <img src={imgURL} alt={title} className="w-full h-full object-cover rounded-xl" />
                            </div>

                            <div className="w-full text-start ml-2">
                                <p className="mt-5 text-secondary text-xl lg:text-2xl font-semibold">{title}</p>

                                <p className="my-3 text-slate-500 text-xl">Time: {start} - {end} minutes | serves: {servesCount}</p>

                                <p className="mb-4 text-2xl">
                                    <span className="text-primary-light font-semibold">${currentPrice}</span>
                                    <span className="ml-2 text-slate-500">
                                        <del>${previousPrice}</del>
                                    </span>
                                </p>

                                <MainButton bg="primary-light" color="white" text="order now" addStyles="w-[10rem] lg:w-[11rem]" />
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    );
};

export default Explore;