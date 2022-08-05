import { createSlice } from '@reduxjs/toolkit'

const historyInitialState = []

export const movieWatchingHistorySlice = createSlice({
  name: 'movie',
  initialState: historyInitialState,
  reducers: {
    addWatchingHistory(state, action) {
      let index = state.findIndex((item) => item.id == action.payload.id)

      console.log(index, action.payload.id)

      if (index < 0) {
        state.push({
          id: action.payload.id,
          title: action.payload.title,
          watchingNo: 0,
        })
      } else {
        state[index].watchingNo = state[index].watchingNo + 1
      }
    },
  },
})

export const watchHistoryActions = movieWatchingHistorySlice.actions
