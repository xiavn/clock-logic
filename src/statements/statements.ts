import prettyPrint from "../formatting/pretty-print";
import {
    Roles,
    getRoleName,
    getRolesByType,
    rolesByEdition,
} from "../rules/roles";
import { actionType, edition } from "../rules/rule-types";
import { StatementResult } from "./statement-types";
import { pickOne } from "../formatting/utils";
import {
    firstNightKnowTwo,
    firstNightKnowTwoAndARole,
} from "./first-night-know-two";

const statements = (scriptEdition: edition) => {
    const editionRoles = rolesByEdition[scriptEdition];
    const getRolesByTypeForEdition = getRolesByType(editionRoles);
    return {
        actionType: (
            player: string,
            typeOfAction: actionType
        ): StatementResult => ({
            id: "actionType",
            text: `${player} is a ${pickOne(
                prettyPrint.actionType[typeOfAction]
            )} role`,
            information: {
                playerIsRole: [
                    {
                        player,
                        possibleRoles: getRolesByTypeForEdition(typeOfAction),
                        notRoles: getRolesByTypeForEdition(typeOfAction, true),
                    },
                ],
            },
        }),
        firstNightKnowTwo: firstNightKnowTwo(editionRoles),
        firstNightKnowTwoAndARole: firstNightKnowTwoAndARole(editionRoles),
        demonBluffs: (
            bluffRoles: [string, string, string]
        ): StatementResult => ({
            id: "demonBluffs",
            text: `The demon bluffs are ${getRoleName(
                bluffRoles[0]
            )}, ${getRoleName(bluffRoles[1])} and ${getRoleName(
                bluffRoles[2]
            )}`,
            information: {
                bluffs: bluffRoles,
            },
        }),
        actionInfo: {
            id: "actionInfo",
        },
    };
};

export default statements;
