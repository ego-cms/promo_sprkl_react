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
import { BoxLayout, CalendarIcon, Styles, Table } from '../../../elements'
import { Avatar, BodyText, Box, HeadlineText, LabelText } from 'sprkl'
import avatar1 from '../../../assets/avatar1.png'
import avatar2 from '../../../assets/avatar2.png'
import avatar3 from '../../../assets/avatar3.png'
import { useTypedSelector } from '../../../store'
import avatar4 from '../../../assets/avatar4.png'
import avatar5 from '../../../assets/avatar5.png'
import avatar6 from '../../../assets/avatar6.png'

export const Appointment = () => {
  const patientsList = useTypedSelector(state => state.patientsList)
  const resolution = useTypedSelector(state => state.resolution)
  const isMobile = resolution === 'mobile'

  const columns = [
    {
      Header: (
        <LabelText color="neutrals900" type="s">
          Name
        </LabelText>
      ),
      accessor: 'name',
    },
    {
      Header: (
        <LabelText color="neutrals900" type="s">
          Reason for visit
        </LabelText>
      ),
      accessor: 'reason',
    },
    {
      Header: (
        <LabelText color="neutrals900" type="s">
          Diagnosis
        </LabelText>
      ),
      accessor: 'diagnosis',
    },
    {
      Header: (
        <LabelText color="neutrals900" type="s">
          Time
        </LabelText>
      ),
      accessor: 'time',
    },
  ]

  const imgMatrix = {
    avatar1,
    avatar2,
    avatar3,
    avatar4,
    avatar5,
    avatar6,
  }

  const data = patientsList.map(item => ({
    name: item.name,
    avatar: imgMatrix[item.img],
    reason: item.appointments.reason,
    diagnosis: item.appointments.diagnose,
    time: item.appointments.time,
    id: item.id,
  }))

  const tableData = data.map(({ name, avatar, reason, diagnosis, time, id }) => ({
    name: (
      <Box alignItems="center">
        <Avatar margin="0 xs 0 0" color="white100" type="picture" background="primary600" size="xxxs" border="circular">
          <img style={{ height: '102%', width: '100%', objectFit: 'cover' }} src={avatar} />
        </Avatar>
        <BodyText type="s">{name}</BodyText>
      </Box>
    ),
    reason: (
      <BodyText color="neutrals500" type="s">
        {reason}
      </BodyText>
    ),
    diagnosis: (
      <BodyText color="neutrals500" type="s">
        {diagnosis}
      </BodyText>
    ),
    time: (
      <BodyText color="neutrals500" type="s">
        {time}
      </BodyText>
    ),
    id: String(id),
  }))

  return (
    <BoxLayout gridColumn={isMobile ? '1/5' : '1/4'}>
      <Box alignItems="center" position="relative" margin="0 0 xl 0">
        <Box
          alignItems="center"
          justifyContent="center"
          margin="0 s 0 0"
          borderRadius="m"
          height="32px"
          width="32px"
          background="accent300"
        >
          <CalendarIcon />
        </Box>
        <Box>
          <HeadlineText margin="0 xs 0 0" type="xxs">
            {"Today's Appointments"}
          </HeadlineText>
          <HeadlineText color="neutrals400" type="xxs">
            ({data.length})
          </HeadlineText>
        </Box>
      </Box>

      <Styles>
        <Table columns={columns} data={tableData} />
      </Styles>
    </BoxLayout>
  )
}
