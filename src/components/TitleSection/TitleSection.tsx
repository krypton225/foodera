import ITitleSection from "./ITitleSection.interface";

const TitleSection = ({ text = "", fontSize = 28 }: ITitleSection) => {
    return (
        <p className={`w-full mx-auto text-center capitalize font-semibold text-secondary`} style={{ fontSize: fontSize }}>
            {text}
        </p>
    );
};

export default TitleSection;