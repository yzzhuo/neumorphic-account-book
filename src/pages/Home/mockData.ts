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
        amount: 30000,
        date: "2019 07月01日",
        isIncome: true,
        month: "7",
        name: "工资",
        time: "2019-06-30T16:00:00.000Z",
    },
];