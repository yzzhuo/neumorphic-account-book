import { createSelector } from 'reselect';
import { RootState } from '../store';
import { BillListItem } from '../store/types/bills';
import getCategoryMap from './getCategoryMap';

import dayjs from 'dayjs';


function getRawBills(state: RootState) {
    return state.bills.bills;
}


const getBillList = createSelector(
    [getRawBills, getCategoryMap],
    (bills, categories) : BillListItem[] => {
       const sortBills = [...bills].sort((a, b) => Number(b.time) - Number(a.time));
       return sortBills.map(bill => {
           const timeObj = dayjs(parseFloat(bill.time));
           return {
            name: categories[bill.category].name,
            time: timeObj.toISOString(),
            date: timeObj.format('YYYY MM月DD日'),
            isIncome: bill.type === '1',
            amount: parseFloat(bill.amount),
            month: timeObj.format('M')
       }});
    }
);

export default getBillList;