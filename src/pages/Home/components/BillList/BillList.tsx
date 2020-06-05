import React from 'react';
import clsx from 'clsx';
import {BillList as BillListType} from '../../../../store/types/bills';
import styles from './BillList.module.scss';

interface Props {
    billList: BillListType;
}
export default function BillList(props: Props) {
    const {billList} = props;
    const billGroups = Object.keys(billList);
    return (
        billGroups.length > 0 ? 
          <ul>
            {billGroups.map((billGroup) => (
              <React.Fragment key={billGroup}>
                <p className={styles.time}>{billGroup}</p>
                {billList[billGroup].map((bill,  key) =>
                  <li style={{marginBottom: 16}} key={bill.name + key}>
                  <div className={styles.billItem}>
                      <i className={bill.isIncome ? styles.income : styles.outcome} />
                      <div className={styles.main}>
                        <h4 className={styles.bold}  style={{ marginBottom: 6}}>{bill.name}</h4>
                        <span className={styles.bold}>{bill.time}</span>
                      </div>
                      <p className={styles.bold}>{bill.amount}</p>
                  </div>
                </li>
              )}
              </React.Fragment>
            ))}
          </ul>
            :
            <p className={clsx('TextStyle_subdued')} style={{textAlign: 'center'}}>Ops, 所选月份没有账单</p>
    )
}