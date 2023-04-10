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
import { PropsTextBaseType, TextBase } from './TextBase'

export const BodyText = styled(TextBase)<Props>`
  font-family: Inter, sans-serif;
  line-height: 1.5;
  letter-spacing: -0.015rem;

  ${({ type, theme }) => theme.bodyText[type]}
`

interface Props extends PropsTextBaseType {
  type: 'l' | 'm' | 's' | string
}
