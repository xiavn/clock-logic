import { getRoleName, getRolesByType, rolesByEdition } from "./roles";
import { actionType, edition } from "./rule-types";
import { StatementResult } from "./statement-types";

const statements = (scriptEdition: edition) => {
    const editionRoles = rolesByEdition[scriptEdition];
    const getRolesByTypeForEdition = getRolesByType(editionRoles);
    return {
        actionType: (
            player: string,
            typeOfAction: actionType
        ): StatementResult => ({
            id: "actionType",
            text: `${player} is a ${typeOfAction} role.`,
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
