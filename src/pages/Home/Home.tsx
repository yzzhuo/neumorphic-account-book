import React from 'react';
import style from './Home.module.scss';
import clsx from 'clsx';
import {BillListItem} from 'store/types/bills';
import Select from 'components/Select';
import Button from 'components/Button';
import BillList from './components/BillList';
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
    <div className="Page">

      <header className={"Header"} style={{textAlign: 'center'}}>
          <p className="Heading">
            <span className={clsx('TextStyle_subdued')} style={{marginRight: 12}} >支出</span>
            <span className="DisplayText_extraLarge">¥{billStatistics['支出']}</span>
          </p>
          <p className="Heading">
            <span className={clsx('TextStyle_subdued')} style={{marginRight: 12}} >收入</span>
            <span className="DisplayText_extraLarge">¥{billStatistics['收入']}</span>
          </p>
      </header>

      <div className={style.detail_container}>
        <Button onClick={props.gotoAddBill} type="primary" className={style.button}>+</Button>
        <div style={{display: 'flex', justifyContent: 'SPACE-BETWEEN'}}>
          <p className={clsx('Heading', 'TextStyle_subdued')} style={{marginBottom: 22}}>账单记录</p>
          <Select name="month" value={filterMonth} onChange={handleMonth} options={months}></Select>
        </div>
        <BillList billList={filterBillList}/>
      </div>
    </div>
  );
}

export default Home;
