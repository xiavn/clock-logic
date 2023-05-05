import { rolesByEdition } from "src/rules/roles";
import { firstNightKnowTwo } from "./first-night-know-two";

const editionRoles = rolesByEdition.tb;

// const players = ["Ben", "Dave", "Leah", "Kali", "Eevee"];

const expectedFirstNightRoles = [
    "washerwoman",
    "investigator",
    "librarian",
].sort();

const otherRoles = Object.entries(editionRoles)
    .filter(([role]) => !expectedFirstNightRoles.includes(role))
    .map(([role]) => role)
    .sort();

describe("first night know two statements", () => {
    describe("first night know two", () => {
        it("returns the possible roles for the player", () => {
            const actual = firstNightKnowTwo(editionRoles)(
                "Ben",
                "Leah",
                "Kali"
            ).information;
            expect(actual.playerIsRole).toEqual([
                {
                    player: "Ben",
                    possibleRoles: expectedFirstNightRoles,
                    notRoles: otherRoles,
                },
            ]);
        });
        it("returns a description using the player and known roles", () => {
            const actual = firstNightKnowTwo(editionRoles)(
                "Ben",
                "Leah",
                "Kali"
            ).text;
            expect([
                "Ben is a starts knowing role who has Leah & Kali as pings",
                "Ben is a first night role who has Leah & Kali as pings",
            ]).toContain(actual);
        });
    });
});
