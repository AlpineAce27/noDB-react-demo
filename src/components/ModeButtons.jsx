import React from 'react'

const ModeButtons = (props) => {

    const {isEditing, editFunction, saveFunction, deleteRow} = props //uses destructuring to create the isEditing variable that the parent component provide
    //you could also do it like this "const isEditing = props.isEditing"


    //we need to display the "Save" button if were are editing. If we are not editing we need to show the "Delete" and "Edit" buttons
    if(isEditing == true){
        return (
        <td>
            <button onClick={saveFunction}>Save</button>
        </td>)
    }
    else{
        return (
        <td>
            <button onClick={deleteRow}>Delete</button>
            <button onClick={editFunction}>Edit</button>
        </td>
        )
    }

}

export default ModeButtons