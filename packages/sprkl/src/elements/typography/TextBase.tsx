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

import styled from 'styled-components'
import { colorsType, spacingsType } from '../../types'
import { codeToPx } from '../../utils'

export interface PropsTextBaseType {
  color?: colorsType
  margin?: spacingsType
  width?: string
  minWidth?: string
  alignSelf?: string
  maxWidth?: string
  whiteSpace?: string
  position?: string
  right?: string
  left?: string
  bottom?: string
  top?: string
  textOverflow?: string
  fontSize?: string
  textAlign?: 'left' | 'right' | 'center' | string
  overflow?: 'scroll' | 'hidden' | 'auto' | 'visible' | string
}

export const TextBase = styled.div<PropsTextBaseType>`
  &&& {
    font-size: ${({ fontSize }) => fontSize};
    width: ${({ width }) => width || 'fit-content'};
  }

  white-space: ${({ whiteSpace }) => whiteSpace};
  overflow: ${({ overflow }) => overflow};

  min-width: ${({ minWidth }) => minWidth};
  max-width: ${({ maxWidth }) => maxWidth};

  color: ${({ color, theme }) => theme.colors[color] || color};
  margin: ${({ margin, theme }) => margin && codeToPx(margin, theme.spacings)};
  text-align: ${({ textAlign }) => textAlign};
  font-style: normal;
  font-weight: 400;

  align-self: ${({ alignSelf }) => alignSelf};
  text-overflow: ${({ textOverflow }) => textOverflow};

  position: ${({ position }) => position || 'relative'};
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  right: ${({ right }) => right};
  bottom: ${({ bottom }) => bottom};
`
