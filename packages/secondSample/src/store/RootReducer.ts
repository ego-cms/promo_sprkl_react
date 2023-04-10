import { combineReducers } from 'redux'
import { patientsList } from './patients/slices'
import { resolution } from './resolution/slices'

export default combineReducers({
  patientsList: patientsList.reducer,
  resolution: resolution.reducer,
})
