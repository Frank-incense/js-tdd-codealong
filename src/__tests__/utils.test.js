import { currentAgeForBirthYear } from "../utils";

describe("currentAgeForBirthYear", () => {
  test("returns the age of a person based on the year of birth", () => {
    // Arrange
    const currentYear = new Date().getFullYear();
    const birthYear = 1984;
    const answer = currentYear - birthYear;

    // Act
    const ageOfPerson = currentAgeForBirthYear(birthYear);

    // Assert
    expect(ageOfPerson).toEqual(answer);
  })
  test("returns the current year for a person born in year 0", () => {
    const currentYear = new Date().getFullYear();
    const birthYear = 0;
    const ageOfPerson = currentAgeForBirthYear(birthYear);
    expect(ageOfPerson).toBe(currentYear);
  });
});
