export const turnRight = (X: string) => {
    switch (X) {
        case "N":
          return "E";
        case "E":
          return "S";
        case "S":
          return "W";
        case "W":
          return "N";
    }
}