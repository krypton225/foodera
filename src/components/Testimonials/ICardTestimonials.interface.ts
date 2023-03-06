import ISetID from "../../Utils/interfaces/ISetID.interface";

interface ICardTestimonials extends ISetID {
    imageURL: string;
    imageAltText: string;
    sentence: string;
    personName: string;
    personJob: string;
}

export default ICardTestimonials;