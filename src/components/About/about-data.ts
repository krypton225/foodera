import GenerateId from "../../Utils/generate-id";

import IAbout from "./About.interface";

import { Features1, Features2 } from "../../data/Photos";

const aboutData: Array<IAbout> = [
    {
        title: "We pride ourselves on making real food from the best ingredients.",
        image: {
            url: Features1,
            altText: "Feature 1"
        },
        isImageAtLeft: true,
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit, eius dolorum recusandae reiciendis architecto soluta veniam iure doloremque nostrum quos exercitationem ipsam?",
        btnText: "learn more"
    },
    {
        title: "We make everything by hand with the best possible ingredients.",
        image: {
            url: Features2,
            altText: "Feature 2"
        },
        isImageAtLeft: false,
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit, eius dolorum recusandae reiciendis architecto soluta veniam iure doloremque nostrum quos exercitationem ipsam?",
        listItems: [
            { textItem: "Eius dolorum recusandae reiciendis architecto soluta." },
            { textItem: "Soluta eius dolorum recusandae architecto." },
            { textItem: "Rrecusandae dolorum architecto soluta eius." },
        ],
        btnText: "learn more"
    }
];

(() => {
    GenerateId(aboutData);

    for (let i = 0; i < aboutData.length; i++) {
        if (aboutData[i].listItems !== undefined) {
            GenerateId(aboutData[i].listItems);
        }
    }
})();

export default aboutData;