import React, { FC } from 'react'
import { Svg } from 'sprkl'

interface Props {
  margin?: string
}

export const SmallPatientIcon: FC<Props> = ({ margin }) => (
  <Svg
    disabled
    margin={margin}
    width="17"
    height="19"
    viewBox="0 0 17 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.55532 12.3333C11.6849 12.3333 14.222 9.79626 14.222 6.66665C14.222 3.53705 11.6849 1 8.55532 1C5.42572 1 2.88867 3.53705 2.88867 6.66665C2.88867 9.79626 5.42572 12.3333 8.55532 12.3333Z"
      stroke="#0EA5E9"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.77777 11.1055C3.65098 11.64 2.69835 12.4822 2.02988 13.5351C1.36142 14.5879 1.00438 15.8084 1 17.0555C1 17.3059 1.0995 17.5462 1.27662 17.7233C1.45374 17.9004 1.69396 17.9999 1.94444 17.9999H15.1666C15.4171 17.9999 15.6573 17.9004 15.8345 17.7233C16.0116 17.5462 16.1111 17.3059 16.1111 17.0555C16.112 15.8035 15.7575 14.5771 15.0887 13.5187C14.42 12.4604 13.4644 11.6137 12.3333 11.0771"
      stroke="#0EA5E9"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
