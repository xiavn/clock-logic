import prettyPrint from "../rules/pretty-print";
import {
    Roles,
    getRoleName,
    getRolesByType,
    rolesByEdition,
} from "../rules/roles";
import { actionType, edition } from "../rules/rule-types";
import { StatementResult } from "./statement-types";
import { pickOne } from "../rules/utils";

const firstNightKnowTwo =
    (editionRoles: Roles) =>
    (player: string, know1: string, know2: string): StatementResult => {
        const { possibleRoles, notRoles } = Object.entries(editionRoles).reduce(
            (acc, curr) => {
                const role = curr[1];
                if (
                    role.actionType === "startKnowing" &&
                    role.infoType?.includes("toldTwoPlayers")
                ) {
                    return {
                        ...acc,
                        possibleRoles: acc.possibleRoles.concat(role.id),
                    };
                }
                return {
                    ...acc,
                    notRoles: acc.notRoles.concat(role.id),
                };
            },
            { possibleRoles: [], notRoles: [] } as {
                possibleRoles: string[];
                notRoles: string[];
            }
        );
        return {
            id: "firstNightKnowTwo",
            text: `${player} is a ${pickOne(
                prettyPrint.actionType.startKnowing
            )} who has ${know1} & ${know2} as pings`,
            information: {
                playerIsRole: [
                    {
                        player,
                        possibleRoles,
                        notRoles,
                    },
                ],
            },
        };
    };

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
        firstNightKnowTwoAndARole: (
            player: string,
            know1: string,
            know2: string,
            role: string,
            players: string[]
        ): StatementResult => {
            const firstNightKnowTwoInfo = firstNightKnowTwo(editionRoles)(
                player,
                know1,
                know2
            );
            const remainingPlayers = players
                .filter(
                    (player) =>
                        player !== player ||
                        player !== know1 ||
                        player !== know2
                )
                .map((player) => ({
                    player,
                    notRoles: [role],
                }));
            return {
                id: "firstNightKnow2AndARole",
                text: `${firstNightKnowTwoInfo.text}, one of whom is the ${editionRoles[role].name}`,
                information: {
                    ...firstNightKnowTwoInfo,
                    playerIsRole:
                        firstNightKnowTwoInfo.information.playerIsRole?.concat(
                            {
                                player: know1,
                                possibleRoles: [role],
                            },
                            {
                                player: know2,
                                possibleRoles: [role],
                            },
                            ...remainingPlayers
                        ),
                },
            };
        },
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
