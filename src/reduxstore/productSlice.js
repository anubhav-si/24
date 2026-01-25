import { createSlice } from "@reduxjs/toolkit";


const productSlice = createSlice({
    name:"product",
    initialState:{
        productList:null,

    },
    reducers:{
        addProductList:(state,action)=>{
            state.productList = action.payload;
        },
    }
})

export default productSlice.reducer;
export const  {addProductList} = productSlice.actions;