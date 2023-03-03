import GenerateId from "../../Utils/generate-id";

import ILinks from "./ILinks.interface";

const linksItems: Array<ILinks> = [
    { text: "register", url: "#" },
    { text: "forum", url: "#" },
    { text: "affiliate", url: "#" },
    { text: "FAQ", url: "#" }
];

(() => GenerateId(linksItems))();

export default linksItems;