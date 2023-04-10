import { createSlice } from '@reduxjs/toolkit'
import { patients } from './data'

export const patientsList = createSlice({
  name: 'patientsList',
  initialState: patients,
  reducers: {
    setResolution: state => state,
  },
})

export const { setResolution } = patientsList.actions
