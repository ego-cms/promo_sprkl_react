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

import React, { FC } from 'react'
import { BodyText, Box, HeadlineText, OutsiderClicker } from 'sprkl'

type Props = {
  setClose: (opt: boolean) => void
}
export const Notifications: FC<Props> = ({ setClose }) => (
  <OutsiderClicker
    zIndex="999"
    func={() => setClose(false)}
    position="absolute"
    directionFlex="column"
    padding="xl"
    width="auto"
    borderRadius="l"
    right="30px"
    top="60px"
    background="white100"
    shadow="6px 6px 30px rgba(69, 93, 140, 0.1), 2px 2px 2px rgba(69, 93, 140, 0.1)"
  >
    <HeadlineText type="xxxs">Notifications</HeadlineText>

    <Box margin="l 0 0 0">
      <Box height="10px" width="10px" margin="5px s 0 0" borderRadius="xl" background="warning600" />

      <Box directionFlex="column">
        <HeadlineText margin="0 0 xxs 0" type="xxxxs">
          Patients status
        </HeadlineText>

        <BodyText color="neutrals500" type="s">
          Rosa Charles status has changed to outpatient
        </BodyText>
      </Box>
    </Box>

    <Box margin="l 0 0 0">
      <Box height="10px" width="10px" margin="5px s 0 0" borderRadius="xl" background="warning600" />

      <Box directionFlex="column">
        <HeadlineText margin="0 0 xxs 0" type="xxxxs">
          Patients status
        </HeadlineText>

        <BodyText color="neutrals500" type="s">
          Rosa Charles status has changed to outpatient
        </BodyText>
      </Box>
    </Box>

    <Box margin="l 0 0 0">
      <Box height="10px" width="10px" margin="5px s 0 0" borderRadius="xl" background="warning600" />

      <Box directionFlex="column">
        <HeadlineText margin="0 0 xxs 0" type="xxxxs">
          Patients status
        </HeadlineText>

        <BodyText color="neutrals500" type="s">
          Rosa Charles status has changed to outpatient
        </BodyText>
      </Box>
    </Box>
  </OutsiderClicker>
)
