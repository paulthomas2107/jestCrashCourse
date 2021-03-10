const functions = require("./functions");

test("Adds 2 + 2 equals 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});

test("Adds 2 + 2 to NOT equal 5", () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

test("Should be null", () => {
  expect(functions.isNull()).toBeNull();
});

test("Should be falsey - null", () => {
  expect(functions.checkValue(null)).toBeFalsy();
});

test("Should be falsey - 0", () => {
  expect(functions.checkValue(0)).toBeFalsy();
});

test("Should be falsey - undef", () => {
  expect(functions.checkValue(undefined)).toBeFalsy();
});

test("User should be Paul Thomas object", () => {
  expect(functions.createUser()).toEqual({
    firstName: "Paul",
    lastName: "Thomas",
  });
});

test("Should be under 1600", () => {
  const load1 = 800;
  const load2 = 800;
  expect(load1 + load2).toBeLessThanOrEqual(1600);
});

test("There is no I in Team", () => {
  expect("Team").not.toMatch(/I/);
});

test("Admin should be in usernames", () => {
  usernames = ["Paul", "Admin", "Dev", "Manager"];
  expect(usernames).toContain("Admin");
});
