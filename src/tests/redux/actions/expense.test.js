import { addExpense, editExpense, removeExpense } from "../../../redux/actions/expenses";

test('should setup remove expense action object', () => {
  const action = removeExpense({ id: 'aaa' });
  expect(action).toStrictEqual({
    type: 'REMOVE_EXPENSE',
    id: 'aaa'
  })
});

test('should setup edit expense action object', () => {
  const action = editExpense('123', { note: 'new note' });
  expect(action).toStrictEqual({
    type: 'EDIT_EXPENSE',
    id: '123',
    updates: {
      note: 'new note'
    }
  })
});

test('should setup add expense action object with provided values', () => {
  const expenseDate = {
    description: 'Rent',
    amount: '109500',
    createdAt: 1000,
    notes: 'This is a note'
  };
  const action = addExpense(expenseDate);
  expect(action).toStrictEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseDate,
      id: expect.any(String)
    }
  })
});

test('should setup add expense action object with default values', () => {
  const action = addExpense();
  expect(action).toStrictEqual({
    type: 'ADD_EXPENSE',
    expense: {
      description: '',
      amount: 0,
      createdAt: 0,
      notes: '',
      id: expect.any(String)
    }
  })
});