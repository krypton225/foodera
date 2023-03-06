import ISetID from "../../Utils/interfaces/ISetID.interface";

interface IQuestion extends ISetID {
    questionText: string;
    answer: string;
}

export default IQuestion;