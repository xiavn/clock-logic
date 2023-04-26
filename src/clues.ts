import statements from "./rules/statements";

export const generateClues = () => {
    const tbStatements = statements("tb");
    return [
        tbStatements.actionType("Jamie", "startKnowing"),
        tbStatements.demonBluffs(["investigator", "soldier", "butler"]),
    ];
};
