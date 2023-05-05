import { edition } from "./rules/rule-types";
import setupRules, { playerCount } from "./rules/setup-rules";
import testData from "./test-data";

interface TownsquarePlayer {
    name: string;
    role?: string;
    known?: {
        possibleRoles: string[];
        notRoles: string[];
    };
}

type townsquareType = { [key: string]: TownsquarePlayer };
export interface Grimoire {
    playerCount: playerCount;
    outsiders: number;
    minions: number;
    demon: number;
    townsfolk: number;
    bluffs: string[];
    edition: edition;
    townsquare: townsquareType;
    seatingOrder: string[];
}

export const generateStartingGrimoire = (): Grimoire => {
    const playerCount: playerCount = 15;
    const { townsquare, seatingOrder } = testData.reduce(
        (acc, { name }) => {
            return {
                townsquare: {
                    ...acc.townsquare,
                    [name]: {
                        name,
                    },
                },
                seatingOrder: acc.seatingOrder.concat(name),
            };
        },
        {
            townsquare: {},
            seatingOrder: [],
        } as { townsquare: townsquareType; seatingOrder: string[] }
    );
    return {
        playerCount,
        outsiders: setupRules.outsiders(playerCount),
        minions: setupRules.minions(playerCount),
        demon: setupRules.demon,
        townsfolk: setupRules.townsfolk(playerCount),
        edition: "tb",
        bluffs: [],
        townsquare,
        seatingOrder,
    };
};

export const generateFullGrimoire = (): Grimoire => {
    const playerCount: playerCount = 15;
    const { townsquare, seatingOrder } = testData.reduce(
        (acc, curr) => {
            return {
                townsquare: {
                    ...acc.townsquare,
                    [curr.name]: curr,
                },
                seatingOrder: acc.seatingOrder.concat(curr.name),
            };
        },
        {
            townsquare: {},
            seatingOrder: [],
        } as { townsquare: townsquareType; seatingOrder: string[] }
    );
    return {
        playerCount,
        outsiders: setupRules.outsiders(playerCount),
        minions: setupRules.minions(playerCount),
        demon: setupRules.demon,
        townsfolk: setupRules.townsfolk(playerCount),
        bluffs: ["investigator", "soldier", "butler"],
        edition: "tb",
        townsquare,
        seatingOrder,
    };
};
