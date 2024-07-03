import React from 'react'

const formatCurrency = (number) => {
    return new Intl.NumberFormat('us-EN', { style: 'currency', currency: 'USD' }).format(number);
  }

const Rate = (props) => {
    const isEditing = props.isEditing
    const setRate = props.setRate
    const rate = props.rate //the format currency would change 5.3492 to $5.35

    //you could also set this up using destructuring
    
    if(isEditing == true){
        return (
            <td>
                <input type="text" value={rate} onChange={(e)=> setRate(e.target.value)}/>/hr
            </td>
        )
    }else{
        return (
            <td>
                {formatCurrency(rate)}/hr
            </td>
        )
    }
}

export default Rate