import React from 'react';
import styles from './Select.module.scss';

interface Option {
    label: string;
    value: string;
}
export interface Props {
    options: Option[];
    value: string | undefined;
    onChange: (value: string) => void;
    name: string;
    id?:string;
}
export default function Select(props:Props) {
    return (
        <select name={props.name} id={props.id} className={styles.select} value={props.value} onChange={(ev) => props.onChange(ev.target.value)}>
                {props.options.map((item) => 
                <option value={item.value} key={item.value}>{item.label}</option>
            )}
        </select>   
    )
}