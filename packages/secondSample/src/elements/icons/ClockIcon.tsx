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

export const ClockIcon: FC<Props> = ({ margin, bottom, right }) => (
  <Svg
    position="absolute"
    bottom={bottom}
    right={right}
    margin={margin}
    disabled
    width="64"
    height="54"
    viewBox="0 0 64 54"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M32 3C37.7356 3 43.3425 4.70082 48.1115 7.88738C52.8805 11.0739 56.5975 15.6031 58.7925 20.9022C60.9874 26.2012 61.5617 32.0322 60.4428 37.6576C59.3238 43.2831 56.5618 48.4504 52.5061 52.5061C48.4504 56.5618 43.2831 59.3238 37.6576 60.4428C32.0322 61.5617 26.2012 60.9874 20.9022 58.7925C15.6031 56.5975 11.0739 52.8805 7.88738 48.1115C4.70082 43.3425 3 37.7356 3 32"
      stroke="#6EE7B7"
      strokeWidth="6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22.1113 34.9998H35.0002V18.8887"
      stroke="#6EE7B7"
      strokeWidth="6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
