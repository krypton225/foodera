interface IExploreData {
    id?: number;
    imgURL: string;
    title: string;
    time: {
        start: number;
        end: number;
    };
    servesCount: number;
    currentPrice: number;
    previousPrice: number;
}

export default IExploreData;