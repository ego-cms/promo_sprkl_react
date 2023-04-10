import React, { FC } from 'react'
import { Svg } from 'sprkl'

interface Props {
  margin?: string
  bottom: string
  right: string
}

export const ChartIcon: FC<Props> = ({ margin, bottom, right }) => (
  <Svg
    position="absolute"
    bottom={bottom}
    right={right}
    margin={margin}
    disabled
    width="72"
    height="60"
    viewBox="0 0 72 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_1_888)">
      <path
        d="M6 52.1429V60M36 44.2857V60M21 36.4286V60M51 28.5714V60M66 5V60"
        stroke="#6EE7B7"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_1_888">
        <rect width="72" height="60" fill="white" transform="matrix(-1 0 0 1 72 0)" />
      </clipPath>
    </defs>
  </Svg>
)
