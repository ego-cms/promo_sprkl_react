import React from 'react'
import { DefaultLayout } from '../../layout'
import { Appointment, NewPatients, PatientList } from './components'
import { Box } from 'sprkl'
import { PatientType, Widgets } from '../../components'
import { useTypedSelector } from '../../store'

export const Overview = () => {
  const resolution = useTypedSelector(state => state.resolution)
  const isMobile = resolution === 'mobile'

  return (
    <DefaultLayout title="Overview">
      <Box gap="l" display="grid" gridTemplateColumns="repeat(4, 1fr)">
        <Widgets />

        <Appointment />
        <PatientType gridColumn={isMobile ? '1/5' : '4/5'} />

        <PatientList />
        <NewPatients />
      </Box>
    </DefaultLayout>
  )
}
