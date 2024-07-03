import React from 'react'

const TableHeader = () => {
  return (
    <tr>
        <th>{/*space for the spacing above edit buttons*/}</th>
        <th>Description</th>
        <th>Rate</th>
        <th>Hours</th>
        <th>Amount</th>
    </tr>
  )
}

export default TableHeader