import { createSelector } from 'reselect';
import { RootState } from '../store';
import { Category } from '../store/types/category';
import { BillListItem } from '../store/types/bills';
import dayjs from 'dayjs';


function getRawBills(state: RootState) {
    return state.bills.bills;
}

interface Categories {
    [key:string]: Category;
}
function getRawCategories(state: RootState) : Categories {
    const rawCategories = state.category.categories;
    return rawCategories.reduce((obj, item) => Object.assign(obj, { [item.id]: item }), {});

}


const getBillList = createSelector(
    [getRawBills, getRawCategories],
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