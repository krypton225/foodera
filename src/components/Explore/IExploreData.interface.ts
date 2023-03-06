import ISetID from "../../Utils/interfaces/ISetID.interface";

interface IExploreData extends ISetID {
    imgURL: string;
    title: string;
    time: {
        start: number;
        end: number;
    };
    servesCount: number;
    currentPrice: number;
    previousPrice: number;
}

export default IExploreData;