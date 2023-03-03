import { MainButton } from "../main";

import aboutData from "./about-data";

const About = () => {
    return (
        <section className="w-full sec-padding-12" id="about">
            <div className="w-full container grid grid-cols-1 gap-y-44">
                {
                    aboutData.map(({ id, title, description, listItems, btnText, isImageAtLeft, image: { url, altText } }) => (
                        <div key={id} className={`w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`}>
                            <div className={`w-full h-auto rounded-lg ${isImageAtLeft ? "-order-1" : "order-1"}`}>
                                <img src={url} alt={altText} className="w-full h-full rounded-lg object-cover" />
                            </div>

                            <div className="w-[full]">
                                <p className="text-secondary leading-tight text-5xl font-medium">{title}</p>

                                <p className="my-10 text-xl text-slate-600">{description}</p>

                                {
                                    listItems ? (
                                        <ul className="mb-8">
                                            {
                                                listItems.map(({ id, textItem }) => (
                                                    <li key={id} className="relative mb-4 ml-[2.25rem] text-xl text-slate-600">
                                                        {textItem}
                                                        <i className="icon-ok absolute top-0 -left-9 text-2xl text-primary-light"></i>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    ) : ""
                                }

                                <MainButton bg="primary-light" color="white" text={btnText} addStyles="w-[10rem] lg:w-[11rem]" />
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    );
};

export default About;
