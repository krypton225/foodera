import GenerateId from "../../Utils/generate-id";

import ILandingState from "./LandingState.interface";

const landingStateData: Array<ILandingState> = [
    { counter: 1287, title: "savings" },
    { counter: 5786, title: "photos" },
    { counter: 1440, title: "rockets" },
    { counter: 7110, title: "globes" },
];

(() => GenerateId(landingStateData))();

export default landingStateData;