export type edition = "tb";
export type team = "townsfolk" | "outsider" | "minion" | "demon";
export type actionType =
    | "startKnowing"
    | "eachNight"
    | "eachNight*"
    | "passive"
    | "oncePerGame"
    | "onDeath";
export type infoType =
    | "twoPlayersOneRole"
    | "onePlayerOneRole"
    | "toldTwoPlayers"
    | "receivesANumber"
    | "evilPairs"
    | "findsGood"
    | "findsEvil"
    | "findsMinions"
    | "findsDemons"
    | "findsOutsiders"
    | "findsTownsfolk"
    | "pickTwo";
