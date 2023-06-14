import { move } from "./move";

describe("Mars rover movement test", () => {
    test("When moving N we should increment the Y coordinate", () => {
        // Arrange
        const expected = move("N", [1, 1]);

        // Act
        const result = [1, 2];

        // Assert
        expect(result).toEqual(expected);

    });

    test("When moving E, we should increment the X coordinate", () => {
        // Arrange
        const expected = move("E", [1, 1]);

        // Act
        const result = [2, 1];

        // Assert
        expect(result).toEqual(expected);
    });

    test("When moving S, we should decrement the Y coordinate", () => {
        // Arrange
        const expected = move("S", [1,1]);

        // Act
        const result = [1, 0]

        // Assert
        expect(result).toEqual(expected);
    });

    test("When moving W, we should decrement the X coorinate", () => {
        // Arrange
        const expected = move("W", [1, 1]);

        // Act
        const result = [0, 1];

        // Assert
        expect(result).toEqual(expected);

    })
});