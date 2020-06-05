import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {BillState, Bill} from './types/bills';
import bills from '../data/bill.json';

const initialState:BillState = {
    bills,
}

const billsSlice = createSlice({
  name: 'bills',
  initialState,
  reducers: {
    addBill(state, action:PayloadAction<Bill>) {
      console.log('state', state);
      state.bills.push(action.payload)
    },
  }
})


export const { addBill } = billsSlice.actions

export default billsSlice.reducer