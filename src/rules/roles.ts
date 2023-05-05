import { actionType, edition, infoType, team } from "./rule-types";

interface Role {
    id: string;
    name: string;
    edition: edition;
    team: team;
    actionType: actionType;
    infoType?: infoType[];
}

export interface Roles {
    [key: string]: Role;
}

const roles: Roles = {
    washerwoman: {
        id: "washerwoman",
        name: "Washerwoman",
        edition: "tb",
        team: "townsfolk",
        actionType: "startKnowing",
        infoType: ["twoPlayersOneRole", "toldTwoPlayers", "findsTownsfolk"],
    },
    librarian: {
        id: "librarian",
        name: "Librarian",
        edition: "tb",
        team: "townsfolk",
        actionType: "startKnowing",
        infoType: [
            "twoPlayersOneRole",
            "toldTwoPlayers",
            "receivesANumber",
            "findsOutsiders",
        ],
    },
    investigator: {
        id: "investigator",
        name: "Investigator",
        edition: "tb",
        team: "townsfolk",
        actionType: "startKnowing",
        infoType: ["twoPlayersOneRole", "toldTwoPlayers", "findsMinions"],
    },
    chef: {
        id: "chef",
        name: "Chef",
        edition: "tb",
        team: "townsfolk",
        actionType: "startKnowing",
        infoType: ["receivesANumber", "evilPairs", "findsEvil"],
    },
    empath: {
        id: "empath",
        name: "Empath",
        edition: "tb",
        team: "townsfolk",
        actionType: "eachNight",
        infoType: ["receivesANumber", "findsEvil", "findsGood"],
    },
    fortuneteller: {
        id: "fortuneteller",
        name: "Fortune Teller",
        edition: "tb",
        team: "townsfolk",
        actionType: "eachNight",
        infoType: ["findsDemons", "pickTwo"],
    },
    undertaker: {
        id: "undertaker",
        name: "Undertaker",
        edition: "tb",
        team: "townsfolk",
        actionType: "eachNight*",
    },
    monk: {
        id: "monk",
        name: "Monk",
        edition: "tb",
        team: "townsfolk",
        actionType: "eachNight*",
    },
    ravenkeeper: {
        id: "ravenkeeper",
        name: "Ravenkeeper",
        edition: "tb",
        team: "townsfolk",
        actionType: "onDeath",
    },
    virgin: {
        id: "virgin",
        name: "Virgin",
        edition: "tb",
        team: "townsfolk",
        actionType: "oncePerGame",
    },
    slayer: {
        id: "slayer",
        name: "Slayer",
        edition: "tb",
        team: "townsfolk",
        actionType: "oncePerGame",
    },
    soldier: {
        id: "soldier",
        name: "Soldier",
        edition: "tb",
        team: "townsfolk",
        actionType: "passive",
    },
    mayor: {
        id: "mayor",
        name: "Mayor",
        edition: "tb",
        team: "townsfolk",
        actionType: "passive",
    },
    butler: {
        id: "butler",
        name: "Butler",
        edition: "tb",
        team: "outsider",
        actionType: "eachNight",
    },
    drunk: {
        id: "drunk",
        name: "Drunk",
        edition: "tb",
        team: "outsider",
        actionType: "passive",
    },
    recluse: {
        id: "recluse",
        name: "Recluse",
        edition: "tb",
        team: "outsider",
        actionType: "passive",
    },
    saint: {
        id: "saint",
        name: "Saint",
        edition: "tb",
        team: "outsider",
        actionType: "passive",
    },
    poisoner: {
        id: "poisoner",
        name: "Poisoner",
        edition: "tb",
        team: "minion",
        actionType: "eachNight",
    },
    spy: {
        id: "spy",
        name: "Spy",
        edition: "tb",
        team: "minion",
        actionType: "eachNight",
    },
    scarletwoman: {
        id: "scarletwoman",
        name: "Scarlet Woman",
        edition: "tb",
        team: "minion",
        actionType: "passive",
    },
    baron: {
        id: "baron",
        name: "Baron",
        edition: "tb",
        team: "minion",
        actionType: "passive",
    },
    imp: {
        id: "imp",
        name: "Imp",
        edition: "tb",
        team: "demon",
        actionType: "eachNight*",
    },
};

const getRolesByEdition = (edition: edition) =>
    Object.fromEntries(
        Object.entries(roles).filter(([_, role]) => role.edition === edition)
    );

export const rolesByEdition = { tb: getRolesByEdition("tb") };
export const getRolesByType =
    (filteredRoles: Roles) =>
    (type: actionType, reverse = false) =>
        Object.entries(filteredRoles)
            .filter(([_, role]) => {
                const matches = role.actionType === type;
                return reverse ? !matches : matches;
            })
            .map(([id]) => id)
            .sort();

export const getRoleName = (role: string) => roles[role].name || "Unknown";

export default roles;
