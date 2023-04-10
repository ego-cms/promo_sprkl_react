import React, { FC } from 'react'
import { Svg } from 'sprkl'

interface Props {
  margin?: string
  bottom: string
  right: string
}

export const PatientPlusIcon: FC<Props> = ({ margin, bottom, right }) => (
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
    <g clipPath="url(#clip0_1_871)">
      <path
        d="M47 39.3334C44.8326 41.8212 42.0932 43.7126 39.0314 44.8351C35.9697 45.9576 32.683 46.2755 29.4709 45.7599C26.2588 45.2443 23.2236 43.9115 20.6417 41.883C18.0598 39.8545 16.0135 37.1949 14.6893 34.1465C13.365 31.0981 12.8049 27.7579 13.0601 24.4304C13.3152 21.1028 14.3775 17.8938 16.1501 15.0957C17.9226 12.2976 20.3491 9.99945 23.2083 8.41074C26.0675 6.82204 29.2686 5.9933 32.5197 6.00004C35.2538 6.00572 37.9562 6.60227 40.451 7.75087C42.9458 8.89947 45.1772 10.5744 47 12.6667"
        stroke="#7C3AED"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.5248 42.0661C15.4856 43.9398 12.0716 46.8939 9.67809 50.5864C7.28454 54.279 6.99375 55.6281 6 60M60.0992 60C59.1182 55.6168 58.8335 54.2536 56.4392 50.5483C54.0449 46.8429 50.624 43.8785 46.5744 42"
        stroke="#7C3AED"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M66 26H52M59 33V19" stroke="#7C3AED" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
    </g>
    <defs>
      <clipPath id="clip0_1_871">
        <rect width="72" height="60" fill="white" />
      </clipPath>
    </defs>
  </Svg>
)
