import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { TitleSection } from "../main";

import testimonialsData from './testimonials-data';

const Testimonials = () => {
    return (
        <section className="sec-padding-12 bg-primary-light">
            <TitleSection text="testimonials" fontSize={45} isWhite={true} />

            <div className="w-full rounded-xl container mt-32 flex justify-center items-center">
                <Swiper spaceBetween={50} slidesPerView={1} autoplay={true} loop={true} speed={600} >
                    {
                        testimonialsData.map(({ id, sentence, personName, personJob, imageURL, imageAltText }) => (
                            <SwiperSlide key={id} tag='div' className='w-full min-h-[32rem] relative py-16 rounded-xl text-center bg-custom-white'>
                                <div className="w-full h-full mt-5 flex flex-col justify-center items-center">
                                    <div className="w-32 h-32 mb-12 rounded-full mx-auto">
                                        <img src={imageURL} alt={imageAltText} className='w-full h-full object-cover rounded-full' />
                                    </div>

                                    <div className="w-[85%] lg:w-[70%] mx-auto text-slate-500 leading-tight lg:leading-loose">
                                        <p className="w-full text-xl lg:text-2xl">" {sentence} "</p>

                                        <p className='mt-6 text-center text-primary-light text-lg lg:text-xl font-semibold capitalize'>{personName} - {personJob}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonials;