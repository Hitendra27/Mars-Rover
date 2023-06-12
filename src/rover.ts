//export const marsRover = () => {}

export const turnLeft = (X: string) => {
    switch (X) {
        case "N":
          return "W";
        case "W":
          return "S";
        case "S":
          return "E";
        case "E":
          return "N";
    }

}