import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addNewPost } from './postsSlice';

const AddPostForm = () => {
   const [title, setTitle] = useState('');
   const [content, setContent] = useState('');
   const [userId, setUserId] = useState('');
   const [addReqStatus, setAddReqStatus] = useState('idle');

   const dispatch = useDispatch();

   const users = useSelector((state) => state.users);

   const onTitleChanged = (e) => {
      setTitle(e.target.value);
   };

   const onContentChanged = (e) => {
      setContent(e.target.value);
   };

   const onAuthorChanged = (e) => setUserId(e.target.value);

   const canSave =
      [title, content, userId].every(Boolean) && addReqStatus === 'idle';

   const onSavePostClicked = async () => {
      if (canSave) {
         try {
            setAddReqStatus('pending');
            await dispatch(
               addNewPost({ title, content, user: userId })
            ).unwrap();
            setTitle('');
            setContent('');
            setUserId();
         } catch (err) {
            console.log('failed to save the post', err);
         } finally {
            setAddReqStatus('idle');
         }
      }
   };

   const usersOptions = users.map((user) => (
      <option value={user.id} key={user.id}>
         {user.name}
      </option>
   ));

   return (
      <section>
         <h2>Add a New Post</h2>

         <form>
            <label htmlFor='postTitle'>Post Title: </label>
            <input
               type='text'
               id='postTitle'
               name='postTitle'
               value={title}
               onChange={onTitleChanged}
            />

            <label htmlFor='postAuthor'>Author:</label>
            <select id='postAuthor' value={userId} onChange={onAuthorChanged}>
               <option value=''></option>
               {usersOptions}
            </select>

            <label htmlFor='postContent'>Content:</label>
            <textarea
               name='postContent'
               id='postContent'
               value={content}
               onChange={onContentChanged}
            />
            <button
               type='button'
               onClick={onSavePostClicked}
               disabled={!canSave}
            >
               Save Post
            </button>
         </form>
      </section>
   );
};

export default AddPostForm;
