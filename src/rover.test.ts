//import { marsRover } from "./rover";
//import { turnLeft } from "./rover"; 

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


describe('mars rover turn Left tests', () => {
    test('When facing N, turning left should cause us to face W', () => {
        // Arrange
        const expected = turnLeft('N');

        // Act
        const result = 'W';

        // Assert
        expect(result).toBe(expected);
    });

    test('When facing W, turning left should cause us to face S', () => {
        // Arrange
        const expected = turnLeft('W');

        // Act
        const result = 'S';

        // Assert
        expect(result).toBe(expected);
    });

    test('When face S, turning left should cause us to face E', () => {
        // Arrange
        const expected = turnLeft('S');

        // Act
        const result = 'E';

        // Assert
        expect(result).toBe(expected);
    });

    test('When face E, turning left should cause us to face N', () => {
        // Arrange
        const expected = turnLeft('E');

        // Act
        const result = 'N'

        // Assert
        expect(result).toBe(expected);
    })

});

describe('mars rover turn Right tests', () => {
    test('When facing N, turning left should cause us to face W', () => {
        // Arrange
        const expected = turnLeft('N');

        // Act
        const result = 'E';

        // Assert
        expect(result).toBe(expected);
    });

    test('When facing W, turning left should cause us to face S', () => {
        // Arrange
        const expected = turnLeft('E');

        // Act
        const result = 'S';

        // Assert
        expect(result).toBe(expected);
    });

    test('When face S, turning left should cause us to face E', () => {
        // Arrange
        const expected = turnLeft('S');

        // Act
        const result = 'W';

        // Assert
        expect(result).toBe(expected);
    });

    test('When face E, turning left should cause us to face N', () => {
        // Arrange
        const expected = turnLeft('W');

        // Act
        const result = 'N'

        // Assert
        expect(result).toBe(expected);
    })

});