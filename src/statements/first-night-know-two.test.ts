import { rolesByEdition } from "src/rules/roles";
import { firstNightKnowTwo } from "./first-night-know-two";

const editionRoles = rolesByEdition.tb;

// const players = ["Ben", "Dave", "Leah", "Kali", "Eevee"];

const expectedFirstNightRoles = ["washerwoman", "investigator", "librarian"];

const otherRoles = Object.entries(rolesByEdition)
    .filter(([role]) => !expectedFirstNightRoles.includes(role))
    .map(([role]) => role);

describe("first night know two statements", () => {
    describe("first night know two", () => {
        it("takes a player and two additional players and returns their possible roles", () => {
            expect(
                firstNightKnowTwo(editionRoles)("Ben", "Leah", "Kali")
                    .information
            ).toBe({
                playerIsRole: {
                    player: "Ben",
                    possibleRoles: expectedFirstNightRoles,
                    notRoles: otherRoles,
                },
            });
        });
    });
});
