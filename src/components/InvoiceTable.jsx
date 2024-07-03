import TableHeader from "./TableHeader";
import AddButton from "./AddButton";
import TableRow from "./TableRow";

const TEST_DATA = [
    { id: 0, description: 'Content plan', rate: 50, hours: 4 },
    { id: 1, description: 'Copy writing', rate: 50, hours: 2 },
    { id: 2, description: 'Website design', rate: 50, hours: 5 },
    { id: 3, description: 'Website development', rate: 100, hours: 5 },
  ];

const InvoiceTable = () => {

    //create an array of table rows
    const rows = TEST_DATA.map((el) => {
       return <TableRow initialInvoiceData={el} initialEditMode={false} key = {el.id}/>
    })
    

    return (
        <div>
            <table>
                <thead><TableHeader/></thead>

                <tbody>
                    {rows}
                </tbody>

                <tfoot><AddButton></AddButton></tfoot>
            </table>
        </div>
    )
}

export default InvoiceTable