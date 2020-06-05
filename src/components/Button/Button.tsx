import React, { ReactNode } from 'react';
import clsx from 'clsx';
import styles from './Button.module.scss';

interface Props {
    children: ReactNode;
    type?: 'primary'|'default'|'disbaled';
    onClick: VoidFunction;
    className?:string;
}
export default function Button({children, type = 'default', onClick, className} : Props) {
    return (
        <button className={clsx(styles.button, styles[type], styles.button, className)} onClick={onClick}>
            {children}
        </button>
    )
}