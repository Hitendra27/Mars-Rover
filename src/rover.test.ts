import { marsRover } from "./rover";

const turnLeft = (X: string) => 'W';

describe('mars rover tests', () => {
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
    })

});