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
