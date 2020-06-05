import React from 'react';
import {BillStatistics} from 'store/types/bills';
import styles from './Summary.module.scss';

interface Props {
    billStatistics: BillStatistics;
}

export default function Summary({billStatistics}: Props) {
    return (
        <header className={styles.header}>
          <p className={styles.section}>
            <span className={styles.subTitle} >支出</span>
            <span className={styles.amount}>¥{billStatistics['支出']}</span>
          </p>
          <p className={styles.section}>
            <span className={styles.subTitle} >收入</span>
            <span className={styles.amount}>¥{billStatistics['收入']}</span>
          </p>
      </header>
    )
}