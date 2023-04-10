import React from 'react'
import { BoxLayout } from '../elements'
import { BodyText, Box, HeadlineText } from 'sprkl'
import { Cell, Pie, PieChart } from 'recharts'

export const PatientType = ({ gridColumn }) => {
  const legend = [
    { name: 'Outpatient', color: 'primary900', amount: 2, id: 1 },
    { name: 'Inpatient', color: 'primary300', amount: 2, id: 2 },
    { name: 'Emergency', color: 'accent900', amount: 2, id: 3 },
  ]

  const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
  ]
  const COLORS = ['#6EE7B7', '#C4B5FD', '#8B5CF6']

  return (
    <BoxLayout gridColumn={gridColumn}>
      <HeadlineText margin="0 0 l 0" type="xxs">
        Patient type
      </HeadlineText>

      {legend.map(item => (
        <Box key={item.id} margin="0 0 m 0" alignItems="center">
          <Box height="8px" width="8px" borderRadius="xl" background={item.color} />
          <BodyText margin="0 auto 0 s" color="neutrals500" type="xs">
            {item.name}
          </BodyText>
          <BodyText color="neutrals500" type="xs">
            {item.amount}
          </BodyText>
        </Box>
      ))}

      <Box justifyContent="center">
        <PieChart width={150} height={150}>
          <Pie
            data={data}
            cx={70}
            cy={80}
            innerRadius={50}
            outerRadius={60}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </Box>
    </BoxLayout>
  )
}
