import React from 'react'

const Description = (props) => {

    const description = props.description
    const isEditing = props.isEditing 
    const setDescription = props.setDescription
    //you could also set this up using destructuring- "const {isEditing, description} = props"

    //if we are editing we want to show a text input field, if we are not editing, we should just show the description
    if(isEditing == true){
        return (
            <td>
            <input type="text" value={description} onChange={(e)=> setDescription(e.target.value)}/>
            </td>
        )
    }else{
        return (
            <td>
            {description}
            </td>
        )
    }  
}

export default Description