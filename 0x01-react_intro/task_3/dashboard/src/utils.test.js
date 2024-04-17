import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";
test("get the current year", () => {
  expect(getFullYear()).toBe(2024);
});

test("get footer copy", () => {
  expect(getFooterCopy(true)).toBe("Holberton School");
});

test("get footer copy", () => {
  expect(getFooterCopy(false)).toBe("Holberton School main dashboard");
});

test("latest notifications", () => {
  expect(getLatestNotification()).toBe(
    "<strong>Urgent requirement</strong> - complete by EOD"
  );
});
