import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: 'instituicao',
  initialState: {
    name: ''
  },
  reducers: {
    changeInstituicao(state, {payload}) {
      return {...state, name: payload.name}
    },
    initial(state){
      return {...state, name: ''}
    }
  }  
})

export const { changeInstituicao , initial } =  slice.actions

export const selectInstituicao = state => state.instituicao

export default slice.reducer 