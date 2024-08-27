const { calculateTotalPrice } = require("./calculator");

describe("calculateTotalPrice", () => {
  const allItems = [
    { name: "RedSet", value: 50, amount: 0 },
    { name: "GreenSet", value: 40, amount: 0 },
    { name: "BlueSet", value: 30, amount: 0 },
    { name: "YellowSet", value: 50, amount: 0 },
    { name: "PinkSet", value: 80, amount: 0 },
    { name: "PurpleSet", value: 90, amount: 0 },
    { name: "OrangeSet", value: 120, amount: 0 },
  ];

  test("total without discount", () => {
    const items = allItems.map((item) => ({ ...item, amount: item.name === "RedSet" || item.name === "GreenSet" ? 1 : 0 }));
    const isMember = false;
    expect(calculateTotalPrice(items, isMember)).toBe("90.00");
  });

  test("applies 10% discount for member", () => {
    const items = allItems.map((item) => ({ ...item, amount: item.name === "RedSet" || item.name === "GreenSet" ? 1 : 0 }));
    const isMember = true;
    expect(calculateTotalPrice(items, isMember)).toBe("81.00");
  });

  test("applies 5% discount for ordering doubles", () => {
    const items = allItems.map((item) => ({ ...item, amount: item.name === "OrangeSet" ? 2 : 0 }));
    const isMember = false;
    expect(calculateTotalPrice(items, isMember)).toBe("228.00");
  });

  test("applies both 5% and 10% discounts", () => {
    const items = allItems.map((item) => ({ ...item, amount: item.name === "OrangeSet" ? 2 : 0 }));
    const isMember = true;
    expect(calculateTotalPrice(items, isMember)).toBe("205.20");
  });
});