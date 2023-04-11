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

import React, { FC } from 'react'
import { Svg } from 'sprkl'

interface Props {
  margin?: string
  bottom: string
  right: string
}

export const PatientIcon: FC<Props> = ({ margin, bottom, right }) => (
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
    <g clipPath="url(#clip0_1_880)">
      <circle cx="36" cy="26" r="20" stroke="#6EE7B7" strokeWidth="6" />
      <path
        d="M22.5248 42.0661C18.4856 43.9398 15.0716 46.8939 12.6781 50.5864C10.2845 54.279 9.99375 55.6281 9 60M63.0992 60C62.1182 55.6168 61.8335 54.2536 59.4392 50.5483C57.0449 46.8429 53.624 43.8785 49.5744 42"
        stroke="#6EE7B7"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_1_880">
        <rect width="72" height="60" fill="white" />
      </clipPath>
    </defs>
  </Svg>
)
