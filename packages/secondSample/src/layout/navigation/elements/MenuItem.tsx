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

import React, { FC, ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { BodyText, Box } from 'sprkl'

type Props = {
  title: string
  link: string
  icon: ReactNode
  disableIconBox?: boolean
}

const NavLinkStyled = styled(NavLink)`
  opacity: 1;
  color: ${({ theme }) => theme.colors.neutrals800};
  display: flex;
  -webkit-box-align: center;
  align-items: center;

  padding: 0.5rem 0.625rem;
  margin: 0.09375rem 0;
  border-radius: ${({ theme }) => theme.corners.l};
  cursor: pointer;
  user-select: none;
  text-decoration: none;

  &.active {
    background: ${({ theme }) => theme.colors.primary50};

    &:hover {
      background: ${({ theme }) => theme.colors.primary50};
    }
  }

  &:hover {
    background: ${({ theme }) => theme.colors.neutrals50};
  }
`

const MenuItem: FC<Props> = ({ title, link, icon, disableIconBox }) => (
  <NavLinkStyled to={link}>
    <Box>
      {!disableIconBox && (
        <Box
          width="24px"
          alignItems="center"
          justifyContent="center"
          margin={Boolean(title) ? '0 6px 0 0' : '0'}
          color="primary900"
        >
          {icon}
        </Box>
      )}
      <BodyText type="m">{title}</BodyText>
    </Box>
  </NavLinkStyled>
)

export default MenuItem
