
import sampleCats from "../cats";

jest.mock('../CatAPI');

import { CatAPI } from "../CatAPI";
import { getCatOwner } from "../getCatOwner";

CatAPI.get.mockImplementation((onload) => onload(sampleCats));

describe('CatAPI simple test', () => {
    test('get cats', done => {

        CatAPI.get((data) => {

            console.log(data);
            expect(data).toBeDefined()
            done();
        });
    });

    test('get cat owner', done => {
        getCatOwner((owner) => {

            expect(owner).toBe('Ivan');

            done();
        });
    });
});