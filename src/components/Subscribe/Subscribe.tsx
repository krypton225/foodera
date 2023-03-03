import FormSubscribe from "./FormSubscribe";

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

                <FormSubscribe />
            </div>
        </section>
    );
};

export default Subscribe;