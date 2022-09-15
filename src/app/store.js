import { configureStore } from '@reduxjs/toolkit';

import postsReducer from '../features/posts/postsSlice';
import usersReducer from '../features/users/usersSlice';
import notficationsReducer from '../features/notficiations/notificationsSlice';

export default configureStore({
   reducer: {
      posts: postsReducer,
      users: usersReducer,
      notification: notficationsReducer,
   },
});
