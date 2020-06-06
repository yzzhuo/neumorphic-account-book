import getBillList from "../getBillList";

describe("getBillList", () => {
  it("return formatted bill list", () => {
    expect(
      getBillList({
        router: {} as any,
        bills: {
          bills: [
            {
              type: "0",
              time: "1561910400000",
              category: "8s0p77c323",
              amount: "5400",
            },
            {
              type: "1",
              time: "1561910400000",
              category: "s73ijpispio",
              amount: "30000",
            },
          ],
        },
        category: {
          categories: [
            { id: "8s0p77c323", type: "0", name: "房贷" },
            { id: "s73ijpispio", type: "1", name: "工资" },
          ],
        },
      })
    ).toMatchInlineSnapshot(`
      Array [
        Object {
          "amount": 5400,
          "date": "2019 07月01日",
          "isIncome": false,
          "month": "7",
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
      ]
    `);
  });
});
