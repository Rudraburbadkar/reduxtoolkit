import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () =>{
    const res = await fetch("https://fakestoreapi.com/products")
    return res.json();
  }

);

const productsSlice = createSlice({
    name: "products",
    initialState:{
        items:[],
        status: "idle",
    },

    reducers: {},
    extraReducers: (builder) =>{ //handling async states
        builder.addCase(fetchProducts.pending , (state) =>{ //triggered when dispatch(fetchProducts()) called
            state.status = "loading";  //api call started
        }),

        builder.addCase(fetchProducts.fulfilled,(state,action) =>{
            state.status = "succeeded";
            state.items = action.payload;
        }),

        builder.addCase(fetchProducts.rejected,(state) =>{
            state.status = "failed"; //triggered when api call fails
        });
    }
});

export default productsSlice.reducer;