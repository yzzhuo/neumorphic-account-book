import React from "react";
import {ReactWrapper} from 'enzyme';
import { render } from "utils/test";
import DatePicker from "react-datepicker";
import BillDetail from "../index";

describe("<BillDetail />", () => {
  const push = jest.fn(() => ({type: 'push'}));
  const addBill = jest.fn(() => ({type: 'addBill'}));
  let wrapper: ReactWrapper;
  beforeAll(() => {
    jest.doMock('connected-react-router', () => ({
      push,
    }));
    jest.doMock('store/bills', () => ({
      addBill,
    }));
    // mock current date
    const date = new Date('2020-06-06T11:01:58.135Z');
    global.Date = class extends Date {
      constructor() {
        super();
        return date;
      }
    } as any
    const {default: BillDetail} = require('../index');  
    wrapper = render(<BillDetail />, {
      category: {
        categories: [
          {
            id: "0",
            name: "房贷",
            type: "0",
          },
        ],
      },
    });
  })
  
  it("render amount input ", () => {
    expect(wrapper.find("input").first()).toMatchInlineSnapshot(`
      <input
        className="input"
        name="amount"
        onChange={[Function]}
        placeholder="输入账单的金额"
        type="number"
        value=""
      />
    `);
  });
  it("render date picker", () => {
    expect(wrapper.find(DatePicker)).toHaveLength(1);
  });
  it("render type of bill", () => {
    expect(wrapper.find("Tabs").prop("tabs")).toMatchInlineSnapshot(`
      Array [
        Object {
          "id": "0",
          "title": "支出",
        },
        Object {
          "id": "1",
          "title": "收入",
        },
      ]
    `);
  });
  it('render category of bill', () => {
      expect(wrapper.find({
          children: '房贷'
      })).toHaveLength(1)
  });
  it('handle add bill', () => {
      wrapper.find('input').first().simulate('change', { target: { value: '12' }});
      wrapper.find('button').simulate('click');
      expect(addBill).toBeCalledWith({"amount": "12", "category": "0", "time": "1591441260000", "type": "0"});
      expect(push).toBeCalledWith("/");
  })
});
