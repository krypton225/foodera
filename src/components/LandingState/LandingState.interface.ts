import ISetID from "../../Utils/interfaces/ISetID.interface";

interface ILandingState extends ISetID {
    counter: number;
    title: string;
}

export default ILandingState;