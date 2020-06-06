import React from 'react';
import styles from './CategoryList.module.scss';
import { BillSummaryItem } from 'store/types/bills';

export interface Props {
    billSummary: BillSummaryItem[];
}
export default function CategoryList(props: Props) {
    const totalAmount = props.billSummary.reduce((total, current) => {
        return total + current.amount;
    }, 0)
    return (
        <ul className={styles.page}>
            {props.billSummary.map((item, key) => {
                return (
                    <li key={item.category + key}>
                        <div className={styles.billItem}>
                            <div className={styles.section}>
                                <span>{item.category}</span>
                                <span>¥{item.amount}</span>
                            </div>
                            <div>
                                <div className={styles.defaultWrapper}>
                                    <div className={styles.progress} style={{ width: `${(item.amount / totalAmount) * 100}%` }}></div>
                                </div>
                            </div>
                        </div>
                    </li>
                )
            })
            }
        </ul>
    )
}