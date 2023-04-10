/* ******************************************************** */
/* 2023 © TheSprkl for React v.1.0 (www.thesprkl.io)      */
/* is a proprietary product developed by                    */
/* EGO Creative Innovations Limited (www.ego-cms.com)       */
/*                                                          */
/* EULA https://www.thesprkl.io/legal/eula                  */
/* Support https://www.thesprkl.io/contact-us               */
/* Discord https://discord.gg/3qjXP9jCra                    */
/*                                                          */
/* ******************************************************** */

import React, { FC, ReactElement, useEffect, useRef } from 'react'
import { Box } from '../elements'
import { colorsType, cornersType, spacingsType } from '../types'

type Props = {
  func: () => void
  borderColor?: colorsType
  borderTopColor?: colorsType
  backgroundHover?: colorsType
  outlineColor?: colorsType
  color?: colorsType
  background?: colorsType
  colorHover?: colorsType

  animation?: string
  transition?: string
  padding?: string
  margin?: spacingsType
  height?: string
  minHeight?: string
  width?: string
  minWidth?: string
  maxHeight?: string
  display?: string
  backgroundImg?: string
  border?: string
  outline?: string
  borderRadius?: cornersType
  borderBottom?: string
  borderRight?: string
  borderTop?: string
  cursor?: string
  opacity?: string
  top?: string
  left?: string
  right?: string
  bottom?: string
  pointEvents?: string
  shadow?: string
  userSelect?: string
  zIndex?: string
  beforeContent?: string
  outlineOffset?: string
  position?: 'relative' | 'static' | 'absolute' | 'fixed' | 'sticky' | string
  textAlign?: 'left' | 'right' | 'center' | string
  backgroundClip?: 'border-box' | 'padding-box' | 'content-box' | 'text' | string
  directionFlex?: 'row' | 'row-reverse' | 'column' | 'column-reverse' | string
  justifyContent?:
    | 'center'
    | 'start'
    | 'end'
    | 'flex-start'
    | 'flex-end'
    | 'left'
    | 'right'
    | 'space-between'
    | 'space-around'
    | 'stretch'
    | string
  alignItems?: 'center' | 'start' | 'end' | 'flex-start' | 'flex-end' | string
  alignSelf?: 'center' | 'start' | 'end' | 'flex-start' | 'flex-end' | string
  wrapFlex?: 'wrap' | 'nowrap' | 'wrap-reverse' | string
  overflowY?: 'scroll' | 'hidden' | 'auto' | 'visible' | string
  overflowX?: 'scroll' | 'hidden' | 'auto' | 'visible' | string
  overflow?: 'scroll' | 'hidden' | 'auto' | 'visible' | string
  children?: ReactElement[] | ReactElement
}

const OutsiderClicker: FC<Props> = ({
  children,
  func,
  width,
  position,
  bottom,
  right,
  directionFlex,
  background,
  shadow,
  padding,
  borderRadius,
  height,
  zIndex,
  top,
  overflow,
}) => {
  const wrapperRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = event => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        func()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('touchstart', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchstart', handleClickOutside)
    }
  }, [wrapperRef])

  return (
    <Box
      zIndex={zIndex}
      overflow={overflow}
      borderRadius={borderRadius}
      padding={padding}
      shadow={shadow}
      directionFlex={directionFlex}
      position={position}
      bottom={bottom}
      right={right}
      height={height}
      top={top}
      width={width || '100%'}
      ref={wrapperRef}
      background={background}
    >
      {children}
    </Box>
  )
}

export default OutsiderClicker
