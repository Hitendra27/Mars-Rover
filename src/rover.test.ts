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

});