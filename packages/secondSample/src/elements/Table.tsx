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
