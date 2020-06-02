export interface BillState {
    bills: Bill[];
}

export interface AddBill {
    id: string;
    text: string;
}

export interface Bill {
    type: string;
    time: string;
    category: string;
    amount: string;
}