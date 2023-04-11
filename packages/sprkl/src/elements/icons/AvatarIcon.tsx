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
import { Svg } from '../index'

interface Props {
  margin?: string
}

export const AvatarIcon: FC<Props> = () => (
  <Svg
    disabled
    width="68"
    height="61"
    viewBox="0 0 68 61"
    preserveAspectRatio="xMidYMax meet"
    x="105"
    y="0"
    fill="none"
  >
    <path
      d="M66.8333 73.5492C66.8333 91.5378 52.1369 106.127 34 106.127C15.863 106.127 1.16663 91.5378 1.16663 73.5492C1.16663 55.5605 15.863 40.9713 34 40.9713C52.1369 40.9713 66.8333 55.5605 66.8333 73.5492Z"
      fill="url(#paint0_linear_2909_326)"
      stroke="url(#paint1_linear_2909_326)"
    />
    <path
      d="M50.1666 17.3167C50.1666 26.1712 42.9322 33.3557 33.9999 33.3557C25.0677 33.3557 17.8333 26.1712 17.8333 17.3167C17.8333 8.46227 25.0677 1.27777 33.9999 1.27777C42.9322 1.27777 50.1666 8.46227 50.1666 17.3167Z"
      fill="url(#paint2_linear_2909_326)"
      stroke="url(#paint3_linear_2909_326)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_2909_326"
        x1="-32.6667"
        y1="73.5492"
        x2="33.4871"
        y2="140.214"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset="1" stopColor="white" stopOpacity="0.01" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_2909_326"
        x1="-32.6667"
        y1="73.5492"
        x2="33.4871"
        y2="140.214"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" stopOpacity="0.482818" />
        <stop offset="1" stopColor="white" stopOpacity="0.01" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_2909_326"
        x1="67.3333"
        y1="17.3167"
        x2="34.2563"
        y2="-16.0156"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" stopOpacity="0.01" />
        <stop offset="1" stopColor="white" />
      </linearGradient>
      <linearGradient
        id="paint3_linear_2909_326"
        x1="1.70387"
        y1="19.3754"
        x2="34.7971"
        y2="50.6487"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" stopOpacity="0.473612" />
        <stop offset="1" stopColor="white" stopOpacity="0.01" />
      </linearGradient>
    </defs>
  </Svg>
)
