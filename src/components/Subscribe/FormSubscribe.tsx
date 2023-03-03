import { MainButton } from "../main";

const FormSubscribe = () => {
    return (
        <form className="w-full lg:w-[70%] md:mx-auto flex flex-col lg:flex-row justify-center items-center gap-8">
            <input type="email" id="email" name="email" placeholder="email address here"
                className="w-full lg:w-1/2 mt-6 lg:mt-0 py-5 px-3 border-4 border-slate-200 placeholder:capitalize placeholder:font-semibold 
                        placeholder:text-xl" />

            <MainButton bg="primary-light" color="white" text="subscribe" addStyles="py-5" />
        </form>
    );
};

export default FormSubscribe;