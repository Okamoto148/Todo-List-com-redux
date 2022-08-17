import {configureStore} from '@reduxjs/toolkit';
import userReducer from './userSlicer';

export default configureStore({
  reducer:{
    listaTodo: userReducer,
    
  }
})