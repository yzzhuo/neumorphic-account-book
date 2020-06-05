import React from 'react';
import Tabs from '../../components/Tabs';
import styles from './BillDetail.module.scss';
import DatePicker from "react-datepicker";
import {Category} from '../../store/types/category';
import "react-datepicker/dist/react-datepicker.css";
import clsx from 'clsx';
import { addBill } from '../../store/bills';

export interface StateProps {
    categories: Category[];
}
export interface DispatchProps {
    addBill: typeof addBill;
    gotoHomePage: VoidFunction;
}
export interface OwnProps {}

type Props = StateProps & DispatchProps & OwnProps;

export default function BillDetail(props: Props) {
    const [startDate, setStartDate] = React.useState<Date|null>(new Date());
    const [type, setType] = React.useState<string>('0');
    const [categroryId, setCategoryId] = React.useState<string>(props.categories[0].id);
    const [amount, setAmount] = React.useState<string>('');

    const handleSave = () => {
        props.addBill({
            amount,
            category: categroryId,
            type,
            time: (startDate || new Date()).getTime() + '',
        });
        props.gotoHomePage();
    }
    return (
        <div>
           <Tabs tabs={[{
               title: '支出',
               id: '0'
           }, {
               title: '收入',
               id: '1'
           }]}
            selected={type}
            onSelect={(type) => setType(type)} />
            <div className={styles.form}>
                <div>
                    <p className={'TextStyle_subdued'} style={{marginBottom: 22}}>金额</p>
                    <input type="number" placeholder="输入账单的金额" className={styles.input} value={amount} onChange={(ev)=> {
                        setAmount(ev.target.value)
                    }}/>
                </div>

                <p className={'TextStyle_subdued'} style={{marginBottom: 22}}>时间</p>
                <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    className={styles.input}
                />
                <div className={styles.types_containers}>
                     <p className={'TextStyle_subdued'} style={{marginBottom: 22}}>分类</p>
                     <div className={styles.type_list}>
                        {props.categories.filter(item => item.type === type).map(category => (
                            <div key={category.id} 
                                 className={clsx(styles.type, {[styles.selected]: categroryId === category.id })}
                                 onClick={() => setCategoryId(category.id)}>
                                    {category.name}
                            </div>
                        ))}
                     </div>
                </div>
                <button className={clsx('Button', 'Primary', styles.button)} onClick={handleSave}>Save</button>
            </div>
        </div>
    )
}