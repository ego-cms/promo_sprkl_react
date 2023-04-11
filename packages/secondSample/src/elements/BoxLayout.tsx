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

import React, { FC, ReactNode } from 'react'
import { Box } from 'sprkl'

type Props = {
  minWidth?: string
  margin?: string
  width?: string
  alignItems?: string
  maxWidth?: string
  height?: string
  justifyContent?: string
  children: ReactNode
  directionFlex?: string
  gap?: string
  wrapFlex?: string
  gridColumn?: string
  gridRow?: string
  cursor?: string
  background?: string
  gridTemplateColumns?: string
}

export const BoxLayout: FC<Props> = ({
  margin,
  gridTemplateColumns,
  background = 'neutrals50',
  cursor,
  width = '100%',
  minWidth,
  children,
  alignItems,
  maxWidth,
  height,
  justifyContent,
  directionFlex = 'column',
  gap,
  wrapFlex,
  gridColumn,
  gridRow,
}) => (
  <Box
    background={background}
    gridColumn={gridColumn}
    gridRow={gridRow}
    wrapFlex={wrapFlex}
    gap={gap}
    justifyContent={justifyContent}
    gridTemplateColumns={gridTemplateColumns}
    height={height}
    maxWidth={maxWidth}
    alignItems={alignItems}
    margin={margin}
    minWidth={minWidth}
    cursor={cursor}
    padding="l"
    position="relative"
    width={width}
    borderRadius="l"
    directionFlex={directionFlex}
    shadow="rgb(0 0 0 / 10%) 0rem 0.25rem 0.375rem -0.0625rem, rgb(0 0 0 / 6%) 0rem 0.125rem 0.25rem -0.0625rem;"
  >
    {children}
  </Box>
)
