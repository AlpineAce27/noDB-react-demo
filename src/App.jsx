import { useState } from 'react'
import './App.css'
import InvoiceTable from './components/InvoiceTable'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <InvoiceTable />
    </>
  )
}

export default App
