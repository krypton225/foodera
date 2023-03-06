import ISetID from "../../Utils/interfaces/ISetID.interface";

interface ListItem extends ISetID {
    linkText: string;
    linkURL: string;
    isButton: boolean;
}

export default ListItem;