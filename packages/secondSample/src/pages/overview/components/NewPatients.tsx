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
import { BoxLayout } from '../../../elements'
import { BodyText, Box, LabelText } from 'sprkl'
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { useTypedSelector } from '../../../store'

export const NewPatients = () => {
  const resolution = useTypedSelector(state => state.resolution)
  const isMobile = resolution === 'mobile'

  const data = [
    {
      name: 'M',
      men: 4000,
      women: 2400,
    },
    {
      name: 'T',
      men: 3000,
      women: 1398,
    },
    {
      name: 'W',
      men: 2000,
      women: 9800,
    },
    {
      name: 'T',
      men: 2780,
      women: 3908,
    },
    {
      name: 'F',
      men: 1890,
      women: 4800,
    },
    {
      name: 'S',
      men: 2390,
      women: 3800,
    },
    {
      name: 'S',
      men: 3490,
      women: 4300,
    },
  ]

  return (
    <BoxLayout gridColumn={isMobile ? '1/5' : '3/5'}>
      <Box margin="0 0 l 0" justifyContent="space-between">
        <LabelText color="neutrals500" type="s">
          New patients
        </LabelText>

        <Box directionFlex="column">
          <BodyText color="neutrals500" type="s">
            Men
          </BodyText>
          <BodyText color="neutrals500" type="s">
            Women
          </BodyText>
        </Box>
      </Box>

      <Box height="280px">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar barSize={20} dataKey="men" stackId="a" fill="#C4B5FD" />
            <Bar barSize={20} dataKey="women" stackId="a" fill="#7F66AE" />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </BoxLayout>
  )
}
