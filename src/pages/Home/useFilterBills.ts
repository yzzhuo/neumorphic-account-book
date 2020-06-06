import { useState, useEffect } from 'react';
import { BillList, BillListItem, BillStatistics } from '../../store/types/bills';
import groupBy from 'lodash/groupBy';

export default function useFilterBills(bills: BillListItem[]) {
    const [filterMonth, handleMonth] = useState<string>('');

    const [filterBillList, setFilterBillList] = useState<BillList>({});
    const [billStatistics, setBillStatistics] = useState<BillStatistics>({});

    useEffect(() => {
        getBillsByMonth();
        getBillStatistics();
    }, [bills, filterMonth]);

    const getBillsByMonth = () => {
        const filterBills = groupBy(filterMonth ? bills.filter(bill => bill.month === filterMonth) : bills, 'date');
        setFilterBillList(filterBills);
    }

    const getBillStatistics = () => {
        const filterBills = filterMonth ? bills.filter(bill => bill.month === filterMonth) : bills;
        let billStatistics = {
            支出: 0,
            收入: 0,
        }
        filterBills.forEach(bill => {
            if (bill.isIncome) {
                billStatistics['收入'] += bill.amount; 
            } else {
                billStatistics['支出'] += bill.amount; 
            }
        });
        setBillStatistics(billStatistics)
    }

    return {
        filterBillList,
        filterMonth,
        handleMonth,
        billStatistics,
    }
}