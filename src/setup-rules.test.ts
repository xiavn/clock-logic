import setupRules from "./setup-rules";

describe("setupRules", () => {
    describe();
    it("should return 0 when playerCount is 7, 10 or 13.", () => {
        expect(setupRules.outsiders(7)).toBe(0);
        expect(setupRules.outsiders(10)).toBe(0);
        expect(setupRules.outsiders(13)).toBe(0);
    });
    "minions takes playerCount and returns minion number",
        () => {
            expect(setupRules.outsiders(7)).toBe(0);
        };
});
