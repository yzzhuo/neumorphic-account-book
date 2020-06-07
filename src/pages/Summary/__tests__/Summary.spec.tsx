import React from "react";
import { ReactWrapper } from "enzyme";
import { render } from "utils/test";
import CategoryList from '../components/CategoryList';

describe("<Summary />", () => {
    let wrapper: ReactWrapper;
    beforeAll(() => {
        jest.doMock("selectors/getBillList", () => () => []);
        jest.doMock("../useGetSummary", () => () => ({
            filterMonth: "",
            handleMonth: jest.fn(),
            summaryList: [
                {
                    amount: 11800,
                    category: "房贷",
                },
                {
                    amount: 20000,
                    category: "房贷",
                },
            ],
        }));
        const { default: Summary } = require("../index");
        wrapper = render(<Summary />);
    });
    it("render total expense amount", () => {
        expect(wrapper.find("p").first()).toMatchInlineSnapshot(`
      <p
        className="section"
      >
        <span
          className="subTitle"
        >
          支出统计
        </span>
        <span
          className="amount"
        >
          ¥
          31800
        </span>
      </p>
    `);
    });
    it('render category summary list', () => {
        expect(wrapper.find(CategoryList)).toHaveLength(1);
    })
});
