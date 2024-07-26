const Calculator = require("../calculator.js");

// 관련 있는 테스트들을 그룹으로 생성
describe("Calculator", () => {
  let cal;
  beforeEach(() => {
    // 각각의 로직이 실행되기 전
    cal = new Calculator();
  });

  // 여기서 it은 Calculator를 가리키는 3인칭 주어
  // 각각의 테스트는 독립적으로 만들어주는 것이 중요하다.
  it("inits with 0", () => {
    expect(cal.value).toBe(0);
  });

  it("sets", () => {
    cal.set(9);
    expect(cal.value).toBe(9);
  });

  it("clear", () => {
    cal.set(9);
    cal.clear();

    expect(cal.value).toBe(0);
  });

  it("adds", () => {
    cal.set(1);
    cal.add(2);

    expect(cal.value).toBe(3);
  });

  it("subtracts", () => {
    cal.subtract(1);

    expect(cal.value).toBe(-1);
  });

  it("multiplies", () => {
    cal.set(5);
    cal.multiply(4);

    expect(cal.value).toBe(20);
  });

  describe("divides", () => {
    it("0 / 0 === NaN", () => {
      cal.divide(0);

      expect(cal.value).toBe(NaN);
    });

    it("1 / 0 === Infinity", () => {
      cal.set(1);
      cal.divide(0);

      expect(cal.value).toBe(Infinity);
    });

    it("4 / 4 === 1", () => {
      cal.set(4);
      cal.divide(4);

      expect(cal.value).toBe(1);
    });
  });
});
