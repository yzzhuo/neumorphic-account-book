import React from 'react';
import style from './Home.module.scss';
import clsx from 'clsx';
import {BillListItem} from 'store/types/bills';
import Select from 'components/Select';
import Button from 'components/Button';
import BillList from './components/BillList';
import Summary from './components/Summary';
import useFilterBills from './useFilterBills';

export interface StateProps {
  bills: BillListItem[];
}

export interface DispatchProps {
    gotoAddBill: VoidFunction;
}

export interface OwnProps {}

type Props = OwnProps & StateProps & DispatchProps;

function Home(props:Props) {
  const {filterBillList ,filterMonth, handleMonth, billStatistics} = useFilterBills(props.bills);

  const months = [...Array(12)].map((item, key) => ({
    label: `${key + 1}月`,
    value: String(key + 1),
  }));
  months.unshift({
    label: '全部',
    value: '',
  })

  return (
    <div className={style.page}>
      <Summary billStatistics={billStatistics}/>
      <div className={style.container}>
        <div className={style.header}>
          <p>账单记录</p>
          <Select name="month" value={filterMonth} onChange={handleMonth} options={months}></Select>
        </div>
        <BillList billList={filterBillList}/>
      </div>
      <Button onClick={props.gotoAddBill} type="primary" className={style.button}>+</Button>
    </div>
  );
}

export default Home;
