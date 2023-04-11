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

import React from 'react'
import { Box } from 'sprkl'
import { items } from './data'
import MenuItem from './elements/MenuItem'

export const Navigation = ({ isMobile }) => (
  <Box alignItems={isMobile ? 'center' : 'start'} directionFlex={'column'} height="100%" gap={isMobile ? '5px' : '0'}>
    {items.map(item => (
      <MenuItem title={isMobile ? '' : item.name} link={item.link} key={item.id} icon={item.icon} />
    ))}

    <Box width="100%" borderBottom="1px solid" borderColor="neutrals200" />
  </Box>
)
