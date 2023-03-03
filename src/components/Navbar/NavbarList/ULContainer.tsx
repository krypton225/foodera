import IULContainer from "./ULContainer.interface";

const ULContainer = ({ children, togglerValue }: IULContainer) => {
    return (
        <ul className={`max-[639px]:w-[95%] sm:w-[90%] md:w-[80%] h-auto py-8 absolute 
        ${togglerValue ? "top-32 opacity-100 visible" : "top-16 opacity-0 invisible"} max-[639px]:right-[2%] sm:right-[5%] md:right-[10%] 
        rounded-md flex flex-col justify-center items-center bg-primary-light lg:static lg:py-0 lg:bg-transparent lg:flex lg:flex-row lg:items-center 
        lg:justify-end lg:h-auto lg:visible lg:opacity-100 transition-all duration-[0.66s] z-[9999]`}>
            {children}
        </ul>
    );
};

export default ULContainer;