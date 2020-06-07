import React from 'react';
import style from './Home.module.scss';
import { BillListItem } from 'store/types/bills';
import Select from 'components/Select';
import Button from 'components/Button';
import BillList from './components/BillList';
import Summary from './components/Summary';
import useFilterBills from './useFilterBills';
import { months } from 'utils/data';

export interface StateProps {
  bills: BillListItem[];
}

export interface DispatchProps {
  gotoAddBill: VoidFunction;
}

export interface OwnProps { }

type Props = OwnProps & StateProps & DispatchProps;

function Home(props: Props) {
  const { filterBillList, filterMonth, handleMonth, billStatistics } = useFilterBills(props.bills);

  return (
    <div>
      <Summary billStatistics={billStatistics} />
      <div className={style.container}>
        <div className={style.header}>
          <span>账单记录</span>
          <Select name="month" value={filterMonth} onChange={handleMonth} options={months}></Select>
        </div>
        <BillList billList={filterBillList} />
      </div>
      <Button onClick={props.gotoAddBill} type="primary" className={style.button}>+</Button>
    </div>
  );
}

export default Home;
