import { configureStore } from '@reduxjs/toolkit';

import receipeReducer from '../features/receipes/reduxSlice/receipesSlice';

export default configureStore({
   reducer: {
      dish: receipeReducer,
   },
});
