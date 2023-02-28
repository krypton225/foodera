import landingStateData from "./landing-state";

const LandingState = () => {
    return (
        <div className="w-full min-h-[11rem] mt-0 mx-auto py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 items-center bg-primary-light text-white">
            {landingStateData.map(({ id, counter, title }) => (
                <div key={id} className="w-full flex flex-col text-center text-white font-medium">
                    <span className="block mb-2 text-5xl">{counter}+</span>
                    <span className="uppercase text-base">{title}</span>
                </div>
            ))}
        </div>
    );
};

export default LandingState;