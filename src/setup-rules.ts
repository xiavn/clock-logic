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

export type playerCount = IntRange<7, 16>;

const setupRules = {
    playerCount: {
        minimum: 7,
        maximum: 15,
    },
    townsfolk: (playerCount: playerCount) => Math.ceil(playerCount / 3 + 2),
    demon: 1,
    minions: (playerCount: playerCount) => Math.ceil((playerCount - 6) / 3),
    outsiders: (playerCount: playerCount) => (playerCount - 1) % 3,
};

export default setupRules;
