import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { PostAuthor } from './PostAuthor';
import { ReactionButtons } from './ReactionButtons';
import { TimeAgo } from './TimeAgo';

export const PostsList = () => {
   const posts = useSelector((state) => state.posts);

   const orderedPosts = posts
      .slice()
      .sort((a, b) => b.date.localeCompare(a.date));

   const renderedPosts = orderedPosts.map((post) => (
      <article key={post.id} className='post-content'>
         <h3>{post.title}</h3>
         <p>{post.content}</p>
         <TimeAgo timestamp={post.date} />

         <ReactionButtons post={post} />

         <div className='link-space'>
            <Link to={`/posts/${post.id}`}>View Post</Link>
            <PostAuthor userId={post.user} />
         </div>
      </article>
   ));

   return (
      <section>
         <h2>Posts</h2>
         {renderedPosts}
      </section>
   );
};
