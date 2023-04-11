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

type Props = {
  isClickable?: boolean
}

export const Styles = styled.div<Props>`
  &&& {
    all: revert;
    display: block;
    max-width: 100%;

    table {
      width: 100%;
      border-spacing: 0;
      border: none;

      th,
      td {
        margin: 0;
        padding: 8px 0;
      }

      th {
        padding: 0 0 8px 0;
      }

      td {
        text-align: left;
      }

      tbody {
        tr {
          cursor: ${({ isClickable }) => (isClickable ? 'pointer' : 'initial')};
          &:hover {
            background: ${({ theme, isClickable }) => (isClickable ? theme.colors.primary50 : 'none')};
          }
        }
      }
    }
  }
`
