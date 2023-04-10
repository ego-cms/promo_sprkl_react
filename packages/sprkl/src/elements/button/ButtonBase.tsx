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

import React from 'react'
import styled from 'styled-components'
import { codeToPx } from '../../utils'
import { colorsType, cornersType, spacingsType } from '../../types'

export type PropsButtonBase = {
  margin?: spacingsType
  styleType: 'xl' | 'l' | 'm' | 's' | string
  borderRadius?: cornersType
  color?: colorsType
  width?: string
  height?: string
  disabled?: boolean
  position?: string
  alignSelf?: string
  backgroundHover?: string
  shadowHover?: string
  justifyContent?: string
  backgroundActive?: string
  colorHover?: string
  fontWeight?: number
  textTransform?: string
  border?: string
  background?: colorsType
  borderColor?: colorsType
  right?: string
  top?: string
  bottom?: string
  whiteSpace?: string
  shadow?: string
  tabIndex?: string
  fontSize?: string
}

export const ButtonBase = styled.button<PropsButtonBase>`
  &&& {
    background: ${({ theme, disabled, background }) =>
      disabled ? theme.colors.black64 : theme.colors[background] || background};
    color: ${({ theme, disabled, color }) => (disabled ? theme.colors.black64 : theme.colors[color] || color)};
    height: ${({ height }) => height};

    &:hover {
      background: ${({ theme, disabled, backgroundHover }) =>
        disabled ? theme.colors.black64 : theme.colors[backgroundHover] || backgroundHover};
    }
    &:active {
      background: ${({ theme, backgroundActive, disabled }: any) =>
        disabled ? theme.colors.black64 : theme.colors[backgroundActive] || backgroundActive};
    }
  }

  display: flex;
  align-items: center;
  justify-content: ${({ justifyContent }) => justifyContent};
  width: ${({ width }) => width};

  align-self: ${({ alignSelf }) => alignSelf};
  white-space: ${({ whiteSpace }) => whiteSpace};
  tab-index: ${({ tabIndex }) => tabIndex};

  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};

  border-radius: ${({ borderRadius, theme }) =>
    borderRadius ? codeToPx(borderRadius, theme.corners) : theme.corners.m};
  margin: ${({ margin, theme }) => margin && codeToPx(margin, theme.spacings)};

  font-family: Inter, sans-serif;
  font-style: normal;
  line-height: 24px;
  text-align: center;
  font-weight: ${({ fontWeight }) => fontWeight};
  font-size: ${({ fontSize }) => fontSize};

  border: ${({ border }) => border || '1px solid transparent'};
  border: ${({ borderColor }) => borderColor};
  box-shadow: ${({ shadow }) => shadow};

  -webkit-tap-highlight-color: transparent;
  position: ${({ position }) => position || 'relative'};
  top: ${({ top }) => top};
  right: ${({ right }) => right};
  bottom: ${({ bottom }) => bottom};
  right: ${({ right }) => right};
  outline: none;
  transition: all 0.25s ease;

  text-transform: ${({ textTransform }) => textTransform};

  &:hover {
    box-shadow: ${({ shadowHover }) => shadowHover};
    color: ${({ colorHover }: any) => colorHover};
  }
`
