import React from 'react'

const ModeButtons = (props) => {

    const {isEditing} = props //uses destructuring to create the isEditing variable that the parent component provide
    //you could also do it like this "const isEditing = props.isEditing"


    //we need to display the "Save" button if were are editing. If we are not editing we need to show the "Delete" and "Edit" buttons
    if(isEditing == true){
        return (
        <td>
            <button>Save</button>
        </td>)
    }
    else{
        return (
        <td>
            <button>Delete</button>
            <button>Edit</button>
        </td>
        )
    }


  return (
    <div>ModeButtons</div>
  )
}

export default ModeButtons