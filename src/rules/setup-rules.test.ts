import setupRules, { playerCount } from "./setup-rules";

const playerCounts: playerCount[] = [7, 8, 9, 10, 11, 12, 13, 14, 15];

type playerCountTable = { pc: playerCount; e: number }[];

const outsiderPlayerCounts: playerCountTable = playerCounts.map((num, i) => ({
    pc: num,
    e: i % 3,
}));

const minionPlayerCounts: playerCountTable = playerCounts.map((num, i) => ({
    pc: num,
    e: Math.floor(i / 3) + 1,
}));

const townsfolkPlayerCounts: playerCountTable = playerCounts.map((num, i) => ({
    pc: num,
    e: Math.floor(i / 3) + 5,
}));

describe("setupRules", () => {
    describe("outsiders", () => {
        it.each(outsiderPlayerCounts)(
            "should return $e when playerCount is $pc.",
            ({ pc, e }) => {
                expect(setupRules.outsiders(pc)).toBe(e);
            }
        );
    });
    describe("minions", () => {
        it.each(minionPlayerCounts)(
            "should return $e when playerCount is $pc.",
            ({ pc, e }) => {
                expect(setupRules.minions(pc)).toBe(e);
            }
        );
    });
    describe("townsfolk", () => {
        it.each(townsfolkPlayerCounts)(
            "should return $e when playerCount is $pc",
            ({ pc, e }) => {
                expect(setupRules.townsfolk(pc)).toBe(e);
            }
        );
    });
});
