import statements from "./rules/statements";

export const generateClues = () => {
    return [
        statements.actionType("Jamie", "startKnowing"),
        statements.demonBluffs(["investigator", "soldier", "butler"]),
    ];
};
