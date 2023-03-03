import { MainButton } from "../main";

const Subscribe = () => {
    return (
        <section className="w-full py-[8rem] text-center">
            <div className="container">
                <p className="w-full lg:w-[45%] mx-auto font-semibold text-secondary text-2xl lg:text-4xl">
                    Hurry up! Subscribe our newsletter and get 25% off
                </p>

                <p className="mt-12 mb-6 text-xl text-slate-500">
                    Limited time offer for this month. No credit card required.
                </p>

                <form className="w-full lg:w-[70%] md:mx-auto flex flex-col lg:flex-row justify-center items-center gap-8">
                    <input type="email" id="email" name="email" placeholder="email address here"
                        className="w-full lg:w-1/2 mt-6 lg:mt-0 py-5 px-3 border-4 border-slate-200 placeholder:capitalize placeholder:font-semibold 
                        placeholder:text-xl" />

                    <MainButton bg="primary-light" color="white" text="subscribe" addStyles="py-5" />
                </form>
            </div>
        </section>
    );
};

export default Subscribe;