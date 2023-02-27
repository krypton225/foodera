import GenerateId from "../../Utils/generate-id";

import ListItem from "./ListItem.interface";

const listDataItems: Array<ListItem> = [
    { linkText: "home", linkURL: "#", isButton: false },
    { linkText: "about", linkURL: "#about", isButton: false },
    { linkText: "explore", linkURL: "#explore", isButton: false },
    { linkText: "reviews", linkURL: "#reviews", isButton: false },
    { linkText: "faq", linkURL: "#faq", isButton: false },
    { linkText: "1800789123", linkURL: "tel:1800789123", isButton: true },
];

(() => GenerateId(listDataItems))();

export default listDataItems;