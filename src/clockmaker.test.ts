import { solveGame } from "./clockmaker";
import { generateClues } from "./clues";
import { generateFullGrimoire, generateStartingGrimoire } from "./grimoire";

describe("clockmaker", () => {
    describe("solveGame", () => {
        it("should return a grimoire that has the same players assigned the same roles as fullGrimoire", () => {
            const fullGrimoire = generateFullGrimoire();
            const actualGrimoire = solveGame(
                generateStartingGrimoire(),
                generateClues()
            );
            expect(actualGrimoire).toMatchObject(fullGrimoire);
        });
    });
});
