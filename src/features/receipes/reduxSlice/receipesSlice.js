import { createSlice } from '@reduxjs/toolkit';

const initialState = [
   {
      id: '1',
      title: 'Fried Rice',
      description:
         'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima possimus doloribus voluptates iste incidunt sunt nesciunt in dolorem consequatur ad nihil labore aperiam vitae dolore mollitia, vero sed. Odit, officiis?',
      ingredients:
         ' Minima possimus doloribus voluptates iste incidunt sunt nesciunt in dolorem consequatur Minima possimus doloribus voluptates iste incidunt sunt nesciunt in dolorem consequatur Minima possimus doloribus voluptates iste incidunt sunt nesciunt in dolorem consequatur',
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.healthygffamily.com%2Fwp-content%2Fuploads%2F2017%2F12%2FIMG_9821.jpg&f=1&nofb=1&ipt=792a7d15d7a33297c5ac5ace273b33eb9e18467b3d7b9f26f9a734684f9be3a8&ipo=images',
   },

   {
      id: '2',
      title: 'Cauliflower Manchurian',
      description:
         'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima possimus doloribus voluptates iste incidunt sunt nesciunt in dolorem consequatur ad nihil labore aperiam vitae dolore mollitia, vero sed. Odit, officiis?',
      ingredients:
         ' Minima possimus doloribus voluptates iste incidunt sunt nesciunt in dolorem consequatur Minima possimus doloribus voluptates iste incidunt sunt nesciunt in dolorem consequatur Minima possimus doloribus voluptates iste incidunt sunt nesciunt in dolorem consequatur',
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmaunikagowardhan.co.uk%2Fwp-content%2Fuploads%2F2018%2F11%2FGobi-Manchurian.jpg&f=1&nofb=1&ipt=bbec1dfaf5f764460613281dfc2b99e79d2397673dd036a41ab27033d83fe1e8&ipo=images',
   },

   {
      id: '3',
      title: 'Veg Noodle Soup',
      description:
         'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima possimus doloribus voluptates iste incidunt sunt nesciunt in dolorem consequatur ad nihil labore aperiam vitae dolore mollitia, vero sed. Odit, officiis?',
      ingredients:
         ' Minima possimus doloribus voluptates iste incidunt sunt nesciunt in dolorem consequatur Minima possimus doloribus voluptates iste incidunt sunt nesciunt in dolorem consequatur Minima possimus doloribus voluptates iste incidunt sunt nesciunt in dolorem consequatur',
      image: 'https://images.pexels.com/photos/3493579/pexels-photo-3493579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
   },
];

const receipesSlice = createSlice({
   name: 'receipe',
   initialState,
   reducers: {},
});

export default receipesSlice.reducer;
