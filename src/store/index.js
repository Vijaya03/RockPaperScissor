import { configureStore } from '@reduxjs/toolkit';
import pickedData from './action';

const store = configureStore({
    reducer:{ data : pickedData.reducer}
})

export default store;
