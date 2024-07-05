import TableHeader from "./TableHeader";
import AddButton from "./AddButton";
import TableRow from "./TableRow";
import { useState, useEffect } from 'react'
import axios from "axios";

const InvoiceTable = () => {

    //create use effect (use effect decides what happens when the page loads the first time)
    useEffect(() => {
        getAllInvoices()
    }, [])

    const [currentData, setCurrentData] = useState([])

    //create a function that uses axios to get TEST_DATA from server
    const getAllInvoices = () => {
        axios.get('/api/allInvoices').then((response) => {
            setCurrentData(response.data)
        })
    }

   //create a function that uses axios to post a new default invoice
    const addInvoice = () => {
        
        const BodyObject = {
            //These are the intial/default values that will show up when a new invoice is created
            description: 'description here',
            rate: 0,
            hours: 0,
        }

        axios.post('/api/invoice', BodyObject).then((response) => {
            setCurrentData(response.data)
            })
    }

    //create a function that uses axios to delete an invioce with a specific id
    const deleteInvoice = (id2kill) => {
        axios.delete(`/api/invoice/${id2kill}`).then((response) => {
            setCurrentData(response.data)
        })
    }

    //create a function that uses axios.put to update an invice with a specific id
    

    //create an array of table rows
    const rowsArray = currentData.map((el) => {
        return (
            <TableRow
                key={el.id}
                initialInvoiceData={el}
                initialEditMode={false}
                deleteRow={() => deleteInvoice(el.id)}
                setCurrentData={setCurrentData}
            />
        )
    })

    //This is what will show up on the page when the InvoiceTable is called (this happens in App.jsx)
    return (
        <div>
            <table>
                <thead><TableHeader /></thead>

                <tbody>
                    {rowsArray}
                </tbody>

                <tfoot><AddButton addInvoice={addInvoice} /></tfoot>
            </table>
        </div>
    )
}

export default InvoiceTable