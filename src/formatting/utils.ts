export const pickOne = <T>(list: Array<T>) =>
    list[Math.floor(Math.random() * list.length)];
