import { TitleSection } from "../main";

import Card from "./Card/Card";

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
                {exploreDataItems.map(({ id, imgURL, title, time: { start, end }, servesCount, currentPrice, previousPrice }) => (
                    <Card key={id} title={title} img={imgURL} startTime={start} endTime={end}
                        servesCount={servesCount} currentPrice={currentPrice} previousPrice={previousPrice} />
                ))}
            </div>
        </section>
    );
};

export default Explore;