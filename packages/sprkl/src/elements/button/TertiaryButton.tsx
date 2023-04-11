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

import React from 'react'
import styled from 'styled-components'
import { ButtonBase, PropsButtonBase } from './ButtonBase'

export const TertiaryButton = styled(ButtonBase)<PropsButtonBase>`
  background: transparent;
  color: ${({ theme }) => theme.colors.primary700};

  &:hover {
    background: ${({ theme }) => theme.colors.neutrals50};
  }

  &:active {
    background: ${({ theme }) => theme.colors.neutrals100};
  }

  ${({ theme, styleType }) => theme.tertiaryButton[styleType]}
`
