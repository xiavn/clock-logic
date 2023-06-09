type playerIsRoleInformation = {
    player: string;
    possibleRoles?: string[];
    notRoles?: string[];
    exactRole?: string;
};

type informationTypes = playerIsRoleInformation;

export interface StatementResult {
    id: string;
    text: string;
    information: {
        playerIsRole?: playerIsRoleInformation[];
        bluffs?: [string, string, string];
    };
}
