import ISetID from "../../../Utils/interfaces/ISetID.interface";

interface ICard extends ISetID {
    img: string;
    title: string;
    startTime: number;
    endTime: number;
    servesCount: number;
    currentPrice: number;
    previousPrice: number;
}

export default ICard;