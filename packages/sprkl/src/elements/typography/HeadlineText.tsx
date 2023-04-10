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

export const HeadlineText = styled(TextBase)<Props>`
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 700;
  line-height: 1.2;

  ${({ type, theme }) => theme.headlineText[type]}
`

interface Props extends PropsTextBaseType {
  type: 'xl' | 'l' | 'm' | 's' | 'xs' | 'xxs' | string
}
