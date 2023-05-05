import statements from "./statements/statements";
import testData from "./test-data";

export const generateClues = () => {
    const tbStatements = statements("tb");
    return [
        tbStatements.firstNightKnowTwoAndARole(
            "Jamie",
            "Bertie",
            "Alex",
            "scarletwoman",
            testData.map((data) => data.name)
        ),
        tbStatements.demonBluffs(["investigator", "soldier", "butler"]),
    ];
};
