import { createSlice } from "@reduxjs/toolkit";



const cartSlice = createSlice({
    name:"cart",
    initialState:{
        cartitem:[],
    },
    reducers:{
        addProductToCart:(state,action)=>{
            const item = action.payload;

             const exestingItem = state.cartitem.find(
                (cartItem)=>cartItem._id === item._id
             );
            if (exestingItem) {
                exestingItem.quantity+=1;
            }
            else{
                 state.cartitem.push({...item,quantity:1})
            }
           

        },
        removeProductFromCart:(state,action)=>{
            const id = action.payload;
            state.cartitem = state.cartitem.filter(
                (cartitems)=>cartitems._id != id
            )
            
        }
    }
})


export const {addProductToCart,removeProductFromCart} = cartSlice.actions;
export default cartSlice.reducer;