import { createSlice } from '@reduxjs/toolkit';

const initialState = [
   { id: '0', name: 'Erik' },
   { id: '1', name: 'Stan' },
   { id: '2', name: 'Kenny' },
];

const usersSlice = createSlice({
   name: 'users',
   initialState,
   reducers: {},
});

export default usersSlice.reducer;
