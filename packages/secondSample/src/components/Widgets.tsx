import React, { FC } from 'react'
import { ChartIcon, ClockIcon, PatientIcon, PatientPlusIcon } from '../elements'
import { BodyText, Box, HeadlineText, LabelText } from 'sprkl'
import { useTypedSelector } from '../store'

type Props = {
  item?: {
    title: string
    titleColor: string
    amount: any
    amountColor: string
    icon: JSX.Element
    background: string
    id: number
    additionalText?: string
  }[]
}

const widgetsMatrix = [
  {
    title: "Today's appointments",
    titleColor: 'white100',
    amount: '15',
    amountColor: 'white100',
    icon: <PatientPlusIcon bottom="0" right="20px" />,
    background: 'linear-gradient(131.88deg, #8863F1 14.13%, #B589FD 98.66%)',
    id: 1,
  },
  {
    title: 'All appointments',
    titleColor: 'neutrals500',
    amount: '47',
    amountColor: 'neutrals900',
    icon: <PatientIcon bottom="0" right="20px" />,
    background: 'linear-gradient(326.72deg, #A7F3D0 37%, #A7F3E1 96.71%)',
    id: 2,
  },
  {
    title: 'Events today',
    titleColor: 'neutrals500',
    amount: '5',
    amountColor: 'neutrals900',
    icon: <ChartIcon bottom="0" right="20px" />,
    background: 'linear-gradient(326.72deg, #A7F3D0 37%, #A7F3E1 96.71%)',
    id: 3,
  },
  {
    title: 'Your shift today',
    titleColor: 'neutrals500',
    amount: '8',
    additionalText: 'Hours',
    amountColor: 'neutrals900',
    icon: <ClockIcon bottom="0" right="20px" />,
    background: 'linear-gradient(326.72deg, #A7F3D0 37%, #A7F3E1 96.71%)',
    id: 4,
  },
]

export const Widgets: FC<Props> = ({ item = widgetsMatrix }) => {
  const resolution = useTypedSelector(state => state.resolution)
  const isMobile = resolution === 'mobile'

  const matrix = ['1/3', '3/5', '1/3', '3/5']
  const gridColumn = index => (isMobile ? matrix[index] : `${index + 1}/${index + 1}`)

  return (
    <>
      {item.map((item, index) => (
        <Box
          gridColumn={gridColumn(index)}
          key={item.id}
          height="128px"
          background={item.background}
          borderRadius="l"
          padding="xl"
          directionFlex="column"
          shadow={index === 0 ? '0px 10px 16px rgba(178, 108, 249, 0.5);' : 'none'}
        >
          <LabelText type="s" color={item.titleColor}>
            {item.title}
          </LabelText>
          <HeadlineText type="m" color={item.amountColor}>
            {item.amount}
          </HeadlineText>
          <BodyText type="xs" color={item.amountColor}>
            {item.additionalText}
          </BodyText>

          {item.icon}
        </Box>
      ))}
    </>
  )
}
