import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fakeGames: [
    {
      name: "Witcher",
      label: "witcher",
      index: 0,
    },
    {
      name: "Witcher",
      label: "witcher",
      index: 1,
    },
    {
      name: "Witcher",
      label: "witcher",
      index: 2,
    },
    {
      name: "Witcher",
      label: "witcher",
      index: 3,
    },
    {
      name: "Witcher",
      label: "witcher",
      index: 4,
    },
    {
      name: "Witcher",
      label: "witcher",
      index: 5,
    },
    {
      name: "Witcher",
      label: "witcher",
      index: 6,
    },
    {
      name: "Witcher",
      label: "witcher",
      index: 7,
    },
    {
      name: "Witcher",
      label: "witcher",
      index: 8,
    },
    {
      name: "Witcher",
      label: "witcher",
      index: 9,
    },
    {
      name: "Witcher",
      label: "witcher",
      index: 10,
    },
    {
      name: "Witcher",
      label: "witcher",
      index: 11,
    },
    {
      name: "Witcher",
      label: "witcher",
      index: 12,
    },
    {
      name: "Witcher",
      label: "witcher",
      index: 13,
    },
    {
      name: "Witcher",
      label: "witcher",
      index: 14,
    },
  ],

  fakeStatus: [
    {
      label: "Unactive",
      value: "unactive",
      id: 0,
      style: "px-2 py-1 rounded-full bg-[#e9e9e9]",
    },
    {
      label: "Will play",
      value: "willPlay",
      id: 1,
      style: "px-2 py-1 rounded-full bg-[#ceb8db]",
    },
    {
      label: "In progress",
      value: "inProgress",
      id: 2,
      style: "px-2 py-1 rounded-full bg-[#26896a]",
    },
    {
      label: "Finished",
      value: "finished",
      id: 3,
      style: "px-2 py-1 rounded-full bg-[#baa7ed]",
    },
  ],

  willPlay: [],
  inProgress: [],
  finished: [],
};

export const fakeSlice = createSlice({
  name: "fake",
  initialState,
  reducers: {
    addToWillPlay(state, action) {
      state.willPlay.push(action.payload);
    },
    removeFromWillPlay(state, action) {
      state.willPlay = state.willPlay.filter((el) => el !== action.payload);
    },

    addToInProgress(state, action) {
      state.inProgress.push(action.payload);
    },
    removeFromInProgress(state, action) {
      state.inProgress = state.inProgress.filter((el) => el !== action.payload);
    },

    addToFinished(state, action) {
      state.finished.push(action.payload);
    },
    removeFromFinished(state, action) {
      state.finished = state.finished.filter((el) => el !== action.payload);
    },
  },
});

export const {
  addToWillPlay,
  removeFromWillPlay,
  addToInProgress,
  removeFromInProgress,
  addToFinished,
  removeFromFinished,
} = fakeSlice.actions;

export default fakeSlice.reducer;
