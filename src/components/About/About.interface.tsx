import ISetID from "../../Utils/interfaces/ISetID.interface";

interface IAbout extends ISetID {
    image: {
        url: string,
        altText: string;
    };
    title: string;
    description: string;
    listItems?: Array<{ id?: number; textItem: string; }>;
    btnText: string;
    isImageAtLeft: boolean;
}

export default IAbout;