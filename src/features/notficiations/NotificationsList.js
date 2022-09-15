import React from 'react';
import { useSelector } from 'react-redux';
import { formatDistanceToNow, parseISO } from 'date-fns';

import {
   allNotificationsRead,
   selectAllNotifications,
} from './notificationsSlice';

import classnames from 'classnames';

import { selectAllUsers } from '../users/usersSlice';
import { useDispatch } from 'react-redux';
import { useLayoutEffect } from 'react';

const NotificationsList = () => {
   const dispatch = useDispatch();

   const notifications = useSelector(selectAllNotifications);
   const users = useSelector(selectAllUsers);

   // fires synchronously after all DOM mutations so,
   // Use this to read layout from the DOM and synchronously re-render.
   useLayoutEffect(() => {
      dispatch(allNotificationsRead());
   });

   const renderedNotifications = notifications.map((notification) => {
      const date = parseISO(notification.date);
      const timeAgo = formatDistanceToNow(date);

      const user = users.find((user) => user.id === notification.user) || {
         name: 'unknown user',
      };

      const notificationClassname = classnames('notification', {
         new: notification.isNew,
      });

      return (
         <div key={notification.id} className={notificationClassname}>
            <div>
               <b>{user.name}</b>
               {notification.message}
            </div>
            <div title={notification.date}>
               <i>{timeAgo}</i>
            </div>
         </div>
      );
   });

   return (
      <section className='notificationsList'>
         <h2>Notifications</h2>
         {renderedNotifications}
      </section>
   );
};

export default NotificationsList;
