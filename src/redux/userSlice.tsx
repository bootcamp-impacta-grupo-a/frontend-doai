import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: 'user',
  initialState: {
    name: '',
    isLogged: false,
    token: ''
  },
  reducers: {
    changeUser(state, {payload}) {
      return {...state, isLogged: payload.logged, name: payload.name, token: payload.token}
    },
    logout(state){
      return {...state, isLogged: false, name: '', token: ''}
    }
  }  
})

export const { changeUser , logout } =  slice.actions

export const selectUser = state => state.user

export default slice.reducer 