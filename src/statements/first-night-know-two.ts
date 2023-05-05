import prettyPrint from "src/formatting/pretty-print";
import { pickOne } from "src/formatting/utils";
import { Roles } from "src/rules/roles";
import { StatementResult } from "./statement-types";

export const firstNightKnowTwo =
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

export const firstNightKnowTwoAndARole =
    (editionRoles: Roles) =>
    (
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
                    player !== player || player !== know1 || player !== know2
            )
            .map((player) => ({
                player,
                notRoles: [role],
            }));
        return {
            id: "firstNightKnowTwoAndARole",
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
    };
