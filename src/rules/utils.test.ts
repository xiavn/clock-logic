import { pickOne } from "../formatting/utils";

describe("utils", () => {
    describe("pickOne", () => {
        it.each([
            [1, 4, 6, 7, 9],
            [5, 70, 35, 60],
            [1, 2, 3, 4, 5],
        ])("should return one of [%i, %i, %i, %i, %i]", (...args) =>
            expect(args).toContain(pickOne(args))
        );
    });
});
