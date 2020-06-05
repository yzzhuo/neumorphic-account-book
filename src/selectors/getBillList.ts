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
       const sortBills = [...bills].sort((a, b) => parseInt(b.time) - parseInt(a.time));
       return sortBills.map(bill => ({
            name: categories[bill.category].name,
            time: dayjs(parseInt(bill.time)).format('YYYY MM-DD HH:MM'),
            date: dayjs(parseInt(bill.time)).format('YYYY MM月DD日'),
            isIncome: bill.type === '1',
            amount: parseInt(bill.amount),
            month: dayjs(parseInt(bill.time)).format('M')
       }));
    }
);

export default getBillList;