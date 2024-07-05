import ModeButtons from './ModeButtons.jsx'
import Description from './Description.jsx'
import Rate from './Rate.jsx'
import Hours from './Hours.jsx'
import {useState} from 'react'
import axios from 'axios'


const formatCurrency = (number) => {
    return new Intl.NumberFormat('us-EN', { style: 'currency', currency: 'USD' }).format(number);
  }

const TableRow = (props) => {

    //import the delete row functionality to send down the parent/child chain
    const deleteRow = props.deleteRow
    const setCurrentData = props.setCurrentData
    
    //setting up state values
    const [editMode, setEditMode] = useState(props.initialEditMode)
    const [description, setDescription] = useState(props.initialInvoiceData.description)
    const [rate, setRate] = useState(props.initialInvoiceData.rate)
    const [hours, setHours] = useState(props.initialInvoiceData.hours)
    
    
    //console.log(props)

    const changeToEditMode = () => {
        setEditMode(true)
    }
    const changeToNormalMode = () => {
        const bodyObj = {
            bodyDescription: description,
            bodyRate: rate,
            bodyHours: hours
        }
        axios.put(`/api/invoice/${props.initialInvoiceData.id}`, bodyObj).then((response)=> {
            setCurrentData(response.data)
        })

        setEditMode(false)
    }

    //this is what will render when the TableRow function is called. In the table this is called multiple times, making multiple rows
    return (
       <tr>
        <ModeButtons isEditing={editMode} editFunction = {changeToEditMode} saveFunction = {changeToNormalMode} deleteRow = {deleteRow}/>
        <Description isEditing={editMode} description={description} setDescription = {setDescription}/>
        <Rate isEditing={editMode} rate={rate} setRate = {setRate}/>
        <Hours isEditing={editMode} hours={hours} setHours = {setHours}/>
        <td>{formatCurrency(rate * hours)}</td> 
        {/*Amount does not have a dedicated component, so we have to create another table data tag, and do the
        math for the amount inside using the properties passed in from the parent object. (we also format it to be be a currency)  */}
       </tr>
    )

}

export default TableRow