import { actionType, edition, team } from "./rule-types";

interface Role {
    id: string;
    name: string;
    edition: edition;
    team: team;
    actionType: actionType;
}

interface Roles {
    [key: string]: Role;
}

const roles: Roles = {
    washerwoman: {
        id: "washerwoman",
        name: "Washerwoman",
        edition: "tb",
        team: "townsfolk",
        actionType: "startKnowing",
    },
    librarian: {
        id: "librarian",
        name: "Librarian",
        edition: "tb",
        team: "townsfolk",
        actionType: "startKnowing",
    },
    investigator: {
        id: "investigator",
        name: "Investigator",
        edition: "tb",
        team: "townsfolk",
        actionType: "startKnowing",
    },
    chef: {
        id: "chef",
        name: "Chef",
        edition: "tb",
        team: "townsfolk",
        actionType: "startKnowing",
    },
    empath: {
        id: "empath",
        name: "Empath",
        edition: "tb",
        team: "townsfolk",
        actionType: "startKnowing",
    },
    fortuneTeller: {
        id: "fortuneteller",
        name: "Fortune Teller",
        edition: "tb",
        team: "townsfolk",
        actionType: "eachNight",
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

export default roles;
