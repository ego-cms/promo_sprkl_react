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
