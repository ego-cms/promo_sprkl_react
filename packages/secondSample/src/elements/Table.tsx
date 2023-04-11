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
import { useTable } from 'react-table'
import { useNavigate } from 'react-router-dom'

type Props = {
  columns: any
  data: any
  isClickable?: boolean
  path?: string
}

export const Table: FC<Props> = ({ columns, data, isClickable, path }) => {
  const navigate = useNavigate()
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  })

  const handleClick = row => {
    if (isClickable) {
      navigate(path + row.original.id)
    }
  }

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup, index) => (
          <tr key={index} {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column, i) => (
              <th key={i} {...column.getHeaderProps()}>
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            <tr onClick={() => handleClick(row)} key={i} {...row.getRowProps()}>
              {row.cells.map((cell, index) => (
                <td key={index} {...cell.getCellProps()}>
                  {cell.render('Cell')}
                </td>
              ))}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
