import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ResolutionType } from '../../types'

export const resolution = createSlice({
  name: 'resolution',
  initialState: 'desktop' as ResolutionType,
  reducers: {
    setResolution: (state, { payload }: PayloadAction<ResolutionType>) => payload,
  },
})

export const { setResolution } = resolution.actions
