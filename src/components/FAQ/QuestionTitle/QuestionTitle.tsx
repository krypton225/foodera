import IQuestionTitle from "./IQuestionTitle.interface";

const QuestionTitle = ({ text = "", color = "" }: IQuestionTitle) => {
    return (
        <p className={`w-full relative ml-0 lg:ml-5 text-xl md:text-lg lg:text-[1.35rem] font-semibold text-${color} before:content-none
        lg:before:content-['~'] before:w-2 before:h-2 before:flex before:justify-center before:items-center before:scale-150 
        before:absolute before:-left-4 before:lg:-left-5 before:top-1/2  before:-translate-y-1/2 
        before:-rotate-12 before:text-primary-light before:font-normal`}>
            {text.charAt(0).toUpperCase()}{text.slice(1)}?
        </p>
    );
};

export default QuestionTitle;