import React from 'react';
import styles from './Tabs.module.scss';
import clsx from 'clsx';

interface Tabs {
    id: string;
    title: string;
}
export interface OwnProps {
    tabs: Tabs[];
    onSelect: (id: string) => void;
    selected: string;
}
export default function Tabs(props:OwnProps) {
    return (
        <ul className={styles.tabs_container}>
            {props.tabs.map((tab) => (
                <li className={clsx(styles.tab, {[styles.selected]: props.selected === tab.id})}
                    onClick={() => {
                        console.log('tab.id', tab.id)
                        props.onSelect(tab.id)
                    }}
                    key={tab.id}>
                        {tab.title}
                </li>
            ))} 
        </ul>
    )
}