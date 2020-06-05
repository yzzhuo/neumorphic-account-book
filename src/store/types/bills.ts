export interface BillState {
    bills: Bill[];
}


export interface Bill {
    type: string;
    time: string;
    category: string;
    amount: string;
}


export interface BillList {
    [title:string]: BillListItem[]
}

export interface BillListItem {
    name: string;
    time: string;
    isIncome: boolean;
    amount: number;
    date: string;
    month: string;
}

export interface BillStatistics {
    [type:string]: number;
}