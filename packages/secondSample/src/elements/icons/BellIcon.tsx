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
  color?: string
}

export const BellIcon: FC<Props> = ({ margin, color = '#111827' }) => (
  <Svg
    disabled
    margin={margin}
    width="19"
    height="21"
    viewBox="0 0 19 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.17166 7.875L2.17166 7.87321C2.16943 6.93858 2.35159 6.01269 2.70771 5.14856C3.06384 4.28443 3.58693 3.49904 4.24703 2.83737C4.90712 2.17569 5.69126 1.65073 6.55454 1.29255C7.41782 0.934366 8.34327 0.749997 9.27791 0.75H9.33165C13.2116 0.776676 16.3842 4.00321 16.3842 7.95938V8.625C16.3842 11.8555 17.0418 13.7451 17.6564 14.8029C17.7544 14.9744 17.8059 15.1686 17.8058 15.3662C17.8057 15.5644 17.7537 15.7591 17.655 15.9309C17.5562 16.1028 17.4141 16.2457 17.2429 16.3456C17.0723 16.4451 16.8787 16.4983 16.6813 16.5H13.3842H12.7025L12.6376 17.1786C12.5576 18.0142 12.1691 18.7901 11.5479 19.3547C10.9267 19.9193 10.1174 20.2321 9.27791 20.2321C8.43845 20.2321 7.62912 19.9193 7.00791 19.3547C6.3867 18.7901 5.9982 18.0142 5.91825 17.1786L5.85333 16.5H5.17166H1.8745C1.67707 16.4983 1.4835 16.4451 1.31292 16.3456C1.1417 16.2457 0.999638 16.1028 0.900873 15.9309C0.802106 15.7591 0.750089 15.5644 0.75 15.3662C0.749912 15.1686 0.801424 14.9745 0.899422 14.8029C1.51402 13.7452 2.17166 11.8555 2.17166 8.625L2.17166 7.875Z"
      stroke={color}
      strokeWidth="1.5"
    />
  </Svg>
)
