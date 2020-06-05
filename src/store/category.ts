import { createSlice } from '@reduxjs/toolkit'
import {CategoryState} from './types/category';
import category from '../data/category.json';

const initialState:CategoryState = {
    categories: category,
}

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
  }
});



export default categorySlice.reducer