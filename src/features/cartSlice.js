import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const initialState = {
    items:[],
    totalQuantity:0,
    totalPrice:0,
};
const cartSlice = createSlice({
    name: "cart",
    initialState,

    reducers: {
        //addToCart if exist increase quantity else add item
        addToCart: (state, action) =>{
         const item = state.items.find((item) => item.id === action.payload.id);

         if(item){
            item.quantity += 1;
         }else{
            state.items.push({...action.payload,quantity:1});
         }
        },
        
        //remove from cart skip or filter out same item id
        removeFromCart: (state,action) =>{
            state.items = state.items.filter((item) => item.id !== action.payload.id);
        },

        //increase quantity
        increment : (state,action) =>{
            const item = state.items.find((i) => i.id === action.payload.id);
            if(item){
                item.quantity += 1;
            }
        },
        //decrease quantity
        decrement : (state,action) =>{
            const item = state.items.find((i) =>i.id === action.payload.id);
            if(item && item.quantity > 1){
                item.quantity -= 1;
            }
            if(item.quantity === 1){
                state.items = state.items.filter((i) => i.id !== action.payload.id);
            }
        }
    },

});

export const { addToCart,removeFromCart,increment,decrement} = cartSlice.actions;
export default cartSlice.reducer;