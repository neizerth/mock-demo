import { CatAPI } from "./CatAPI";

export const getCatOwner = (callback) => CatAPI.get(cats => {
    const [cat] = cats;
    
    callback(cat.owner);
});