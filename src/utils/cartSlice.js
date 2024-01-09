import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      //aapde directly state ne change karie chie
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    clearCart: (state, action) => {
      //aam niche mujab karsu to te error aapse karan ke aapde state ne aa rite sidhu badli na sakie
      // state=[]
      state.items.length = 0;
      //return kari sakay niche mujab ane return je karsu aapde teh state ma replace thai jase
      // return{items:[]};
    },
  },
});

//aama createSlice je return karse te hase ek object je niche mujab dekhato hase matlab cartSlice ma te object store thase
// cartSlice={
//     actions:{
//         addItem,
//         removeItem,
//         clearCart
//     },
//     reducer:{

//     }
// }
//to aapde cartSlice.actions ma thi addItem,removeItem ane clearCart ne export karyu ane reducer ne export karyu
export const {addItem,removeItem,clearCart}=cartSlice.actions;
export default cartSlice.reducer;