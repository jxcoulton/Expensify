import moment from "moment";
import {
  setStartDate,
  setEndDate,
  setTextFilter,
  sortByAmount,
  sortByDate,
} from "../../../redux/actions/filters";

test("should generate set start date action object", () => {
  const action = setStartDate(moment(0));
  expect(action).toStrictEqual({
    type: "SET_START_DATE",
    startDate: moment(0),
  });
});

test("should generate set end date action object", () => {
  const action = setEndDate(moment(0));
  expect(action).toStrictEqual({
    type: "SET_END_DATE",
    endDate: moment(0),
  });
});

test("should generate set text filter action object", () => {
  const text = 'this is text'
  const action = setTextFilter(text);
  expect(action).toStrictEqual({
    type: "SET_TEXT_FILTER",
    text,
  });
});

test("should generate default set text filter action object", () => {
  const action = setTextFilter();
  expect(action).toStrictEqual({
    type: "SET_TEXT_FILTER",
    text: '',
  });
});

test("should sort action object by date", () => {
  const action = sortByDate();
  expect(action).toStrictEqual({
    type: "SORT_BY_DATE",
  });
});

test("should sort action object by amount", () => {
  const action = sortByAmount();
  expect(action).toStrictEqual({
    type: "SORT_BY_AMOUNT",
  });
});
