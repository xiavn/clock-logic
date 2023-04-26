import { actionType } from "./rule-types";

type playerIsRoleInformation = {
    player: string;
    possibleRoles: string[];
};

type informationTypes = playerIsRoleInformation;

interface StatementResult {
    id: string;
    text: string;
    information: {
        playerIsRole?: playerIsRoleInformation[];
        bluffs?: [string, string, string];
    };
}
