import { edition } from "./rules/rule-types";
import setupRules, { playerCount } from "./rules/setup-rules";

export interface Grimoire {
    playerCount: playerCount;
    outsiders: number;
    minions: number;
    demon: number;
    townsfolk: number;
    bluffs: string[];
    edition: edition;
    townsquare: { name: string; role?: string }[];
}

const testData = [
    {
        name: "Leah",
        role: "drunk",
    },
    {
        name: "Will",
        role: "mayor",
    },
    {
        name: "Justin",
        role: "chef",
    },
    {
        name: "Mart",
        role: "slayer",
    },
    {
        name: "Tom",
        role: "ravenkeeper",
    },
    {
        name: "Dave",
        role: "fortuneteller",
    },
    {
        name: "Debs",
        role: "washerwoman",
    },
    {
        name: "Bertie",
        role: "saint",
    },
    {
        name: "Kyle",
        role: "empath",
    },
    {
        name: "Lianne",
        role: "poisoner",
    },
    {
        name: "Ryan",
        role: "monk",
    },
    {
        name: "Alex",
        role: "scarletwoman",
    },
    {
        name: "Arif",
        role: "imp",
    },
    {
        name: "Jamie",
        role: "librarian",
    },
    {
        name: "Jams",
        role: "spy",
    },
];

export const generateStartingGrimoire = (): Grimoire => {
    const playerCount: playerCount = 15;
    return {
        playerCount,
        outsiders: setupRules.outsiders(playerCount),
        minions: setupRules.minions(playerCount),
        demon: setupRules.demon,
        townsfolk: setupRules.townsfolk(playerCount),
        edition: "tb",
        bluffs: [],
        townsquare: testData.map((player) => ({ name: player.name })),
    };
};

export const generateFullGrimoire = (): Grimoire => {
    const playerCount: playerCount = 15;
    return {
        playerCount,
        outsiders: setupRules.outsiders(playerCount),
        minions: setupRules.minions(playerCount),
        demon: setupRules.demon,
        townsfolk: setupRules.townsfolk(playerCount),
        bluffs: ["investigator", "soldier", "butler"],
        edition: "tb",
        townsquare: testData,
    };
};
