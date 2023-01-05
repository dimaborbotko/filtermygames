import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { steamAPI } from "../../utils/request";
import axios from "axios";

const steamUrl = `http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${process.env.REACT_APP_STEAM_API_KEY}`;

const initialState = {
  games: null,
  loading: false,
  error: undefined,
};

export const fetchGamesByUserId = createAsyncThunk(
  "user/fetchGamesByUserId",
  async (userId, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${steamUrl}&steamid=${userId}&format=json&include_appinfo=1`
      );
      const games = response.data.response.games.map((game) => {
        return { game, status: "unactive" };
      });
      return games;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const steamSlice = createSlice({
  name: "requests",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchGamesByUserId.pending]: (state) => {
      state.loading = true;
    },
    [fetchGamesByUserId.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.games = payload;
    },
    [fetchGamesByUserId.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export default steamSlice.reducer;
