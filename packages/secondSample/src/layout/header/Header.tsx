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

import React, { Dispatch, FC, SetStateAction, useState } from 'react'
import { Avatar, BodyText, Box, HeadlineText, Input, TertiaryButton } from 'sprkl'
import MenuIcon from '@mui/icons-material/Menu'
import { Notifications } from './components'
import MenuOpenIcon from '@mui/icons-material/MenuOpen'
import { BellIcon, SearchIcon } from '../../elements'
import { useTypedSelector } from '../../store'

type Props = {
  title: string
  titleComponent?: any
  isNavBar: boolean
  setIsNavBar: Dispatch<SetStateAction<boolean>>
  margin?: string
}

export const Header: FC<Props> = ({ setIsNavBar, isNavBar, title, titleComponent, margin }) => {
  const resolution = useTypedSelector(state => state.resolution)
  const isDesktop = resolution === 'desktop'
  const mobile = resolution === 'mobile'

  const [isNotifications, setIsNotifications] = useState(false)

  const menuIcon = isNavBar ? <MenuOpenIcon fontSize="small" /> : <MenuIcon fontSize="small" />

  const handleNotificationsClick = () => setIsNotifications(p => !p)
  const handleMenuClick = () => setIsNavBar(p => !p)

  return (
    <Box margin={margin} justifyContent="space-between" alignItems="center" position="relative">
      {titleComponent || <HeadlineText type="s">{title}</HeadlineText>}

      <Box alignItems="center">
        {!mobile && <Input icon={<SearchIcon margin="0 0 0 16px" />} inputType="m" placeholder="Search..." />}

        {!isDesktop && (
          <TertiaryButton onClick={handleMenuClick} color="neutrals600" styleType="s">
            {menuIcon}
          </TertiaryButton>
        )}

        <TertiaryButton margin="0 m" onClick={handleNotificationsClick} color="neutrals600" styleType="s">
          <BellIcon />
          <Box
            overflow="hidden"
            width="16px"
            height="16px"
            borderRadius="xl"
            background="warning400"
            position="absolute"
            top="-5px"
            right="-3px"
            alignItems="center"
            justifyContent="center"
          >
            <BodyText type="s">3</BodyText>
          </Box>
        </TertiaryButton>

        <Avatar color="white100" type="icon" background="primary600" size="xxxs" border="circular" />
      </Box>

      {isNotifications && <Notifications setClose={setIsNotifications} />}
    </Box>
  )
}
