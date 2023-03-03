import GenerateId from "../../Utils/generate-id";

import ISocial from "./ISocial.interface";

const socialDataItems: Array<ISocial> = [
    { iconClassName: "icon-facebook", url: "https://www.facebook.com", titleText: "facebook" },
    { iconClassName: "icon-twitter", url: "https://www.twitter.com", titleText: "twitter" },
    { iconClassName: "icon-youtube", url: "https://www.youtube.com", titleText: "youtube" },
    { iconClassName: "icon-dribbble", url: "https://www.dribbble.com", titleText: "dribbble" },
    { iconClassName: "icon-linkedin", url: "https://www.linkedin.com", titleText: "linkedin" },
    { iconClassName: "icon-instagram", url: "https://www.instagram.com", titleText: "instagram" },
];

(() => GenerateId(socialDataItems))();

export default socialDataItems;