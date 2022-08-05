import { configureStore } from '@reduxjs/toolkit'
import { movieWatchingHistorySlice } from './movieWatchingHistory'

const store = configureStore({
  reducer: { movieWatchingHistory: movieWatchingHistorySlice.reducer },
})

export default store
