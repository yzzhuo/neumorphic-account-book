import React from 'react';
import Tabs from '../../components/Tabs';
import styles from './BillDetail.module.scss';
import DatePicker from "react-datepicker";
import Button from 'components/Button';
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
        if (!amount) {
            return;
        }
        props.addBill({
            amount,
            category: categroryId,
            type,
            time: (startDate || new Date()).getTime() + '',
        });
        props.gotoHomePage();
    }
    return (
        <div className={styles.container}>
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
                    <p className={styles.subdued} style={{marginBottom: 22}}>金额</p>
                    <input type="number" placeholder="输入账单的金额" className={styles.input} value={amount} onChange={(ev)=> {
                        setAmount(ev.target.value)
                    }}/>
                </div>

                <p className={styles.subdued} style={{marginBottom: 22}}>时间</p>
                <DatePicker
                    showTimeSelect
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    className={styles.input}
                    dateFormat="Pp"

                />
                <div className={styles.types_containers}>
                     <p className={styles.subdued} style={{marginBottom: 22}}>分类</p>
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
                <Button className={styles.button} onClick={handleSave} type={amount ? "primary" : 'disbaled'}>Save</Button>
            </div>
        </div>
    )
}