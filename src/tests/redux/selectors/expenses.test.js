import moment from "moment";
import getVisibleExpenses from "../../../redux/selectors/expenses";

const expenses = [
  {
    id: "1",
    description: "Gum",
    note: "",
    amount: 195,
    createdAt: 0,
  },
  {
    id: "2",
    description: "Rent",
    note: "",
    amount: 109500,
    createdAt: moment(0).subtract(4, "days").valueOf(),
  },
  {
    id: "3",
    description: "Credit Card",
    note: "",
    amount: 4500,
    createdAt: moment(0).add(4, "days").valueOf(),
  },
];

test("should filter by text value", () => {
  const filters = {
    text: "e",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined,
  };
  const results = getVisibleExpenses(expenses, filters);
  expect(results).toStrictEqual([expenses[2], expenses[1]]);
});

test("should filter by start date", () => {
  const filters = {
    text: "",
    sortBy: "date",
    startDate: moment(0),
    endDate: undefined,
  };
  const results = getVisibleExpenses(expenses, filters);
  expect(results).toStrictEqual([expenses[2], expenses[0]]);
});

test("should filter by end date", () => {
  const filters = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: moment(0),
  };
  const results = getVisibleExpenses(expenses, filters);
  expect(results).toStrictEqual(
    expenses.filter((e) => e.createdAt <= filters.endDate)
  );
});

test("should sort by date", () => {
  const filters = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined,
  };
  const results = getVisibleExpenses(expenses, filters);
  expect(results).toStrictEqual(
    expenses.sort((a, b) => b.createdAt - a.createdAt)
  );
});

test("should sort by amount", () => {
  const filters = {
    text: "",
    sortBy: "amount",
    startDate: undefined,
    endDate: undefined,
  };
  const results = getVisibleExpenses(expenses, filters);
  expect(results).toStrictEqual(expenses.sort((a, b) => b.amount - a.amount));
});
