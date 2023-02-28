import IMainButton from './MainButton.interface';

const MainButton = ({ text, url = "", color, bg, iconClasses = "", addStyles = "" }: IMainButton) => {
    return (
        <a href={`#${url}`} className={`min-w-[6rem] relative flex justify-between items-center py-4 px-8 lg:px-10 font-semibold capitalize text-${color} bg-${bg} transition-all duration-[0.2s]
        before:content-[""] before:w-full before:h-full before:absolute before:top-0 before:left-0 before:border-0 before:border-primary-light 
        before:transition-all before:duration-[0.1s] ${bg === "white" ? "shadow-lg hover:before:border-2 hover:text-primary-light" : ""} ${addStyles}`}>
            <span className='flex justify-center items-center text-center'>{text}</span>
            <i className={`${iconClasses} ml-1`}></i>
        </a>
    );
};

export default MainButton;