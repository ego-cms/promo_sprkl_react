/* ******************************************************** */
/* 2023 © TheSprkl for React PROMO (www.thesprkl.io)      */
/* is a proprietary product developed by                    */
/* EGO Creative Innovations Limited (www.ego-cms.com)       */
/* This is a reduced demo version of TheSprkl, the rights   */
/* and terms of use of which are governed by a separate     */
/* commercial license.                                      */
/*                                                          */
/* This promo version is fully functional but contains a    */
/* limited number of items.                                 */
/*                                                          */
/* EULA https://www.thesprkl.io/legal/eula                  */
/* Support https://www.thesprkl.io/contact-us               */
/* Discord https://discord.gg/3qjXP9jCra                    */
/*                                                          */
/* ******************************************************** */

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
