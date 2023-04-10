import React, { FC } from 'react'
import { Svg } from '../index'

interface Props {
  top?: string
  right?: string
  position?: string
  onClick?: () => void
  margin?: string
}

export const ClearIcon: FC<Props> = ({ top, right, position, onClick, margin }) => (
  <Svg
    margin={margin}
    position={position}
    right={right}
    top={top}
    onClick={onClick}
    cursor="pointer"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 12C2 6.486 6.486 2 12 2C17.514 2 22 6.486 22 12C22 17.514 17.514 22 12 22C6.486 22 2 17.514 2 12ZM14.8326 7.7598L16.2466 9.1743L13.4146 12.0063L16.2491 14.8373L14.8361 16.2523L12.0006 13.4208L9.1776 16.2433L7.7636 14.8293L10.5856 12.0073L7.7601 9.1858L9.1736 7.7703L11.9996 10.5928L14.8326 7.7598Z"
      fill="#DC2626"
    />
  </Svg>
)
