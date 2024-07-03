import ModeButtons from './ModeButtons.jsx'
import Description from './Description.jsx'
import Rate from './Rate.jsx'
import Hours from './Hours.jsx'

const formatCurrency = (number) => {
    return new Intl.NumberFormat('us-EN', { style: 'currency', currency: 'USD' }).format(number);
  }
const TableRow = (props) => {

    console.log(props)

    return (
       <tr>
        <ModeButtons isEditing={props.initialEditMode} />
        <Description isEditing={props.initialEditMode} description={props.initialInvoiceData.description}/>
        <Rate isEditing={props.initialEditMode} rate={props.initialInvoiceData.rate}/>
        <Hours isEditing={props.initialEditMode} hours={props.initialInvoiceData.hours}/>
        <td>{formatCurrency(props.initialInvoiceData.rate * props.initialInvoiceData.hours)}</td>
       </tr>
    )

}

export default TableRow