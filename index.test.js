const sum = (number1, number2) => number1 + number2;

describe("Given a sum function", () => {
  describe("When it receives 3 and 2", () => {
    test("Then it should return 5", () => {
      const number1 = 3;
      const number2 = 2;
      const expectedResult = 5;

      const result = sum(number1, number2);

      expect(result).toBe(expectedResult);
    });
  });
});
