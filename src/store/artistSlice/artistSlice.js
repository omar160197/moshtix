import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getMoshtixFeed=createAsyncThunk(
  'artist/feeds',
  async(_,thunkAPI)=>{

    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.get("https://www.moshtix.com/mosh2/rss/GenerateFeed.aspx?feedCode=637092548120896629")
      console.log(res.data.rss.channel.item);
      return res.data.rss.channel.item;
    } catch (error) {
      return rejectWithValue(error.message);
    }


  });


const initialState = {
    artistObject:{},
    feeds:[],
    isLoading:false,
    error:false 
  };

  export const artistSlice=createSlice({
      name:"artist",
      initialState,
      reducers:{
        addArtist:(state,action)=>{
            state.artistObject=action.payload
        },
        
       
      },
      extraReducers:{
        [getMoshtixFeed.pending]: (state, action) => {
          console.log(action);
          state.isLoading = true;
          state.error = null;
        },
      
        [getMoshtixFeed.fulfilled]: (state, action) => {
            console.log(action);
            state.isLoading = false;
            state.feeds = action.payload;
        },
      
        [getMoshtixFeed.rejected]: (state, action) => {
            console.log(action);
            state.isLoading = false;
            state.error = action.payload;
          },
      }
  })
  export const { addArtist} = artistSlice.actions;
  export default artistSlice.reducer

