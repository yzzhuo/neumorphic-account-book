import React from "react";
import { ReactWrapper } from "enzyme";
import { render } from "utils/test";
import { mockBillList } from "../mockData";
import Summary from "../components/Summary";
import BillList from "../components/BillList";

describe("<Home />", () => {
    const push = jest.fn(() => ({ type: "push" }));

    let wrapper: ReactWrapper;
    beforeAll(() => {
        jest.doMock("connected-react-router", () => ({
            push,
        }));
        jest.doMock("selectors/getBillList", () => () => mockBillList);
        const { default: Home } = require("../index");
        wrapper = render(<Home />);
    });
    afterAll(() => {
        jest.resetModules();
        jest.resetAllMocks();
    });
    it("render total income and expense amount", () => {
        expect(wrapper.find(Summary).prop("billStatistics")).toMatchInlineSnapshot(`
      Object {
        "支出": 5400,
        "收入": 30000,
      }
    `);
    });

    it("render BillList with filterBillList data", () => {
        expect(wrapper.find(BillList).prop("billList")).toMatchInlineSnapshot(`
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
    });

    it('click add button to redirect to add bill page', () => {
        wrapper.find('button').simulate('click');
        expect(push).toBeCalledWith('/detail');
    })
});
