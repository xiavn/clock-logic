import { Grimoire } from "./grimoire";
import { StatementResult } from "./rules/statement-types";

const processClue = (
    clue: StatementResult,
    currentGrimoire: Grimoire
): Grimoire => {
    const workingGrimoire = { ...currentGrimoire };
    if (clue.information.bluffs) {
        workingGrimoire.bluffs = clue.information.bluffs;
    }
    if (clue.information.playerIsRole) {
        const playerIsRole = clue.information.playerIsRole;
        playerIsRole.forEach((player) =>
            workingGrimoire.townsquare[
                player.player
            ].known?.possibleRoles.concat(player.possibleRoles)
        );
    }
    return workingGrimoire;
};

export const solveGame = (
    openingGrimoire: Grimoire,
    clues: StatementResult[]
) => {
    const workingGrimoire = clues.reduce((acc, curr) => {
        return processClue(curr, acc);
    }, openingGrimoire);
    return workingGrimoire;
};
