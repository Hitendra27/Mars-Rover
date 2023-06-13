type Heading = "N" | "W" | "S" | "E";
const Compass: Array<Heading> = ["N", "W", "S", "E"];

export const turnLeft = (heading: Heading) => {
    const idx = Compass.indexOf(heading);
    return Compass[(idx - 1) % 4];
}