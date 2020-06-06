import { renderHook, act } from "@testing-library/react-hooks";
import useFilterBills from "../useFilterBills";
import { mockBillList } from "../mockData";

describe("should return filter bills by month from useFilterBills hook", () => {
  it("should return all bills from useFilterBills hook in default", () => {
    const { result } = renderHook(() => useFilterBills(mockBillList));
    expect(result.current.filterBillList).toMatchInlineSnapshot(`
      Object {
        "2019 07月01日": Array [
          Object {
            "amount": 5400,
            "date": "2019 07月01日",
            "isIncome": false,
            "month": "1",
            "name": "房贷",
            "time": "2019-06-30T16:00:00.000Z",
          },
          Object {
            "amount": 30000,
            "date": "2019 07月01日",
            "isIncome": true,
            "month": "7",
            "name": "工资",
            "time": "2019-06-30T16:00:00.000Z",
          },
        ],
      }
    `);
    expect(result.current.billStatistics).toMatchInlineSnapshot(`
      Object {
        "支出": 5400,
        "收入": 30000,
      }
    `);
  });

  it("should return filter bills by months", () => {
    const { result } = renderHook(() => useFilterBills(mockBillList));
    act(() => {
      result.current.handleMonth("1");
    });
    expect(result.current.filterBillList).toMatchInlineSnapshot(`
      Object {
        "2019 07月01日": Array [
          Object {
            "amount": 5400,
            "date": "2019 07月01日",
            "isIncome": false,
            "month": "1",
            "name": "房贷",
            "time": "2019-06-30T16:00:00.000Z",
          },
        ],
      }
    `);
    expect(result.current.billStatistics).toMatchInlineSnapshot(`
      Object {
        "支出": 5400,
        "收入": 0,
      }
    `);
  });
});
