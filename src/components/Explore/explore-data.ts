import GenerateId from "../../Utils/generate-id";

import IExploreData from "./IExploreData.interface";

import { Food1, Food2, Food3 } from "../../data/Photos";

const exploreDataItems: Array<IExploreData> = [
    {
        imgURL: Food1,
        title: "rainbow vegetable sandwich",
        time: {
            start: 15,
            end: 20
        },
        servesCount: 1,
        currentPrice: 10.50,
        previousPrice: 11.70
    },
    {
        imgURL: Food2,
        title: "vegetarian burger",
        time: {
            start: 30,
            end: 45
        },
        servesCount: 1,
        currentPrice: 9.20,
        previousPrice: 10.50
    },
    {
        imgURL: Food3,
        title: "raspberry stuffed french toast",
        time: {
            start: 10,
            end: 15
        },
        servesCount: 1,
        currentPrice: 12.50,
        previousPrice: 13.20
    },
];

(() => GenerateId(exploreDataItems))();

export default exploreDataItems;