import { MainButton } from "../../main";

import ICard from "./ICard.interface";

const Card = ({ img, title, startTime, endTime, servesCount, currentPrice, previousPrice }: ICard) => {
    return (
        <div className="w-full min-h-[30rem] capitalize">
            <div className="w-full rounded-xl">
                <img src={img} alt={title} className="w-full h-full object-cover rounded-xl" />
            </div>

            <div className="w-full text-start ml-2">
                <p className="mt-5 text-secondary text-xl lg:text-2xl font-semibold">{title}</p>

                <p className="my-3 text-slate-500 text-xl">Time: {startTime} - {endTime} minutes | serves: {servesCount}</p>

                <p className="mb-4 text-2xl">
                    <span className="text-primary-light font-semibold">${currentPrice}</span>
                    <span className="ml-2 text-slate-500">
                        <del>${previousPrice}</del>
                    </span>
                </p>

                <MainButton bg="primary-light" color="white" text="order now" addStyles="w-[10rem] lg:w-[11rem]" />
            </div>
        </div>
    );
};

export default Card;