import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {BillState, AddBill} from './types/bills';
import bills from '../data/bill.json';

const initialState:BillState = {
    bills,
}

const billsSlice = createSlice({
  name: 'bills',
  initialState,
  reducers: {
    addBill(state, action:PayloadAction<AddBill>) {
      // const { time, text } = action.payload;
      // state.bills.push({ time, text })
    },
  }
})


export const { addBill } = billsSlice.actions

export default billsSlice.reducer