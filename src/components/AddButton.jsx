import React from 'react'

const AddButton = (props) => {

  const addInvoice = props.addInvoice

  return (
    <tr>
        <td>{/*space for the spacing below edit buttons*/}</td>
        <td colSpan={4}> {/*column span tells the data element how many columns it will take up*/}
            <button onClick={addInvoice}>Add</button>
        </td>
    </tr>
  )
}

export default AddButton

