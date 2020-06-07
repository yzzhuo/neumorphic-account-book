import React from 'react';
import styles from './Summary.module.scss';
import Select from 'components/Select';
import { BillListItem } from 'store/types/bills';
import CategoryList from './components/CategoryList';
import { months } from 'utils/data';
import useGetSummary from './useGetSummary';

export interface StateProps {
    bills: BillListItem[];
}

export interface DispatchProps {
}

export type Props = DispatchProps & StateProps;

export default function Summary(props: Props) {
    const { filterMonth, handleMonth, summaryList } = useGetSummary(props.bills);
    const totalAmount = summaryList.reduce((total, current) => {
        return total + current.amount;
    }, 0)
    return (
        <div>
            <header className={styles.header}>
                <p className={styles.section}>
                    <span className={styles.subTitle} >支出统计</span>
                    <span className={styles.amount}>¥{totalAmount}</span>
                </p>
            </header>

            <div className={styles.title}>
                <Select name="month" value={filterMonth} onChange={handleMonth} options={months}></Select>
            </div>
            <CategoryList billSummary={summaryList} />
        </div>
    )
}