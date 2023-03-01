import GenerateId from "../../Utils/generate-id";

import IQuestion from "./IQuestion.interface";

const faqData: Array<IQuestion> = [
    {
        questionText: "is Foodera Bread really baked fresh each day",
        answer: `Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
            Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.`
    },
    {
        questionText: "do you bake breads containing animal fats or products",
        answer: `Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
            Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.`
    },
    {
        questionText: "can I order your products online",
        answer: `Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
            Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.`
    },
    {
        questionText: "when are you opening a shop near me",
        answer: `Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
            Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.`
    },
];

(() => GenerateId(faqData))();

export default faqData;