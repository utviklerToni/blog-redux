import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { PostAuthor } from './PostAuthor';
import { selectPostById } from './postsSlice';
import { ReactionButtons } from './ReactionButtons';
import { TimeAgo } from './TimeAgo';

const SinglePostPage = ({ match }) => {
   const { postId } = match.params;

   // because the state (which is in redux store) has more than one post
   // so we are using find()
   const post = useSelector((state) => selectPostById(state, postId));

   if (!post) {
      return (
         <section>
            <h3>Post not found.</h3>
         </section>
      );
   }

   return (
      <section>
         <Link to={`/`}>Go Back</Link>
         <article className='post'>
            <h2>{post.title}</h2>
            <PostAuthor userId={post.user} />

            <p className='post-content'>{post.content}</p>

            <TimeAgo timestamp={post.date} />
            <ReactionButtons post={post} />

            <br />
            <Link to={`/editPost/${post.id}`} className='button'>
               Edit Post
            </Link>
         </article>
      </section>
   );
};

export default SinglePostPage;
