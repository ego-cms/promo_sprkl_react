import React, { FC } from 'react'
import { Svg } from 'sprkl'

interface Props {
  margin?: string
  color?: string
}

export const CalendarIcon: FC<Props> = ({ margin, color = '#10B981' }) => (
  <Svg
    disabled
    margin={margin}
    width="16"
    height="18"
    viewBox="0 0 16 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14 2.25H13.25V0.75H11.75V2.25H4.25V0.75H2.75V2.25H2C1.175 2.25 0.5 2.925 0.5 3.75V15.75C0.5 16.575 1.175 17.25 2 17.25H14C14.825 17.25 15.5 16.575 15.5 15.75V3.75C15.5 2.925 14.825 2.25 14 2.25ZM14 15.75H2V7.5H14V15.75ZM14 6H2V3.75H14V6Z"
      fill={color}
    />
  </Svg>
)
