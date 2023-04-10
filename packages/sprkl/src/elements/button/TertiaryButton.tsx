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
