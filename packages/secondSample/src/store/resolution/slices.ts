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

import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ResolutionType } from '../../types'

export const resolution = createSlice({
  name: 'resolution',
  initialState: 'desktop' as ResolutionType,
  reducers: {
    setResolution: (state, { payload }: PayloadAction<ResolutionType>) => payload,
  },
})

export const { setResolution } = resolution.actions
