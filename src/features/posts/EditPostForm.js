import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

import { postUpdated, selectPostById } from './postsSlice';

const EditPostForm = ({ match }) => {
   const { postId } = match.params;

   const post = useSelector((state) => selectPostById(state, postId));

   const [title, setTitle] = useState(post.title);
   const [content, setContent] = useState(post.content);

   const dispatch = useDispatch();
   const history = useHistory();

   const onTitleChanged = (e) => {
      setTitle(e.target.value);
   };

   const onContentChanged = (e) => {
      setContent(e.target.value);
   };

   const onSavePostClicked = () => {
      if (title && content) {
         dispatch(postUpdated({ id: postId, title, content }));

         setTitle('');
         setContent('');
         history.push(`/posts/${postId}`);
      }
   };

   return (
      <section>
         <Link to={`/`}>Go Back</Link>

         <h2>Edit Post</h2>

         <form>
            <label htmlFor='postTitle'>Post Title:</label>
            <input
               type='text'
               id='postTitle'
               name='postTitle'
               placeholder={`Share your thoughts!`}
               value={title}
               onChange={onTitleChanged}
            />

            <label htmlFor='postContent'>Content:</label>
            <input
               id='postContent'
               name='postContent'
               value={content}
               onChange={onContentChanged}
            />
         </form>

         <button type='button' onClick={onSavePostClicked}>
            Save Post
         </button>
      </section>
   );
};

export default EditPostForm;
