import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.scss';


interface Item {
    label: string;
    url: string;
}
interface Props {
    items: Item[];
}
export default function Navigation(props: Props) {
    return (
        <ul className={styles.navigation}>
            {props.items.map(item => {
                return (
                    <li key={item.label}>
                        <Link to={item.url}>{item.label}</Link>
                    </li>
                )
            })}
        </ul>
    )
}