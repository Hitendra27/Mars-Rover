// import { romanNumerals } from "./romanNumerals";

// describe('romanNumerals', () => {

//     test("it throws an error if no number is passed", () => {
//         expect(() => {
//             romanNumerals();
//         }).toThrow("number is required")
//     });

//     test('return any given input of number to roman numerals', () => {
//         // Arrange
//         const expected = 'II';

//         // Act
//         const result = romanNumerals(2);

//         // Assert
//         expect(result).toBe(expected);
//     });

//     test('return roman numerals for the number 8', () => {
//         // Arrange
//         const expected = 'VIII';

//         // Act
//         const result = romanNumerals(8);

//         // Assert
//         expect(result).toBe(expected);
//     });

// });   

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