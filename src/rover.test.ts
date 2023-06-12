import { marsRover } from "./rover";

describe('mars rover tests', () => {
    test('When facing N, turning left should cause us to face W', () => {
        // Arrange
        const expected = 'N';

        // Act
        const result = 'W';

        // Assert
        expect(result).toBe(expected);
    });

});