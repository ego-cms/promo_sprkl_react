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
import { codeToPx } from '../utils'

interface ISvg {
  position?: string
  left?: string
  top?: string
  margin?: string
  cursor?: string
  fill?: string
  disabled?: boolean
  alignSelf?: string
  display?: string
  transform?: string
  transition?: string
  right?: string
  bottom?: string
}

export const Svg: any = styled.svg<ISvg>`
  width: ${({ width }) => width};
  preserveaspectratio: ${({ preserveAspectRatio }) => preserveAspectRatio};
  x: ${({ x }) => x};
  y: ${({ y }) => y};

  path {
    fill: ${({ disabled }) => (disabled ? '' : 'currentColor')};
  }
  position: ${({ position }) => position};
  left: ${({ left }) => left};
  right: ${({ right }) => right};
  top: ${({ top }) => top};
  bottom: ${({ bottom }) => bottom};

  margin: ${({ margin, theme }) => margin && codeToPx(margin, theme.spacings)};
  cursor: ${({ cursor }) => cursor};
  align-self: ${({ alignSelf }) => alignSelf};
  display: ${({ display }) => display};
  transition: ${({ transition }) => transition};
  transform: ${({ transform }) => transform};
  -webkit-transform: ${({ transform }) => transform};
  -moz-transform: ${({ transform }) => transform};
  -o-transform: ${({ transform }) => transform};
  -ms-transform: ${({ transform }) => transform};
`
