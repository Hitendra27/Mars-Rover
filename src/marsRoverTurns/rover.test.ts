import { turnLeft } from "./turnLeft"; 
import { turnRight } from "./turnRight";


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
        const expected = turnRight('N');

        // Act
        const result = 'E';

        // Assert
        expect(result).toBe(expected);
    });

    test('When facing W, turning left should cause us to face S', () => {
        // Arrange
        const expected = turnRight('E');

        // Act
        const result = 'S';

        // Assert
        expect(result).toBe(expected);
    });

    test('When face S, turning left should cause us to face E', () => {
        // Arrange
        const expected = turnRight('S');

        // Act
        const result = 'W';

        // Assert
        expect(result).toBe(expected);
    });

    test('When face E, turning left should cause us to face N', () => {
        // Arrange
        const expected = turnRight('W');

        // Act
        const result = 'N'

        // Assert
        expect(result).toBe(expected);
    })

});