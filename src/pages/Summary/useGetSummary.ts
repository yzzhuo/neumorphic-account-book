import { useEffect, useState } from 'react';
import { BillSummary, BillSummaryItem, BillListItem } from '../../store/types/bills';

export default function useGetSummary(bills: BillListItem[]) {
    const [filterMonth, handleMonth] = useState<string>('');
    const [summaryList, setSummaryList] = useState<BillSummaryItem[]>([]);

    useEffect(() => {
        updateSummaryList();
    }, [bills, filterMonth]);

    const updateSummaryList = () => {
        const expenseBills = bills.filter(bill => !bill.isIncome);
        const filterBills = filterMonth ? expenseBills.filter(bill => bill.month === filterMonth) : expenseBills;
        const billSummary: BillSummary = {};

        filterBills.forEach((bill: BillListItem) => {
            if (billSummary[bill.name]) {
                billSummary[bill.name].amount += bill.amount;
            } else {
                billSummary[bill.name] = {
                    category: bill.name,
                    amount: bill.amount,
                }
            }
        });
        let billSummaryItems = Object.values(billSummary);
        billSummaryItems.sort((a, b) => b.amount - a.amount)
        setSummaryList(billSummaryItems);
    }

    return {
        summaryList,
        filterMonth,
        handleMonth,
    }
}