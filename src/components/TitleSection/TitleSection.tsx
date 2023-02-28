import ITitleSection from "./ITitleSection.interface";

const TitleSection = ({ text = "", fontSize = 28, isWhite = false }: ITitleSection) => {
    return (
        <p className={`w-full mx-auto text-center capitalize font-semibold ${isWhite ? "text-custom-white" : "text-secondary"}`} style={{ fontSize: fontSize }}>
            {text}
        </p>
    );
};

export default TitleSection;