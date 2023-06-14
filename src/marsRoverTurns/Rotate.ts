export type Heading = "N" | "W" | "S" | "E";
export const Compass: Array<Heading> = ["N", "E", "S", "W"];

export const rotate = (turns: number) => (heading: Heading) => {
    const idx = Compass.indexOf(heading);
    return Compass[(idx + turns) % 4];
}