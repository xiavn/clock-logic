import { getRoleName, getRolesByType, rolesByEdition } from "./roles";
import { actionType, edition } from "./rule-types";

const statements = (scriptEdition: edition) => ({
    actionType: (player: string, typeOfAction: actionType) => ({
        id: "actionType",
        text: `${player} is a ${typeOfAction} role.`,
        information: {
            playerIsRole: [
                {
                    player,
                    possibleRoles: getRolesByType(
                        typeOfAction,
                        rolesByEdition[scriptEdition]
                    ),
                },
            ],
        },
    }),
    demonBluffs: (bluffRoles: [string, string, string]) => ({
        id: "demonBluffs",
        text: `The demon bluffs are ${getRoleName(
            bluffRoles[0]
        )}, ${getRoleName(bluffRoles[1])} and ${getRoleName(bluffRoles[2])}`,
        information: {
            bluffs: bluffRoles,
        },
    }),
    actionInfo: {
        id: "actionInfo",
    },
});

export default statements;
