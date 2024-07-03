import React from 'react'

const Hours = (props) => {
    const isEditing = props.isEditing
    const hours =  props.hours
    const setHours = props.setHours
    //you could also set this up using destructuring

    if(isEditing == true) {
        return (
            <td>
            <input type="text" value={hours} onChange={(e) => setHours(e.target.value)} />
            </td>
        )
    }else{
        return (
            <td>
            {hours}
            </td>
        )
    }
  
    
}

export default Hours