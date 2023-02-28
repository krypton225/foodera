import ITitleSection from "./ITitleSection.interface";

const TitleSection = ({ text = "", color = "primary-dark", fontSize = 4 }: ITitleSection) => {
    return (
        <p className={`w-full mx-auto text-center capitalize text-${color} font-medium text-[${fontSize}]`}>
            {text}
        </p>
    );
};

export default TitleSection;