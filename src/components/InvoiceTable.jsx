import TableHeader from "./TableHeader";
import AddButton from "./AddButton";
import TableRow from "./TableRow";
import { useState } from 'react'

const TEST_DATA = [
    { id: 0, description: 'Content plan', rate: 50, hours: 4 },
    { id: 1, description: 'Copy writing', rate: 50, hours: 2 },
    { id: 2, description: 'Website design', rate: 50, hours: 5 },
    { id: 3, description: 'Website development', rate: 100, hours: 5 },
  ];

let globalID = 4


const InvoiceTable = () => {

    const [currentData, setCurrentData] = useState(TEST_DATA)

    const addInvoice = () => {

        const invoiceCopy = [...currentData]

        const invoiceObject = {
            //These are the intial/default values that will show up when a new invoice is created
            id: globalID,
            description: 'description here',
            rate: 0,
            hours: 0,
        }
        invoiceCopy.push(invoiceObject)
        setCurrentData(invoiceCopy)
        globalID++
    }

    const deleteInvoice = (id2kill) => {
        const invoiceCopy = [...currentData]
        const invoiceFilter = invoiceCopy.filter((el) => el.id != id2kill)
        setCurrentData(invoiceFilter)
    }

    //create an array of table rows
    const rowsArray = currentData.map((el) => {
       return (
            <TableRow
            key = {el.id}
            initialInvoiceData={el}
            initialEditMode={false}
            deleteRow={() => deleteInvoice(el.id)}
            />
        )
    })
    
    //This is what will show up on the page when the InvoiceTable is called (this happens in App.jsx)
    return (
        <div>
            <table>
                <thead><TableHeader/></thead> 

                <tbody>
                    {rowsArray}
                </tbody>

                <tfoot><AddButton addInvoice={addInvoice}/></tfoot>
            </table>
        </div>
    )
}

export default InvoiceTable