import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice'
import instituicaoReducer from './instituicao'
 
export default configureStore({
  reducer:{
    user: userReducer,
    instituicao: instituicaoReducer

  }
})