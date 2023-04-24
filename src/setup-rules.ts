type Enumerate<
    N extends number,
    Acc extends number[] = []
> = Acc["length"] extends N
    ? Acc[number]
    : Enumerate<N, [...Acc, Acc["length"]]>;

type IntRange<F extends number, T extends number> = Exclude<
    Enumerate<T>,
    Enumerate<F>
>;

type playerCount = IntRange<7, 16>;

const setupRules = {
    playerCount: {
        minimum: 7,
        maximum: 15,
    },
    townsfolk: (playerCount: playerCount) => playerCount,
    demon: 1,
    minions: (playerCount: playerCount) => playerCount,
    outsiders: (playerCount: playerCount) => playerCount % 7,
};

export default setupRules;
