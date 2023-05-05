import { Grimoire } from "./grimoire";
import { StatementResult } from "./statements/statement-types";

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
        playerIsRole.forEach((player) => {
            const grimoirePlayer = workingGrimoire.townsquare[player.player];
            if (!grimoirePlayer.known) {
                grimoirePlayer.known = {
                    possibleRoles: [],
                    notRoles: [],
                };
            }
            grimoirePlayer.known.possibleRoles =
                grimoirePlayer.known.possibleRoles.concat(
                    player.possibleRoles
                ) || player.possibleRoles;
            grimoirePlayer.known.notRoles =
                grimoirePlayer.known.possibleRoles.concat(player.notRoles) ||
                player.notRoles;
        });
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
    console.log(workingGrimoire.townsquare);
    return workingGrimoire;
};
