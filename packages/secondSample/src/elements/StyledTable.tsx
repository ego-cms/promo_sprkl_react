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
