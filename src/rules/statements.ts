import { getRoleName } from "./roles";
import { actionType } from "./rule-types";

const statements = {
    actionType: (player: string, typeOfAction: actionType) => ({
        id: "actionType",
        text: `${player} is a ${typeOfAction} role.`,
        information: {
            playerIsRole: { player, actionType: [typeOfAction] },
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
};

export default statements;
