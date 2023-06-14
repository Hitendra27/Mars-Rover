import { Heading } from "../marsRoverTurns/Rotate"; 

export type Coordinates = [x: number, y: number];

export const move = (heading: Heading, position: Coordinates) => {
    const [x, y] = position;
    if (heading === "N") return [x, y + 1];
    if (heading === "E") return [x + 1, y];
    if (heading === "S") return [x, y - 1];
    if (heading === "W") return [x - 1, y];
};