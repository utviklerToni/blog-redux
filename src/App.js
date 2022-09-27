import React, { Fragment } from 'react';
import {
   BrowserRouter as Router,
   Switch,
   Route,
   Redirect,
} from 'react-router-dom';

import './App.css';
import { Navbar } from './app/Navbar';
// import ReceipesList from './features/receipes/reactComponent/ReceipesList';
import AddPostForm from './features/posts/AddPostForm';
import EditPostForm from './features/posts/EditPostForm';
import { PostsList } from './features/posts/PostsList';
import SinglePostPage from './features/posts/SinglePostPage';

function App() {
   return (
      <Router>
         <Navbar />
         <div className='App'>
            <Switch>
               <Route
                  exact
                  path='/'
                  render={() => (
                     <Fragment>
                        <AddPostForm />
                        <PostsList />
                        {/* <ReceipesList /> */}
                     </Fragment>
                  )}
               />
               <Route exact path='/posts/:postId' component={SinglePostPage} />
               <Route exact path='/editPost/:postId' component={EditPostForm} />

               <Redirect to='/' />
            </Switch>
         </div>
      </Router>
   );
}

export default App;
