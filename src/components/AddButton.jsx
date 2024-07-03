import React from 'react'

const AddButton = () => {
  return (
    <tr>
        <td>{/*space for the spacing below edit buttons*/}</td>
        <td colSpan={4}> {/*column span tells the data element how many columns it will take up*/}
            <button>Add</button>
        </td>
    </tr>
  )
}

export default AddButton

