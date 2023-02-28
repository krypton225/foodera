import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { TitleSection } from "../main";

import { Testimonials1, Testimonials2, Testimonials3, Testimonials4 } from '../../data/Photos';

const Testimonials = () => {
    return (
        <section className="sec-padding-12 bg-primary-light">
            <TitleSection text="testimonials" fontSize={45} isWhite={true} />

            <div className="w-full rounded-xl container mt-32 flex justify-center items-center">
                <Swiper spaceBetween={50} slidesPerView={1} onSwiper={(swiper) => console.log(swiper)} autoplay={true} loop={true} speed={600} >
                    <SwiperSlide tag='div' className='w-full min-h-[30rem] h-[30rem] relative py-6 rounded-xl text-center bg-custom-white'>
                        <div className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <div className="w-32 h-32 mb-12 rounded-full mx-auto">
                                <img src={Testimonials1} alt="Hello" className='w-full h-full object-cover rounded-full' />
                            </div>

                            <div className="w-[70%] mx-auto text-2xl text-slate-500 leading-loose">
                                <p className="w-full">
                                    " Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                    Sit tempora animi aliquid. Quasi omnis libero excepturi beatae.
                                    quod reprehenderit cum iusto recusandae accusantium consectetur tempora omnis libero elit. "
                                </p>

                                <p className='mt-6 text-center text-primary-light text-xl font-semibold capitalize'>johnathan doe - UX designer</p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide tag='div' className='w-full min-h-[30rem] h-[30rem] relative py-6 rounded-xl text-center bg-custom-white'>
                        <div className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <div className="w-32 h-32 mb-12 rounded-full mx-auto">
                                <img src={Testimonials2} alt="Hello" className='w-full h-full object-cover rounded-full' />
                            </div>

                            <div className="w-[70%] mx-auto text-2xl text-slate-500 leading-loose">
                                <p className="w-full">
                                    " Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                    Sit tempora animi aliquid. Quasi omnis libero excepturi beatae.
                                    quod reprehenderit cum iusto recusandae accusantium consectetur tempora omnis libero elit. "
                                </p>

                                <p className='mt-6 text-center text-primary-light text-xl font-semibold capitalize'>johnathan doe - UX designer</p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide tag='div' className='w-full min-h-[30rem] h-[30rem] relative py-6 rounded-xl text-center bg-custom-white'>
                        <div className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <div className="w-32 h-32 mb-12 rounded-full mx-auto">
                                <img src={Testimonials3} alt="Hello" className='w-full h-full object-cover rounded-full' />
                            </div>

                            <div className="w-[70%] mx-auto text-2xl text-slate-500 leading-loose">
                                <p className="w-full">
                                    " Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                    Sit tempora animi aliquid. Quasi omnis libero excepturi beatae.
                                    quod reprehenderit cum iusto recusandae accusantium consectetur tempora omnis libero elit. "
                                </p>

                                <p className='mt-6 text-center text-primary-light text-xl font-semibold capitalize'>johnathan doe - UX designer</p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide tag='div' className='w-full min-h-[30rem] h-[30rem] relative py-6 rounded-xl text-center bg-custom-white'>
                        <div className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <div className="w-32 h-32 mb-12 rounded-full mx-auto">
                                <img src={Testimonials4} alt="Hello" className='w-full h-full object-cover rounded-full' />
                            </div>

                            <div className="w-[70%] mx-auto text-2xl text-slate-500 leading-loose">
                                <p className="w-full">
                                    " Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                    Sit tempora animi aliquid. Quasi omnis libero excepturi beatae.
                                    quod reprehenderit cum iusto recusandae accusantium consectetur tempora omnis libero elit. "
                                </p>

                                <p className='mt-6 text-center text-primary-light text-xl font-semibold capitalize'>johnathan doe - UX designer</p>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
        </section>
    );
};

export default Testimonials;