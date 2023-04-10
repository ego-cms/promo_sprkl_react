/* eslint-disable react/display-name */

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

import React, { forwardRef, MouseEvent, PropsWithChildren, TouchEvent } from 'react'
import { colorsType, spacingsType } from '../types'
import { AvatarIcon, BodyText, Box } from '.'
import { codeToPx } from '../utils'

interface Props {
  size: 'xl' | 'l' | 'm' | 's' | 'xs' | 'xxs' | string
  type: 'icon' | 'picture' | 'letter'
  border: 'circular' | 'rounded' | string
  margin?: spacingsType
  width?: string
  outlineOffset?: string
  outline?: string
  height?: string
  background: colorsType
  color: colorsType
  outlineColor?: colorsType
  onClick?: (e: MouseEvent<HTMLDivElement>) => void
  onMouseDown?: (e: MouseEvent<HTMLDivElement>) => void
  onTouchStart?: (e: TouchEvent<HTMLDivElement>) => void
  onMouseUp?: (e: MouseEvent<HTMLDivElement>) => void
  onMouseLeave?: (e: MouseEvent<HTMLDivElement>) => void
  onTouchEnd?: (e: TouchEvent<HTMLDivElement>) => void
  onMouseOver?: (e: MouseEvent<HTMLDivElement>) => void
  onMouseOut?: (e: MouseEvent<HTMLDivElement>) => void
}

export const Avatar = forwardRef<HTMLDivElement, PropsWithChildren<Props>>(
  (
    {
      size,
      onClick,
      height,
      onMouseOut,
      onMouseOver,
      width,
      children,
      margin,
      type,
      background,
      onMouseDown,
      onTouchStart,
      onMouseUp,
      onMouseLeave,
      onTouchEnd,
      border,
      color,
      outlineOffset = '-1px',
      outline = '1px solid',
      outlineColor = 'black8',
    },
    ref,
  ) => {
    const borderMatrix = {
      circular: 'round',
      rounded: 'l',
    }

    const sizeMatrix = {
      xl: '72px',
      l: '64px',
      m: '56px',
      s: '48px',
      xs: '40px',
      xxs: '32px',
      xxxs: '23px',
    }

    const fontSize = size === 'xs' || 'xxs' ? 's' : 'l'

    return (
      <Box
        overflow="hidden"
        alignItems={type === 'icon' ? 'flex-end' : 'center'}
        justifyContent="center"
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
        borderRadius={codeToPx(border, borderMatrix)}
        outline={outline}
        outlineOffset={outlineOffset}
        outlineColor={outlineColor}
        background={background}
        width={codeToPx(width || size, sizeMatrix)}
        minWidth={codeToPx(width || size, sizeMatrix)}
        height={codeToPx(height || size, sizeMatrix)}
        minHeight={codeToPx(height || size, sizeMatrix)}
        margin={margin}
        onClick={onClick}
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseLeave}
        onTouchEnd={onTouchEnd}
        ref={ref}
      >
        {type === 'letter' && (
          <BodyText color={color} type={fontSize}>
            {children}
          </BodyText>
        )}
        {type === 'icon' && <AvatarIcon />}
        {type === 'picture' && children}
      </Box>
    )
  },
)
