import { renderHook, act } from "@testing-library/react-hooks";
import useGetSummary from "../useGetSummary";
import { BillListItem } from "store/types/bills";

export const mockBillList: BillListItem[] = [
  {
    amount: 5400,
    date: "2019 07月01日",
    isIncome: false,
    month: "1",
    name: "房贷",
    time: "2019-06-30T16:00:00.000Z",
  },
  {
    amount: 6400,
    date: "2019 07月01日",
    isIncome: false,
    month: "1",
    name: "房贷",
    time: "2019-06-30T16:00:00.000Z",
  },
  {
    amount: 30000,
    date: "2019 07月01日",
    isIncome: true,
    month: "7",
    name: "工资",
    time: "2019-06-30T16:00:00.000Z",
  },
];
describe("should return filter bills by month from useFilterBills hook", () => {
  it("should return expense category summary", () => {
    const { result } = renderHook(() => useGetSummary(mockBillList));
    expect(result.current.summaryList).toMatchInlineSnapshot(`
      Array [
        Object {
          "amount": 11800,
          "category": "房贷",
        },
      ]
    `);
  });

  it("should return category summary by months", () => {
    const { result } = renderHook(() => useGetSummary(mockBillList));
    act(() => {
      result.current.handleMonth("1");
    });
    expect(result.current.summaryList).toMatchInlineSnapshot(`
      Array [
        Object {
          "amount": 11800,
          "category": "房贷",
        },
      ]
    `);
  });
});
