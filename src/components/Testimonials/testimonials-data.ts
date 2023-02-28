import GenerateId from "../../Utils/generate-id";

import ICardTestimonials from "./ICardTestimonials.interface";

import { Testimonials1, Testimonials2, Testimonials3, Testimonials4 } from '../../data/Photos';

const testimonialsData: Array<ICardTestimonials> = [
    {
        personName: "john doe",
        sentence: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit tempora animi aliquid. Quasi omnis libero excepturi beatae. Quod reprehenderit cum iusto.",
        personJob: "software engineer",
        imageURL: Testimonials1,
        imageAltText: "Person 1"
    },
    {
        personName: "smith owen",
        sentence: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit tempora animi aliquid.",
        personJob: "software engineer",
        imageURL: Testimonials2,
        imageAltText: "Person 2"
    },
    {
        personName: "lehman jane",
        sentence: "Libero excepturi beatae. quod reprehenderit cum iusto recusandae accusantium consectetur tempora omnis libero elit.",
        personJob: "software engineer",
        imageURL: Testimonials3,
        imageAltText: "Person 3"
    },
    {
        personName: "thomas jerry",
        sentence: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit tempora animi aliquid. Consectetur tempora omnis libero elit.",
        personJob: "UX/UX designer",
        imageURL: Testimonials4,
        imageAltText: "Person 4"
    },
];

(() => GenerateId(testimonialsData))();

export default testimonialsData;