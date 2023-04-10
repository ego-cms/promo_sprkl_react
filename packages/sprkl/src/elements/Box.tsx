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

import styled from 'styled-components'
import { colorsType, cornersType, spacingsType } from '../types'
import { codeToPx } from '../utils'

type Props = {
  borderColor?: colorsType
  borderTopColor?: colorsType
  backgroundHover?: colorsType
  outlineColor?: colorsType
  color?: colorsType
  background?: colorsType
  colorHover?: colorsType
  padding?: spacingsType
  margin?: spacingsType
  borderRadius?: cornersType

  animation?: string
  transition?: string
  height?: string
  minHeight?: string
  width?: string
  minWidth?: string
  maxHeight?: string
  display?: string
  backgroundImg?: string
  border?: string
  borderHover?: string
  outline?: string
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
  maxWidth?: string
  backgroundPosition?: string
  beforeContent?: string
  gap?: string
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
  boxSizing?: string
  gridTemplateColumns?: string
  gridColumn?: string
  gridRow?: string
}

export const Box = styled.div<Props>`
  box-sizing: ${({ boxSizing }) => boxSizing || 'border-box'};
  animation: ${({ animation }) => animation};
  transition: ${({ transition }) => transition};

  overflow-y: ${({ overflowY }) => overflowY};
  overflow-x: ${({ overflowX }) => overflowX};
  overflow: ${({ overflow }) => overflow};

  padding: ${({ padding, theme }) => padding && codeToPx(padding, theme.spacings)};
  margin: ${({ margin, theme }) => margin && codeToPx(margin, theme.spacings)};
  gap: ${({ gap, theme }) => gap && codeToPx(gap, theme.spacings)};

  height: ${({ height }) => height};
  min-height: ${({ minHeight }) => minHeight};
  width: ${({ width }) => width};
  min-width: ${({ minWidth }) => minWidth};
  max-width: ${({ maxWidth }) => maxWidth};
  max-height: ${({ maxHeight }) => maxHeight};

  display: ${({ display }) => display || 'flex'};
  flex-direction: ${({ directionFlex }) => directionFlex};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  align-self: ${({ alignSelf }) => alignSelf};
  flex-wrap: ${({ wrapFlex }) => wrapFlex};
  gap: ${({ gap }) => gap};

  grid-template-columns: ${({ gridTemplateColumns }) => gridTemplateColumns};
  grid-column: ${({ gridColumn }) => gridColumn};
  grid-row: ${({ gridRow }) => gridRow};

  background: ${({ background, theme }) => theme.colors[background] || background};
  background-image: ${({ backgroundImg }) => backgroundImg && `url(${backgroundImg}`};
  background-clip: ${({ backgroundClip }) => backgroundClip};
  background-position: ${({ backgroundPosition }) => backgroundPosition};

  border: ${({ border }) => border};
  border-radius: ${({ borderRadius, theme }) => borderRadius && codeToPx(borderRadius, theme.corners)};
  border-bottom: ${({ borderBottom, theme }) => borderBottom && codeToPx(borderBottom, theme.corners)};
  border-top: ${({ borderTop, theme }) => borderTop && codeToPx(borderTop, theme.corners)};
  border-right: ${({ borderRight, theme }) => borderRight && codeToPx(borderRight, theme.corners)};
  border-color: ${({ borderColor, theme }) => theme.colors[borderColor] || borderColor};
  border-top-color: ${({ borderTopColor, theme }) => theme.colors[borderTopColor] || borderTopColor};

  outline: ${({ outline }) => outline};
  outline-offset: ${({ outlineOffset }) => outlineOffset};
  outline-color: ${({ outlineColor, theme }) => theme.colors[outlineColor] || outlineColor};

  cursor: ${({ cursor }) => cursor};

  text-align: ${({ textAlign }) => textAlign || 'left'};
  opacity: ${({ opacity }) => opacity || '1'};

  color: ${({ color, theme }) => theme.colors[color] || color};

  position: ${({ position }) => position || 'relative'};
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  right: ${({ right }) => right};
  bottom: ${({ bottom }) => bottom};

  pointer-events: ${({ pointEvents }) => pointEvents};

  box-shadow: ${({ shadow }) => shadow};
  user-select: ${({ userSelect }) => userSelect};
  z-index: ${({ zIndex }) => zIndex};

  &:hover {
    background: ${({ backgroundHover, theme }) => theme.colors[backgroundHover] || backgroundHover};
    color: ${({ colorHover, theme }) => theme.colors[colorHover] || colorHover};
    border: ${({ borderHover }) => borderHover};
  }

  &:before {
    ${({ beforeContent }) => beforeContent}
  }
`
