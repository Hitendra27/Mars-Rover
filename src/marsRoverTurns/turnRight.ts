type Heading = "N" | "W" | "S" | "E";
const Compass: Array<Heading> = ["N", "E", "S", "W"];

export const turnRight = (heading: Heading) => {
    const idx = Compass.indexOf(heading);
    return Compass[idx + 1] % 4;
}